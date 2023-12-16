import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
  canActivate: [AuthGuard],
  canActivateChild: [CursosGuard],
  canLoad: [AuthGuard]
},
  {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
  canActivate: [AuthGuard],
  canLoad: [AuthGuard]
  //canActivateChild: [AlunosGuard]
},
  //{ path: 'cursos', component: CursosComponent},
  //{ path: 'cursos/:id', component: CursoDetalheComponent},
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PaginaNaoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
 }
