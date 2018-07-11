import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../shared/notification.service';
import {Notification} from '../models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  type: string = null;
  message: string = null;

  constructor(private notifier: NotificationService) {
    notifier.emmitter.subscribe(data => {
      const data2 = <Notification>data;
      this.type = data2.type;
      this.message = data2.message;
      this.reset();
    });
  }

  ngOnInit() {

  }

  reset() {
    setTimeout(() => {
      this.type = null;
    }, 5000);
  }

  // ngOnDestroy(){
  // }
}
