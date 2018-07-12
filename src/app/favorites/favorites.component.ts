import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favouritesList: any = [];
  constructor() {
  }

  ngOnInit() {
    const uid = firebase.auth().currentUser.uid;
    const favRef = firebase.database().ref('favourites').child(uid);
    favRef.once('value').then(snapshot => {
      const favouritesObj = snapshot.val();
      this.favouritesList = Object.values(favouritesObj);
    });
  }

}
