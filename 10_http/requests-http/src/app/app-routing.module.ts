import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsubscribePocComponent } from './unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component';
import { PocComponent } from './unsubscribe-rxjs/componentes/poc.component';
import { PocAsyncComponent } from './unsubscribe-rxjs/componentes/poc-async.component';
import { PocTakeUntilComponent } from './unsubscribe-rxjs/componentes/poc-take-until.component';
import { PocTakeComponent } from './unsubscribe-rxjs/componentes/poc-take.component';
import { PocUnsubComponent } from './unsubscribe-rxjs/componentes/poc-unsub.component';
import { PocBaseComponent } from './unsubscribe-rxjs/poc-base/poc-base.component';
import { CommonModule } from '@angular/common';
import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs/unsubscribe-rxjs-routing.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'busca-reativa', pathMatch: 'full' 
  },
  {
    path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'rxjs-poc',
    loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(m => m.UnsubscribeRxjsModule)
  },
  {
    path: 'upload', loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)
  },
  {
    path: 'busca-reativa',
    loadChildren: () => import('./reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    UnsubscribeRxjsRoutingModule],
  exports: [RouterModule],
  declarations: [
    UnsubscribePocComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocBaseComponent
  ]
})
export class AppRoutingModule { }
