import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  usuario: any = {
    nome: 'Loiane',
    email: 'loiane@email.com'
  }

  contador = 1;

  onSubmit(form: any){

    this.contador++;
    console.log(form);    
    console.log(this.usuario);  
    console.log(this.contador);  
    

  }

}
