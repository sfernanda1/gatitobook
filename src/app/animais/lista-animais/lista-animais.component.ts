import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais ;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  // Não é boa prática usar subscribe dentro de outro
  // ngOnInit(): void {
  //   this.usuarioService.retornaUsuario().subscribe((usuario) =>{
  //     const userName = usuario.name ?? '';
  //     this.animaisService.listaDoUsuario(userName).subscribe((animais) =>{
  //       this.animais = animais;
  //     })
  //   })
  // }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param =>{
      this.animais = this.activatedRoute.snapshot.data['animais'];
    })
  }
}
