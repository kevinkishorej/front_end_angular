import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service :ServiceService) { }

  @Output() sidemenu = new EventEmitter<void>();
  ngOnInit(): void {
  }

  greetevent:boolean
  
  fun(){
    this.sidemenu.emit();
  }
    
  
}
