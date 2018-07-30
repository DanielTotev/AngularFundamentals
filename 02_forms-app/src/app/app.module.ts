//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import  { HttpClientModule } from '@angular/common/http'

//Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from './app.routes';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
