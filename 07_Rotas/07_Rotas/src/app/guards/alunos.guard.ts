import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable, observable, of } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild{
        
    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | boolean{

            console.log(route);    
            console.log(state);    

            console.log('AlunosGuard: Guarda de Rota filha');

            if(state.url.includes('editar')){
                //alert('Usuário sem aesso.');
                //return of(false);
            }
            return of(true);
        }

}