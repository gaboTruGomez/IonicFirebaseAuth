import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  displayName: string;
  email: string;
  photourl: string;

  constructor(public navCtrl: NavController) 
  {
    if (!this.isAlreadyLoggedIn())
    {
      console.log('not logged in yet, redirecting to login page');
      this.navCtrl.push(LoginPage);      
    }
    else
    {
      let user = JSON.parse(window.localStorage.getItem('user'));
      this.displayName = user.displayName;
      this.email = user.email;
      this.photourl = user.photoURL;
    }
  }

  ionViewDidEnter()
  {
    if (this.isAlreadyLoggedIn())
      {
        let user = JSON.parse(window.localStorage.getItem('user'));
        this.displayName = user.displayName;
        this.email = user.email;
        this.photourl = user.photoURL;
      }
  }

  isAlreadyLoggedIn()
  {
    let user = window.localStorage.getItem('user');
    return user !== null && user !== undefined;
  }
}
