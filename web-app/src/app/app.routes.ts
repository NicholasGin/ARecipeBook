import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component"

export const routes: Routes = [ 
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login on the root path
    { path: 'login', component: LoginComponent },
    { path: 'homepage', component: HomeComponent }
];
