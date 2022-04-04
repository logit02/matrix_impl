import {Component} from '@angular/core';
import {LongPollingService} from "../../services/long-polling.service"
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private poolData$: Observable<Object>;

  constructor(
    private longPollingService: LongPollingService
  ) {
    this.poolData$ = this.longPollingService.nextSyncSubject$;
    this.poolData$.subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
