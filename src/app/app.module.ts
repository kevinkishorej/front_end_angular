import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SaidNavComponent } from './said-nav/said-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './auth/reg/reg.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { FormsModule ,ReactiveFormsModule  } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaidNavComponent,
    LoginComponent,
    RegComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule,MatIconModule,MatButtonModule,MatSidenavModule,MatCardModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,MatInputModule,
    BrowserAnimationsModule,HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
