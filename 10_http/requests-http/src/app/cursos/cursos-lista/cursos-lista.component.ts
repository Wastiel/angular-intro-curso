import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable, Subject, catchError, empty, switchMap, take } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos2Service } from '../cursos2.service';

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

  cursoSelecionado!: Curso;

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(private service: Cursos2Service,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute   
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

    onEdit(id: number){
      this.router.navigate(['editar', id ], {relativeTo: this.route});
    }

    onDelete(curso: Curso){
      this.cursoSelecionado = curso;
      //this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
      const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que desja remover esse curso?', 'Sim', 'Cancelar' )
      result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(curso.id) : empty())
      )
      .subscribe( 
        success => {this.onRefresh(), this.onDeclineDelete},
        error => {this.alertService.showAlertDanger('Erro ao remover o curso. Tente novamente mais tarde'), this.onDeclineDelete}
    );
    
    }

    onConfirmDelete() {
      this.service.remove(this.cursoSelecionado.id).subscribe(
        success => {this.onRefresh(), this.onDeclineDelete},
        error => {this.alertService.showAlertDanger('Erro ao remover o curso. Tente novamente mais tarde'), this.onDeclineDelete}
      );
      this.deleteModalRef.hide();      
    }
   
    onDeclineDelete() {
      this.deleteModalRef.hide();
    }

}
