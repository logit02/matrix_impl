import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {getBearerToken} from "./auth/bearer-token";

const AUTHORIZATION_HEADER = 'authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq;
    const token = getBearerToken();
    if (token) {
      newReq = request.clone({
        headers: request.headers.set(AUTHORIZATION_HEADER, 'Bearer ' + token)
      });
    } else {
      newReq = request.clone({
        headers: request.headers.delete(AUTHORIZATION_HEADER)
      });
    }

    return next.handle(newReq);
  }

}
