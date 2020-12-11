import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {
  
   }
   name:string;

   register(post:string){
     this.http.post("http://localhost:3000/reg",post)
   }
}
