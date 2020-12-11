import { UserProfile } from './service.user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainservicesService {

  private _teachermassage = new Subject<string>();
  teacher$ = this._teachermassage.asObservable();

  constructor(private http:HttpClient) { }

 reference(data:any){
  this._teachermassage.next(data);
 }


  localStorage(id:any){
    localStorage.setItem('id',id)
  }

  getprofile(){
    var id = localStorage.getItem("id")
  }

  getme():Observable<UserProfile[]>{
    const id = localStorage.getItem("id");
    const HttpHeader = new HttpHeaders({
     'Content-Type': 'application/json',
     'authorization': id
     
   });
   return this.http.get<UserProfile[]>("pro",{headers:HttpHeader})
  }

  register(post:string):Observable<UserProfile[]>{
    return this.http.post<UserProfile[]>("reg",post)
  }

  login(post:string):Observable<UserProfile[]>{
    return this.http.post<UserProfile[]>("log",post)
  }
}
