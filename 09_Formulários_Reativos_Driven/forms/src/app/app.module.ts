import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { TemplateFormComponent } from './template-form/template-form.component';

import { TemplateFormModule } from './template-form/template-form.module';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';
import { DataFormModule } from './data-form/data-form.module';


@NgModule({
  declarations: [
    AppComponent,             
  ],
  imports: [
    ModalModule,
    FormsModule,
    BsDropdownModule,
    TooltipModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    TemplateFormModule,
    ReactiveFormsModule,
    DataFormModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
