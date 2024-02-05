import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poc-base',
  templateUrl: './poc-base.component.html',
  styleUrls: ['./poc-base.component.scss']
})
export class PocBaseComponent implements OnInit {

  @Input() nome!: string | null;
  @Input() valor!: string;
  @Input() estilo!: string;

  
  
  constructor() { }

  ngOnInit() {
    if (this.nome === null) {
      // Faça algo específico para lidar com nome nulo, se necessário
      this.nome = 'Nome Padrão';
    }
    
   
  }

}