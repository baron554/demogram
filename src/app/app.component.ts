import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const config = {
      apiKey: 'AIzaSyBFdCn1yaAWKe333vHn7K-Cro-vjfML1ZE',
      authDomain: 'instagram-c6da0.firebaseapp.com',
      databaseURL: 'https://instagram-c6da0.firebaseio.com',
      projectId: 'instagram-c6da0',
      storageBucket: 'instagram-c6da0.appspot.com',
      messagingSenderId: '527949106663'
    };
    firebase.initializeApp(config);
  }

}
