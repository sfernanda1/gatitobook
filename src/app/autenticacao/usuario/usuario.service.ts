import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private TokenService:TokenService) {
    if (this.TokenService.possuiToken()){
      this.decodificaJWT();
    }
   }

  private decodificaJWT(){
    const token = this.TokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token:string){
    this.TokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.TokenService.excluiToken();
    this.usuarioSubject.next({});
  }

  estaLogado(){
    return this.TokenService.possuiToken();
  }

}
