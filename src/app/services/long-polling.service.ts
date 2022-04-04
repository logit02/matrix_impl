import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {environment} from "../../environments/environment";
import {expand, Observable} from "rxjs";
import {ISync} from "../models/sync.model";

@Injectable({
  providedIn: 'root'
})
export class LongPollingService {
  nextSyncSubject$!: Observable<ISync>;

  private next_batch: string | undefined;
  readonly POOL_TIMEOUT = 30000;

  constructor(
    private _httpClient: HttpClient
  ) {
    this.startPolling();
  }

  startPolling() {
    this.nextSyncSubject$ = this._syncApi().pipe(
      expand(data => this._syncApi(data.next_batch))
    );
  }

  _syncApi(next_batch?: string): Observable<ISync> {
    const url = Location.joinWithSlash(
      environment.baseUrl || '', '/_matrix/client/r0/sync'
    );

    const params: any = {timeout: this.POOL_TIMEOUT};
    if (next_batch) {
      params.since = next_batch;
    }
    return this._httpClient.get<ISync>(url, {params});
  }

}
