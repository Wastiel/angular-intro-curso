import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent {
  
  //@Input() mostraErro!: boolean;
  //@Input() msgErro!: string;

  @Input() control!: AbstractControl;
  @Input() label!: string;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          // todo
        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
    }
    return false;
  }
}
