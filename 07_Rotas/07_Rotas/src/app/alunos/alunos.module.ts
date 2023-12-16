import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';



@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],  
  exports: [],
  declarations: [
    AlunosComponent,
    AlunosDetalheComponent,
    AlunosFormComponent
  ],
  providers: [
    AlunosService,
    AlunosDeactivateGuard,
    AlunoDetalheResolver
]
})
export class AlunosModule {}