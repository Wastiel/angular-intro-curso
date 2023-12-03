/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highligthMouse]'
})
export class HighligthMouseDirective {
  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  private backgroundColor!: string;

  constructor(    
    //private _ElementRef: ElementRef,
    //private _renderer: Renderer2
    ) { }

}