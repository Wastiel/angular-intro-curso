import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import {map} from 'rxjs/operators';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  constructor(private http: HttpClient,
    private cepService: ConsultaCepService){}

    consultaCEP(cep: any, form: any) {
        console.log(cep);        
         //Nova variável "cep" somente com dígitos.
         // Próprio CEP faz o replace dos digitos (CEP variavel)
         cep = cep.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

          //Expressão regular para validar o CEP.
          var validacep = /^[0-9]{8}$/;

           //Valida o formato do CEP.
           if(validacep.test(cep)){

            this.resetaDadosForm(form);
            this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados, form));                     
           }
        }
      }

      populaDadosForm(dados: any, form: any){
        /*form.setValue({
          name: form.value.name,
          email: form.value.email,
          endereco: {
            rua: dados.logradouro,
            cep: dados.cep,
            numero: '',
            complemento: dados.complemento,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }
        });*/

        form.form.patchValue({
          endereco: {
            rua: dados.logradouro,
            cep: dados.cep,           
            complemento: dados.complemento,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }

        })
        console.log(form);

      }

      resetaDadosForm(form: any){
        form.form.patchValue({
          endereco: {
            rua: null,
            complemento: null,
            bairro: null,
            cidade: null,
            estado: null
          }
        });

      }

    verificaValidTouched(campo: any){
      return !campo.valid && campo.touched;

    }

    aplicaCssErro(campo: { valid: any; touched: any; }){

      return {
        'has-error': this.verificaValidTouched(campo),
        'has-feedback': this.verificaValidTouched(campo),
    }
  }

  usuario: any = {
    nome: null,
    email: null
  }

  contador = 1;

  onSubmit(form: any){

    this.contador++;
    console.log(form);    
   

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => {
        console.log(dados);
        form.form.reset();
      });
      
    console.log(this.usuario);  
    console.log(this.contador);  
    

  }

}
