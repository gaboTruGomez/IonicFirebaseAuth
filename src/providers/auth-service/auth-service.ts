import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from "angularfire2/auth";
import  * as firebase from "firebase/app";

import { Platform } from "ionic-angular";
import { Facebook } from "@ionic-native/facebook";

@Injectable()
export class AuthServiceProvider 
{
  private currentUser: firebase.User;

  constructor(public afAuth: AngularFireAuth, public platform: Platform, private facebook: Facebook)
  {
    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user
    });
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  signInWithFacebook(): firebase.Promise<any> 
  {
    if (this.platform.is('cordova'))
    {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return this.afAuth.auth.signInWithCredential(facebookCredential);
      });
    }
    else 
    {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());      
    }
  }

  signOut(): void 
  {
    this.afAuth.auth.signOut();
  }

  displayName(): string
  {
    if (this.currentUser !== null)
    {
      return this.currentUser.displayName;
    }
    else 
    {
      return '';
    }
  }

  getFirebaseUser(): firebase.User
  {
    return this.currentUser;
  }
}
