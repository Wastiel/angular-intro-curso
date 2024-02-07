import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable, Subject, catchError, empty } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit{

  //cursos!: Curso[];
  
  error$ = new Subject<boolean>();
  cursos$!: Observable<Curso[]>;

  constructor(private service: CursosService,
    // private modalService: BsModalService
    private alertService: AlertModalService   
    ){}

  ngOnInit(){
    this.onRefresh();
    
  } 

  onRefresh() {
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        //this.error$.next(true);
        this.handelError();
        return empty();
      })
      );

      /*this.service.list()
      .pipe(
        catchError(error => empty())
      )
      .subscribe(
        dados => {
          console.log(dados);
         }
      )*/    
    }
  
    handelError(){
      this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde')
      /*this.bsModalRef = this.modalService.show(AlertModalComponent);
      this.bsModalRef.content.type = 'danger';
      this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';*/
    }

}