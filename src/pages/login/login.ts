import { Component, ElementRef, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { AngularFireModule } from "angularfire2";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  root: any;
  emailVal: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public element: ElementRef, private _auth: AuthServiceProvider) 
  {
    
  }

  ngOnInit()
  {
    this.root = this.element.nativeElement;
    //var loginBtn = this.root.querySelector('#loginBtn');
    var fbBtn = this.root.querySelector('#fb-login');
    //var twBtn = this.root.querySelector('#twitter-login');
    //loginBtn.addEventListener('click', this.onClick.bind(this));
    fbBtn.addEventListener('click', this.onFacebookLogin.bind(this));
    //twBtn.addEventListener('click', this.onTwitterLogin.bind(this));
  }

  onClick()
  {
    //let self = this;
    //this.email = this.root.querySelector('#email').value;
    //let password: string = this.root.querySelector('#password').value;

  }

  onFacebookLogin()
  {
    this._auth.signInWithFacebook().then(() => {
      this.onSignInSuccess();
    });
  }

  onSignInSuccess()
  {
    console.log("Facebook display name: " + this._auth.displayName());
    console.log("Facebook email: " + this._auth.getFirebaseUser().email);
    this.emailVal = this._auth.getFirebaseUser().email;
    window.localStorage.setItem('user', JSON.stringify(this._auth.getFirebaseUser()));
    this.navCtrl.pop();
  }

  onTwitterLogin()
  {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
