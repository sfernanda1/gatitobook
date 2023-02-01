import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor(private tokenSerivce: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenSerivce.possuiToken()){
      const token = this.tokenSerivce.retornaToken();
      const headers = new HttpHeaders().append('x-access-token', token)
      request = request.clone({ headers });
    }
    // Para continuar a requisição
    return next.handle(request);
  }
}
