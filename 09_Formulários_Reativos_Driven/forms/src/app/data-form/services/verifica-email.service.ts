import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string): Observable<boolean> {
    return this.http.get<{ emails: any[] }>('assets/dados/verificarEmail.json')
      .pipe(
        delay(3000),
        map((dados) => dados.emails),        
        map((dados: { email: string }[]) => dados.filter(v => v.email === email)),
        map((dados: any[]) => dados.length > 0)
      );
  }
}
