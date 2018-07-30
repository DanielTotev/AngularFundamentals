import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent }
];