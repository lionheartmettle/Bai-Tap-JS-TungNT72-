import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenizedReq = req.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer BQByGAYPEMs1MXQzwDyG2fMl9e6bQHCzeHJwzjzkggirFr2xLYtVGBsmFddYRb5linLpYVwaD1eND4w2Te1lx9Pvvrf4jXBQWoaJoYKifSNG4lOT5mnL42eB6KAazrriokS80YjSi0e_97G01P7EGodKYqPJXu2qzA'
      }
    });
    return next.handle(tokenizedReq);
  }
}
