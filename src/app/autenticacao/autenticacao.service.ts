import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(private httpCliente: HttpClient, private UsuarioService: UsuarioService) { }

  autentica(usuario:string, senha:string):Observable<HttpResponse<any>>{
    return this.httpCliente.post('http://localhost:3000/user/login',{
      userName: usuario,
      password: senha,
    },
    {
      observe:'response'
    }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.UsuarioService.salvaToken(authToken);
      } )
    )
  }
}
