import { UserProfile } from './../../service.user';
import { MainservicesService } from './../../mainservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:MainservicesService) { }

  user:UserProfile

  ngOnInit(): void {
    this.service.getme().subscribe((data:any)=>{
      console.log("profile"+data )
      this.user = data
      console.log(this.user)
    })

    

    
  }

  fun(){
    console.log(this.user)
  }
}
