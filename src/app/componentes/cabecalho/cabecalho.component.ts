import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.UsuarioService.retornaUsuario();
  // guarda o observable

  constructor(private UsuarioService: UsuarioService, private Router : Router) { }

  logout() {
    this.UsuarioService.logout();
    this.Router.navigate(['']);
  }

}
