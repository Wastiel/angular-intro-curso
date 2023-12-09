import { Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['java', 'Angular 2'];

  filtro!: string;

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos(){

    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }   

    return this.livros.filter(v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
   );     
   
  }

  // vai atribuir o valor assincrono a variavel async depois de 2 segundos.
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = interval(2000)
  .pipe(
    map(valor => 'Valor assíncrono 2')
  );

}
