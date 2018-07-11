import {CanActivate} from '@angular/router';
import * as firebase from 'firebase';

export class RouteGuard implements CanActivate {

  canActivate() {
    // if we are logged in... return true ... else return false
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }
}
