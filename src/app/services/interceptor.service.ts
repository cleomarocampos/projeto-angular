import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest }
from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {

 intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    // console.log(request);

    request = request.clone({
      url: 'http://localhost:8000/' + request.url,
    });

    return next.handle(request);
 }

}
