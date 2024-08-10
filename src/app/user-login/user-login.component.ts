import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardHarness} from '@angular/material/card/testing';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    BrowserModule
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
    constructor(){

    }

    Title="welcome to login"
}
