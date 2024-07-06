import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any={
    "username":"",
    "password":""
  };

  masterService = inject(MasterService);
  router = inject(Router)

  onLogin(){
    console.log(this.loginObj);
    this.masterService.login(this.loginObj).subscribe({
      next:(res:any)=>{
        // console.log(res.status);
        if(res[0].id > 0){
          localStorage.setItem('ticketUser',JSON.stringify(res[0]));
          this.router.navigateByUrl('dashboard');
        }
      },
      error:(error:any)=>{
        alert(error.error[0].error);
      }
     });
  }

}
