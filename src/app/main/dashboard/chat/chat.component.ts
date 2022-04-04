import {Component} from '@angular/core';
import {LongPollingService} from "../../../services/long-polling.service";
import {IEvents} from "../../../models/sync.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  directChats: IEvents[] = [];
  Object = Object;

  constructor(
    public longPollingService: LongPollingService
  ) {
    longPollingService.nextSyncSubject$.subscribe(
      data => {
        if (data.account_data?.events) {
          this.getDirectChats(data.account_data?.events);
        }
        console.log(this.directChats);
      }
    )
  }

  private getDirectChats(events: IEvents[]) {
    const chats = events.filter(item => item.type === 'm.direct');
    if (chats.length) {
      this.directChats = chats;
    }
  }
}
