import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    CabecalhoModule,
    RodapeModule,
    AutenticacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
