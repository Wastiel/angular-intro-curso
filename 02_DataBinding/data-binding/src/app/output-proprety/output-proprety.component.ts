import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-proprety.component.html',
  styleUrls: ['./output-proprety.component.scss'],
  outputs: ['onMudouValor']

})
export class OutputPropretyComponent {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput!: ElementRef;

  inrementa(){
    console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
    //this.valor++;
    this.mudouValor.emit({novoValor: this.valor});

  }

  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor(){

  }

}
