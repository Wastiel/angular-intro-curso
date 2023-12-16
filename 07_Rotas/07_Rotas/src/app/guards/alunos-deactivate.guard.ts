//import { IFormCanDeactivate } from '../iform-candeactivate';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
                
        canDeactivate(
            component: IFormCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('guarda de desativação');


            //return true;
           // return component.podeMudarRota ? component.podeMudarRota() : true;

            return component.podeDesativar ? component.podeDesativar() : true;
    }
}