import { Routes } from '@angular/router';
import path from 'path';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {   
        path:'', 
        component:UserLoginComponent},
    {
        path:'register', 
        component: UserRegisterComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
    }
];
