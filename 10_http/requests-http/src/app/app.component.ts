import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'requests-http';
}


// Pode ser necessario forçar a inicializaçõa do bootstrap 5 dentro

/*
 import { setTheme } from 'ngx-bootstrap/utils';
   
  @Component({…})
  export class AppComponent {
    constructor() {
      setTheme('bs5'); // or 'bs4'
      …
    }
  }

*/

