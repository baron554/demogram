import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private notifier: NotificationService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const fullname = form.value.fullname;
    const email = form.value.email;
    const password = form.value.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification();
        const message = `A verification email has been sent to ${email}. Please check your inbox.
          Once verification is complete, please log in to the application`;
        this.notifier.display('success', message);
        return firebase.database().ref('users/' + userData.user.uid).set({
          email: email,
          uid: userData.user.uid,
          registrationDate: new Date().toString(),
          name: fullname
        }).then(() => {
          firebase.auth().signOut();
        });
      })
      .catch(err => {
        this.notifier.display('error', err.message);
        console.log(err);
      });
  }

}
