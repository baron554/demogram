import {Component, OnDestroy, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {MyFireService} from '../shared/myFire.service';
import {NotificationService} from '../shared/notification.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit, OnDestroy {
  postLists: any = [];
  personalPostsRef: any;

  constructor(private myFire: MyFireService, private notifier: NotificationService) {
  }

  ngOnInit() {
    const uid = firebase.auth().currentUser.uid;
    this.personalPostsRef = this.myFire.getUserPostsRef(uid);
    this.personalPostsRef.on('child_added', data => {
      this.postLists.push({
        key: data.key,
        data: data.val()
      });
      console.log(this.personalPostsRef);
    });

  }

  ngOnDestroy() {
    this.personalPostsRef.off();
  }

  onFileSelection(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.myFire.uploadFile(file)
        .then(data => {
          this.notifier.display('success', 'Picture Successfully Uploaded!');
          this.myFire.handleImageUpload(data);
        })
        .catch(err => {
          this.notifier.display('error', err);
        });

    }


  }
}
