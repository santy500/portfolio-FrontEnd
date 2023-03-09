import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortfolioService } from '../servicios/portfolio.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private portfolioService:PortfolioService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.portfolioService.getToken();
    
    if(token){
      
      var tok = 'Bearer '+token;
      const cloned = request.clone({
        
        headers: request.headers.set('Authorization', tok)
      })
      return next.handle(cloned);
    }
    
    return next.handle(request);
  }
}
