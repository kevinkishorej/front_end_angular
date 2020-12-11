import { MainservicesService } from './../mainservices.service';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-said-nav',
  templateUrl: './said-nav.component.html',
  styleUrls: ['./said-nav.component.css']
})
export class SaidNavComponent implements OnInit {

  constructor(private service:MainservicesService) { }
  opened = true;

  reference:any;

  ngOnInit(): void {
    this.service.teacher$.subscribe(data=>{
      console.log("saide nave"+data)
      this.reference = data
    })
    

  }




    
  }
