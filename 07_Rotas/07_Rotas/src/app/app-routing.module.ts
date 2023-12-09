import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent},
  { path: 'cursos/:id', component: CursoDetalheComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
 }
