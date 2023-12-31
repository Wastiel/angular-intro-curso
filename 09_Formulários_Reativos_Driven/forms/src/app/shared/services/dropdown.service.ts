import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadoBr } from '../models/estado-br.model';
import { Cidade } from '../models/cidades';
import { Observable, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadosBR(){
    //return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');//.pipe();
    return this.http.get<EstadoBr[]>('/assets/dados/estadosBr.json').pipe();
  }

  getCargos(){
    return[
      {nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      {nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'},
    ];
  }

  getTecnologias(){
    return[
      {nome: 'java', desc: 'Java'},
      {nome: 'javascript', desc: 'JavaScript'},
      {nome: 'php', desc: 'PHP'},
      {nome: 'ruby', desc: 'Ruby'},
    ];
  }

  getNewsletter() {
    return [
      { id:1, valor:'S', desc: 'Sim' },
      { id:0, valor:'N', desc: 'Não' },
    ];
  }

   
  getCidades(idEstado: number): Observable<Cidade[]> {
    const cidades = this.http.get<Cidade[]>(`/assets/dados/cidades.json`)
      .pipe(
        map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
      );
  
    return cidades;
  }
}
  


