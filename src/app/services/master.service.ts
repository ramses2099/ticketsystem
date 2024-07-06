import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl:string ="http://10.0.0.50:8090/";
  //apiUrl:string ="http://127.0.0.1:8000/";

  headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) {

  }

  login(obj:any):Observable<any>{
    this.headers.append('Content-Type','application/json')
    return this.http.post<any>(this.apiUrl+`api/v1/login`, obj,{headers:this.headers})
  }

  gettoken(obj:any):Observable<any>{
    this.headers.append('Content-Type','application/json')
    return this.http.post<any>(this.apiUrl+`api/token`, obj,{headers:this.headers})
  }


  test():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts',{headers:this.headers})
  }



}
