import { Injectable } from '@angular/core';
import {Location} from "@angular/common";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(
    private httpClient: HttpClient
  ) { }

  sync(){
    const url = Location.joinWithSlash(
      environment.baseUrl || '', '/_matrix/client/r0/'
    )
    return this.httpClient.get(url);
  }
}
