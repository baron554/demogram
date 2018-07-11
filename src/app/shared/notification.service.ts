import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Notification} from '../models/notification';

@Injectable()
export class NotificationService {
  private sub = new Subject();
  public emmitter = this.sub.asObservable();

  display(type, message) {
    const data  = {
      type, message
    };
    this.sub.next(<Notification>data);
  }
}
