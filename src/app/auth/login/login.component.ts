import { MainservicesService } from './../../mainservices.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:MainservicesService, private router:Router) { }

  userForm = this.fb.group({
    
    name:['',Validators.required],
    password:['',Validators.required],
    
  });
  ngOnInit(): void {
  }

  result:string;



  onSubmit(){
    var USERFORM = this.userForm.value;
    console.log(USERFORM)
    this.service.login(USERFORM).subscribe((data:any)=>{
      if(!data){
        console.log("invalide")
      }
       else if(data._id){
        this.service.localStorage(data._id)
        console.log(data._id) 
        this.router.navigate(['/profile'])
      }else{
          console.log(data)
          this.result = data;
      }
    })
  }

}
