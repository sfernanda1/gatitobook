import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then((m)=> m.HomeModule)
  },
  {
    path: 'animais',
    loadChildren: () =>
      import('./animais/animais.module').then((m) => m.AnimaisModule),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
