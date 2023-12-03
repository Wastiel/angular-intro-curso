/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, HostListener, HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}