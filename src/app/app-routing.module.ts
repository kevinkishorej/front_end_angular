import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegComponent } from './auth/reg/reg.component';
import { HomeComponent } from './home/home.component';
import { SaidNavComponent } from './said-nav/said-nav.component';


const routes: Routes = [
  
  {path:'',component:HomeComponent,
  children:[
    {path:'',component:LoginComponent},
    {path:'reg',component:RegComponent},
    {path:'profile',component:ProfileComponent},
  ]},
  {path:'',component:SaidNavComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
