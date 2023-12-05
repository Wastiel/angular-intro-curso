import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { CursosService } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [    
    CursosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule    
        
  ],
  exports: [CursosComponent],
  providers: [CursosComponent],
  bootstrap: [CursosService]
})
export class CursosModule { }
