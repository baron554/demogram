import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() imageName: string;
  @Input() displayPostedBy: boolean = true;
  @Input() displayFavouritesButton = true;
  @Input() displayFollowButton = true;
  defaultImage = 'http://via.placeholder.com/150x150';
  imageData: any = {};

  @Output() favouriteClicked = new EventEmitter<any>();
  @Output() followClicked = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {
    const uid = firebase.auth().currentUser.uid;

    firebase.database().ref('images').child(this.imageName)
      .once('value')
      .then(snapshot => {
        this.imageData = snapshot.val();
        this.defaultImage = this.imageData.fileUrl;

        if (this.imageData.uploadedBy.uid === uid) {
          this.displayFavouritesButton = false;
          this.displayFollowButton = false;
        }
      });
  }

  onFavouritesClicked() {
    this.favouriteClicked.emit(this.imageData);
  }

  onFollowClicked() {
    this.followClicked.emit(this.imageData);
  }
}
