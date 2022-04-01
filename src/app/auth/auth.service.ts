import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {environment} from "../../environments/environment";
import {ILoginBody} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  login(body: ILoginBody) {
    const url = Location.joinWithSlash(
      environment.baseUrl || '', '/_matrix/client/r0/login'
    );

    return this._httpClient.post(url, body);
  }
}
