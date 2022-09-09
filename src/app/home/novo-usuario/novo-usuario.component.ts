import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm! : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private NovoUsuarioService:NovoUsuarioService,
    private usuarioExistenteService : UsuarioExisteService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      //O angular já possui validação por meio dos validators
      email:['',[
        Validators.required, Validators.email
      ]],
      fullName:['', [
        Validators.required, Validators.minLength(4)
      ]],
      // o array na terceira posição vai tratar das validações assincronas
      userName:['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExite()]],
      password:[''],

    },
    {
      validators: [usuarioSenhaIguaisValidator],
    }
    );
  }

  cadastrar(){
    if(this.novoUsuarioForm.valid){
      const NovoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.NovoUsuarioService.cadastraNovoUsuario(NovoUsuario).subscribe(() => {
        this.router.navigate(['']);

      },
      (error) => {
        console.log(error);
      }
      )
    }

  }

}
