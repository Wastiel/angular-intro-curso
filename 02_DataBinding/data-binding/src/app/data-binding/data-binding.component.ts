import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {


  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  isMouseOut: boolean = false;
  nome: string = 'abc';

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }


  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Teste');
  }

  onKeyUp(evento: KeyboardEvent){
   this.valorAtual = ((<HTMLInputElement>evento.target).value);

  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  
}
