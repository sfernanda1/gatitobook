import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { Injectable } from '@angular/core';
import { map, switchMap, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(
    private NovoUsuarioService:NovoUsuarioService) {}

    usuarioJaExite(){
      return (control:AbstractControl) => {
        return control.valueChanges.pipe(
          switchMap((nomeUsuario) => this.NovoUsuarioService.verificaUsuarioExistente(nomeUsuario)
          //muda o fluxo
          ),
          map((usuarioExiste) => (usuarioExiste ? {usuarioExistente:true} : null)
          //altera o resultado
          ),
          first()
          //para encerrar o fluxo da validação
        );
      };
    }
}
