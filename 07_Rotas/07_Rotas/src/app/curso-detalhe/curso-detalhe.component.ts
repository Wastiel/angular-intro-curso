import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent {

  id!: string;
  //idCourseValue:string = '';

  //rota ativa, podemos injetar no construtuor os detalhes da rota

  constructor(private route: ActivatedRoute){
    console.log(this.route);
    this.id = this.route.snapshot.params['id'];

  }

}
