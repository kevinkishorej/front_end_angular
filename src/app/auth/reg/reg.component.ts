import { MainservicesService } from './../../mainservices.service';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private fb:FormBuilder,  private service:MainservicesService ,private router:Router) { }

  userForm = this.fb.group({
    
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    conpass:['',Validators.required],
  });

  ngOnInit(): void {
  
  }


  onSubmit(){
    var confirm = this.userForm.value.conpass;
    var password = this.userForm.value.password;

    if(confirm != password){
      console.log("wrong")

    }else if(confirm == password){
    var USERFORM = this.userForm.value;
      console.log(USERFORM)
    this.service.register(USERFORM).subscribe(data=>{
      console.log(data)
      this.service.reference(data)
      this.router.navigate(['/'])
    })
    }
  }
}
