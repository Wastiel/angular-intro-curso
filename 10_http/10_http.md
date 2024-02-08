# Http


# 01. Http / HttpClient: Introdução
- [Vídeo Aula](https://youtu.be/Tu7wtZyTwdw)
- Requisições ajax, modulo http
- Httpclient
- O que vamos aprender
	- Consumir API Rest
	- Http GET
	- Http POST
	- Http PUT
	- Http DELETE
	- Serviço Genérico de CRUD REST
	- Pipe Async
	- Cachear dados localmente
	- Unsubscribe automático
	- boas práticas RxJS
	- Gerenciar Erros
	- parâmetros GET
	- Header do Request
	- Interceptors
	- Upload Arquivo
	- Serviço de Busca/Pesquisa
- Criamos um novo projeto somente para trabalharmos com o http
	- ng new requestes-http
	- Habilitamos rotas
	- Habilitamos o scss

# 02. Instalando Bootstrap 4
- [Vídeo Aula](https://youtu.be/Vgj9N_Lw-r4)
- Instalamos toda a estrutura de bootstrap
- Criamos o projeto
	- 
- Criamos o seguinte leiaute:
	````html
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary"> 
		    <a class="navbar-brand" href="#">HTTP</a>
		    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
		      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
		        <li class="nav-item">
		          <a class="nav-link active" aria-current="page" [routerLink]="['/']" routerLinkActive="active">Home</a>
		        </li>
		        <li class="nav-item">
		          <a class="nav-link" [routerLink]="['/cursos']" routerLinkActive="active">Cursos</a>
		        </li>       
		      </ul>      
		    </div>  
		</nav>

		<div class="container">
		  <router-outlet></router-outlet>
		</div>
	````
- Criamos o módulo de cursos 
	- ng g m cursos --routing
	- Ja criamos a rota junto de cursos
- Criamos o componente 
	- ng g c cursos/cursos-lista
- Ajustamos a o cursos-routing.module
	````typeScript
		import { NgModule } from '@angular/core';
		import { RouterModule, Routes } from '@angular/router';
		import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

		const routes: Routes = [
		  {path: '', component: CursosListaComponent}
		];

		@NgModule({
		  imports: [RouterModule.forChild(routes)],
		  exports: [RouterModule]
		})
		export class CursosRoutingModule { }

	````
- Fizemos o ajuste também do arquivo de rotas padrão
	````typeScript
		import { NgModule } from '@angular/core';
		import { RouterModule, Routes } from '@angular/router';

		const routes: Routes = [
		  {
		    path: '', pathMatch: 'full', redirectTo: 'cursos' 
		  },
		  {
		    path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
		  }
		];

		@NgModule({
		  imports: [RouterModule.forRoot(routes)],
		  exports: [RouterModule]
		})
		export class AppRoutingModule { }

	````

# 03. Http: Simulahttps://youtu.be/mczUdRvLBc8ndo Servidor REST (json-server)

- [Vídeo Aula](https://youtu.be/mczUdRvLBc8)
- Vamos simular um servidor REST
	- Util para momentos em que estamos esperando o back ficar pronto e queremos realizar testes.
- Mandar as requisições para outro lado. 
- muitos backs...
- json-server
	- Podemos utilizar as diversas funções crud. 
- [json server](https://www.npmjs.com/package/json-server)
- Instalamos o json server 
	- npm install -g json-server
- Criamos um arquivo para testes
	- db.json
	````json
		{
	    "cursos": [
		      { "id": 1, "nome": "Angular" },
		      { "id": 2, "nome": "Java" }
		    ]
		  }
	````
- Agora ajustamos o processo de fluxo de dados
- Utilizamos o seguinte comando para iniciar o servidor
	- json-server --watch db.json
- Instalamos a extensão REST Client (Nem sempre funciona)
- Criamos um novo arquivo chamado exemplo.http
	- Dentro dele colocamos a seguinte chamada
		````http
			http://localhost:3000/cursos
		````
- Posterior usamos um problema insomnia para usarmos os serviços de posts, gets e etc
	- Exemplo para post
		````json
			{ "nome": "php" }
		````
	- Exemplo para put
		 http://localhost:3000/cursos/2
		````json
			{ "nome": "php" }
		````
	- Exemplo de delete
		http://localhost:3000/cursos/2
	- Get de um curso especifico
		http://localhost:3000/cursos/1
- Nas próximas aulas vamos utilizar este fluxo 
	

# 04. Http GET: listar registros
- [Vídeo Aula](https://youtu.be/Bg47WHVc020)
- Vamos fazer uma chamada para listar todos os cursos na nossa tabela de dados. 
- Criamos o nosso template 
	````html
		<div class="card mt-3">
	    <div class="card-header d-flex justify-content-between align-items-center">
	      <div class="float-start">
	        <h4>Cursos</h4>
	      </div>
	      <div class="margin-righ: auto">
	        <button type="button" class="btn btn-primary" [routerLink]="['novo']">Novo Curso</button>
	        <!--button type="button" class="btn btn-secondary" (click)="onRefresh()">Atualizar</!--button-->
	      </div>
	    </div>
	    <div class="card-body">
	      <table class="table table-hover" >
	        <thead>
	          <tr>
	            <th>#</th>
	            <th>Curso</th>
	            <th></th>
	          </tr>
	        </thead>
	        <tbody>
	            <tr >
	              <td></td>
	              <td></td>
	              <td>                
	                <span class="float-end">
	                  <button class="btn btn-outline-warning mb-1 btn-sm" >
	                    Atualizar
	                  </button>    
	                  
	                  <button class="btn btn-outline-danger mb-1 btn-sm" >
	                    Remover
	                  </button>
	                </span>            
	              </td>
	            </tr>
	          </tbody>
	        </table>
	````
- Ajustamos uma configuração no nosso módulo para aceitar espaços relacionados ao angular 
	- Conseguimos formatar com espaços
	````typeScript
		@Component({
		  selector: 'app-cursos-lista',
		  templateUrl: './cursos-lista.component.html',
		  styleUrls: ['./cursos-lista.component.scss'],
		  preserveWhitespaces: true
		})
	````
- Agora vamos criar o nosso serviço.
	- ng g s cursos/cursos
- Como vamos utilizar o httpclient, precisamos importar ele dentro do httpModule
	````typescript
		@NgModule({
		  declarations: [
		    AppComponent
		  ],
		  imports: [
		    BrowserModule,
		    AppRoutingModule,
		    BrowserAnimationsModule,
		    BrowserModule,
		    TooltipModule.forRoot(),
		    ModalModule.forRoot(),
		    BsDropdownModule.forRoot(),
		    TabsModule.forRoot(),   
		    HttpClientModule
		  ],
		  providers: [    
	````
- Adicionamos ao nosso 
- Com GET podemos tipar o retorno
	- Por padrão vem um observable
- ajustamos o nosso service do cursos, para retornar os nossos crusos
	````typeScript
		import { Injectable } from '@angular/core';
		import { HttpClient } from '@angular/common/http';
		import { Curso } from './curso';
		import { tap } from 'rxjs';

		@Injectable({
		  providedIn: 'root'
		})
		export class CursosService {

		  private readonly API = 'http://localhost:3000/cursos'
		  constructor(private http: HttpClient) { }

		  list(){
		    return this.http.get<Curso[]>(this.API)
		    .pipe(
		      tap(console.log)
		    );

		  }
		}

	````
- Ajustamos o nosso componente
	````typeScript
		import { Component, OnInit } from '@angular/core';
		import { CursosService } from '../cursos.service';
		import { Curso } from '../curso';

		@Component({
		  selector: 'app-cursos-lista',
		  templateUrl: './cursos-lista.component.html',
		  styleUrls: ['./cursos-lista.component.scss'],
		  preserveWhitespaces: true
		})
		export class CursosListaComponent implements OnInit{

		  cursos!: Curso[];

		  constructor(private service: CursosService){}

		  ngOnInit(){
		    this.service.list()
		    .subscribe(dados => this.cursos = dados);
		  }

		}

	````
- Posterior ajustamos o nosso html
	````html
		<div class="card mt-3">
		    <div class="card-header d-flex justify-content-between align-items-center">
		      <div class="float-start">
		        <h4>Cursos</h4>
		      </div>
		      <div class="margin-righ: auto">
		        <button type="button" class="btn btn-primary" [routerLink]="['novo']">Novo Curso</button>
		        <!--button type="button" class="btn btn-secondary" (click)="onRefresh()">Atualizar</!--button-->
		      </div>
		    </div>
		    <div class="card-body">
		      <table class="table table-hover" >
		        <thead>
		          <tr>
		            <th>#</th>
		            <th>Curso</th>
		            <th></th>
		          </tr>
		        </thead>
		        <tbody>
		            <tr *ngFor="let curso of cursos">
		              <td>{{ curso.id }}</td>
		              <td>{{ curso.nome }}</td>
		              <td>                
		                <span class="float-end">
		                  <button class="btn btn-outline-warning mb-1 btn-sm" >
		                    Atualizar
		                  </button>    
		                  
		                  <button class="btn btn-outline-danger mb-1 btn-sm" >
		                    Remover
		                  </button>
		                </span>            
		              </td>
		            </tr>
		          </tbody>
		        </table>
	````
- Com isto os cursos do nosso db.json são mostrados em tela.
- 
# 05. Http: Dica: Variável de Ambiente
- [Vídeo Aula](https://youtu.be/_wD51xSwC2Y)
- Variavel de ambiente para parametrizar a url do nosso request ajax
- Quando o projeto subir para produção, não podemos enviar o seguinte caminho:
	````typeScript
		private readonly API = 'http://localhost:3000/cursos'
	````
- Criamos a pasta environments com dois arquivos dentro
	- environments.ts
		````typeScript
			export const environment = {
		    production: true,
		    API: '/',
		  };
		````
	- enviroments.prod.ts
		````typeScript
		// environment.ts
		export const environment = {
		    production: false,
		    API: 'http://localhost:3000/',
		  };

		````
- Ajustamos as chamadas da api da seguinte maneira:
	````typeScript
		import { Injectable } from '@angular/core';
		import { HttpClient } from '@angular/common/http';
		import { Curso } from './curso';
		import { tap } from 'rxjs';
		import { environment } from 'environments/environment';

		@Injectable({
		  providedIn: 'root'
		})
		export class CursosService {

		  private readonly API = `${environment.API}cursos`;
		  constructor(private http: HttpClient) { }

		  list(){
		    return this.http.get<Curso[]>(this.API)
		    .pipe(
		      tap(console.log)
		    );

		  }
		}

	````

# 06. Http GET + Pipe Async

- [Vídeo Aula](https://youtu.be/dKFeXl96nsA)
- Vamos aprender a utilizar o pype async
- Toda a vez que nos inscrevermos, temos que nos desinscrever. 
- Toda a vez que vermos uma variavel com $ no final, ela é uma variavel subscrible
	````typeScript
		cursos$!: Observable<Curso[]>;
	````
- Fizemos um ajuste no nosso serviço e utilizamos a variavel com pype para subscrição
	````typeScript
		export class CursosListaComponent implements OnInit{

		  cursos!: Curso[];
		  cursos$!: Observable<Curso[]>;

		  constructor(private service: CursosService){}

		  ngOnInit(){
		    /*this.service.list()
		    .subscribe(dados => this.cursos = dados);*/
		    this.cursos$ = this.service.list();
		  } 

	````
	````html
		<tr *ngFor="let curso of cursos$ | async">
	              <td>{{ curso.id }}</td>
	              <td>{{ curso.nome }}</td>
	              <td>                

	````
- Criamos uma validação para loding em tela
	````html
		<table class="table table-hover" *ngIf="cursos$ | async; else loading" >
		....
		 <ng-template #loading role="status">     
            <div class="text-center">                
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </ng-template>
	````
- Fizemos um ajuste para não carregar os cursos duas vezes:
	````html
		<div class="card mt-3">
		    <div class="card-header d-flex justify-content-between align-items-center">
		      <div class="float-start">
		        <h4>Cursos</h4>
		      </div>
		      <div class="margin-righ: auto">
		        <button type="button" class="btn btn-primary" [routerLink]="['novo']">Novo Curso</button>
		        <!--button type="button" class="btn btn-secondary" (click)="onRefresh()">Atualizar</!--button-->
		      </div>
		    </div>
		    <div class="card-body">
		      <table class="table table-hover" *ngIf="cursos$ | async as cursos; else loading" >
		        <thead>
		          <tr>
		            <th>#</th>
		            <th>Curso</th>
		            <th></th>
		          </tr>
		        </thead>
		        <tbody>
		            <tr *ngFor="let curso of cursos">
		              <td>{{ curso.id }}</td>
		              <td>{{ curso.nome }}</td>
		              <td>                
		                <span class="float-end">
		                  <button class="btn btn-outline-warning mb-1 btn-sm" >
		                    Atualizar
		                  </button>    
		                  
		                  <button class="btn btn-outline-danger mb-1 btn-sm" >
		                    Remover
		                  </button>
		                </span>            
		              </td>
		            </tr>
		          </tbody>
		        </table>
		        
		        <ng-template #loading role="status">     
		            <div class="text-center">                
		                <div class="spinner-border" role="status">
		                  <span class="visually-hidden">Loading...</span>
		                </div>
		            </div>
		        </ng-template>		        
	````
- Com isto o fluxo de cursos, carrega somente uma vez. 

# 07. Http + RxJS: Unsubscribe Automático

- [Vídeo Aula](https://youtu.be/0w2i7h5c9jk)
- Unscribe automático.
- Sempre que possível utilizar o pype aysinc.
- Mostrar diferentes maneiras de se inscrever. 
- Criamos o hiperlink no navbar
	````html
		 <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" [routerLink]="['/rxjs-poc']">RxJS POC</a>
        </li>       
	````
- Criamos o roteamento
	````typeScript
		 {
		    path: 'rxjs-poc',
		    loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(m => m.UnsubscribeRxjsModule)
		  },
	````
- Criamos o modulo com roteamento
	````typeScript
		ng g m unsubscribe-rxjs --routing
	````
- Criamos o componente
	- ng g c unsubscribe-rxjs/unsubscribe-poc
	- Preenchemos a logica deste componente com o conteiner abaixo
	````html
		<div class="container">
    <h3 class="mt-4 ml-3">RxJS POC - Unsubscribe</h3>
    <div class="row mt-4 ml-3">
      <form class="form-inline">
        <div class="form-group mr-sm-2">
          <input type="text" class="form-control" #valor placeholder="Valor">
        </div>  
        
        <div class="form-group float-end">
          <button type="button" class="btn btn-outline-primary" (click)="emitirValor(valor.value)">Emitir Valor</button>
          <button type="button" class="btn btn-outline-danger" (click)="destruirComponentes()">Mostrar / Destruir Componentes</button>
        </div>
        <!--div class="form-group " >
          <button type="button" class="btn btn-outline-danger" (click)="destruirComponentes()">Mostrar / Destruir Componentes</button>
        </!--div-->
      </form>
    </div>
    <div class="row mt-4" *ngIf="mostrarComponentes" >
      <app-poc class="col-md-4"></app-poc>
      <app-poc-unsub class="col-md-4"></app-poc-unsub>
      <app-poc-async class="col-md-4"></app-poc-async>
      <app-poc-take-until class="col-md-4"></app-poc-take-until>
      <app-poc-take class="col-md-4"></app-poc-take>
    </div>
	````
	````typeScript
		import { Component, OnInit } from '@angular/core';
		import { EnviarValorService } from '../enviar-valor.service';

		@Component({
		  selector: 'app-unsubscribe-poc',
		  templateUrl: './unsubscribe-poc.component.html',
		  styleUrls: ['./unsubscribe-poc.component.scss']
		})
		export class UnsubscribePocComponent implements OnInit {

		  mostrarComponentes = true;

		  constructor(private service: EnviarValorService) { }

		  ngOnInit() {
		  }

		  emitirValor(valor: string) {
		    this.service.emitirValor(valor);
		  }

		  destruirComponentes() {
		    this.mostrarComponentes = !this.mostrarComponentes;
		  }

		}
	````
- Criamos o componente poc-base
	- ng g c unsubscribe-rxjs/poc-base
	````html
		<div class="col">
		  <div class="card mb-4">
		    <div class="card-header text-white {{ estilo }}">{{ nome }}</div>
		    <div class="card-body">
		      <h3 class="card-title">{{ valor }}</h3>
		    </div>
		  </div>
		</div>
	````		
	````typeScript
		import { Component, OnInit, Input } from '@angular/core';

		@Component({
		  selector: 'app-poc-base',
		  templateUrl: './poc-base.component.html',
		  styleUrls: ['./poc-base.component.scss']
		})
		export class PocBaseComponent implements OnInit {

		  @Input() nome!: string;
		  @Input() valor!: string;
		  @Input() estilo!: string;

		  constructor() { }

		  ngOnInit() {
		  }

		}
	````
- criamos os seguintes componentes na mao
	- Diretorio: componentes
		- poc-async.component.ts
			````typeScript
			import { Component, OnInit, OnDestroy } from '@angular/core';
			import { EnviarValorService } from '../enviar-valor.service';
			import { tap } from 'rxjs/operators';
			import { Observable } from 'rxjs';

			@Component({
			  selector: 'app-poc-async',
			  template: `
			    <app-poc-base [nome]="nome"
			      [valor]="(valor$ | async) ??  ' ' " estilo="bg-success">
			    </app-poc-base>
			  `
			})
			export class PocAsyncComponent implements OnInit, OnDestroy {

			  nome = 'Componente com async';
			  valor$!: Observable<string>;

			  constructor(private service: EnviarValorService) { }

			  ngOnInit() {
			    this.valor$ = this.service.getValor()
			      .pipe(tap(v => console.log(this.nome, v)));
			  }

			  ngOnDestroy() {
			    console.log(`${this.nome} foi destruido`);
			  }

			}
			````
		- poc-take-until.component.ts
			````typeScript
				import { Component, OnInit, OnDestroy } from '@angular/core';
				import { EnviarValorService } from '../enviar-valor.service';
				import { tap, takeUntil } from 'rxjs/operators';
				import { Subject } from 'rxjs';

				@Component({
				  selector: 'app-poc-take-until',
				  template: `
				    <app-poc-base [nome]="nome"
				      [valor]="valor" estilo="bg-primary">
				    </app-poc-base>
				  `
				})
				export class PocTakeUntilComponent implements OnInit, OnDestroy {

				  nome = 'Componente com takeUntil';
				  valor!: string;

				  unsub$ = new Subject();

				  constructor(private service: EnviarValorService) {}

				  ngOnInit() {
				    this.service.getValor()
				      .pipe(
				        tap(v => console.log(this.nome, v)),
				        takeUntil(this.unsub$)
				      )
				      .subscribe((novoValor: string) => this.valor = novoValor);
				  }

				  ngOnDestroy() {
				    this.unsub$.next();
				    this.unsub$.complete();
				    console.log(`${this.nome} foi destruido`);
				  }
				}
			````
		- poc-take.component.ts
			````typeScript
				import { Component, OnInit, OnDestroy } from '@angular/core';
				import { EnviarValorService } from '../enviar-valor.service';
				import { tap, take } from 'rxjs/operators';

				@Component({
				  selector: 'app-poc-take',
				  template: `
				    <app-poc-base [nome]="nome"
				      [valor]="valor" estilo="bg-info">
				    </app-poc-base>
				  `
				})
				export class PocTakeComponent implements OnInit, OnDestroy {

				  nome = 'Componente com take';
				  valor!: string;

				  constructor(private service: EnviarValorService) {}

				  ngOnInit() {
				    this.service.getValor()
				      .pipe(
				        tap(v => console.log(this.nome, v)),
				        take(1)
				      )
				      .subscribe((novoValor: string) => this.valor = novoValor);
				  }

				  ngOnDestroy() {
				    console.log(`${this.nome} foi destruido`);
				  }
				}
			````
		- poc-unsub.component.ts
			````typeScript
				import { Component, OnInit, OnDestroy } from '@angular/core';
				import { EnviarValorService } from '../enviar-valor.service';
				import { Subscription } from 'rxjs';
				import { tap } from 'rxjs/operators';

				@Component({
				  selector: 'app-poc-unsub',
				  template: `
				    <app-poc-base [nome]="nome"
				      [valor]="valor" estilo="bg-secondary">
				    </app-poc-base>
				  `
				})
				export class PocUnsubComponent implements OnInit, OnDestroy {

				  nome = 'Componente com unsubscribe';
				  valor!: string;

				  sub: Subscription[] = [];

				  constructor(private service: EnviarValorService) { }

				  ngOnInit() {
				    this.sub.push(this.service.getValor()
				      .pipe(tap(v => console.log(this.nome, v)))
				      .subscribe((novoValor: string) => this.valor = novoValor));
				  }

				  ngOnDestroy() {
				    this.sub.forEach(s => s.unsubscribe());
				    console.log(`${this.nome} foi destruido`);
				  }

				}
			````
		- poc.component.ts
			````typeScript
				import { Component, OnInit, OnDestroy } from '@angular/core';
				import { EnviarValorService } from '../enviar-valor.service';
				import { tap } from 'rxjs/operators';

				@Component({
				  selector: 'app-poc',
				  template: `
				    <app-poc-base [nome]="nome"
				      [valor]="valor" estilo="bg-danger">
				    </app-poc-base>
				  `
				})
				export class PocComponent implements OnInit, OnDestroy {

				  nome = 'Componente sem unsubscribe';
				  valor!: string;

				  constructor(private service: EnviarValorService) { }

				  ngOnInit() {
				    this.service.getValor()
				      .pipe(tap(v => console.log(this.nome, v)))
				      .subscribe((novoValor: string) => this.valor = novoValor);
				  }

				  ngOnDestroy() {
				    console.log(`${this.nome} foi destruido`);
				  }

				}

			````
- Requisição estilo Netflix, mantemos o componente ativo
- Requisição ajax simples, destruimos a requisição.
- Operador Take
	- Numero, quantos vezes vai receber a resposta.
	- Salvou o response, acabou.
	- take(1)
	- Soluções mais elegantes.
- Cuidar com a inscrição ativa.
- Componentes não usados tem que ser matados.
- Sempre se desinscrever do observable.

# 08. Capturando Erros (+ Erro com async)

- [Vídeo Aula](https://youtu.be/ifyKt2a1CVk)
- Vamos aprender a capturar erros com pype aysinc
- Vamos parar o banco de dados de forma proposital. 
- Alertar que aconteceu um erro na aplicação
- Vamos utilizar o operador catch error.
	````typeScript
		ngOnInit(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        return empty();
      })
      );
  } 

	````
- Estamos retornando empty na lógica em função de uma lógica que temos no nosso HTML
- Fizemos um ajuste na nossa lógica, para considerar
	````html
		<ng-template #loadingError role="status">
          <div *ngIf="error$ | async; else loading">
            Erro ao carregar cursos. Tente novamente mais tarde.
          </div>   
          <ng-template #loading>
            <div class="text-center">                
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </ng-template>             
        </ng-template>

	````
	- Simpleismente fizemos um controle com if e else do que pode ser mostrado na tela, caso o serviço não esteja ok.
- Lógica do typeScript
	````typeScript
		export class CursosListaComponent implements OnInit{

  //cursos!: Curso[];

  error$ = new Subject<boolean>();
  cursos$!: Observable<Curso[]>;

  constructor(private service: CursosService){}

  ngOnInit(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
      );
  } 
	````
- Inicia o serviço de lista de cursos, se nao retornar nada (Tiver error), retorna empty para a logica do componente. Se tem, gera a lista de cursos
- Ciramos um botão para atualizar a lista de cursos, como se fosse uma nova tentativa
	````html
		<button type="button" class="btn btn-secondary" (click)="onRefresh()">Atualizar</button>
	````
- Ajustamos a lógica do nosso carregar cursos
	````typeScript
	ngOnInit(){
    this.onRefresh();
    
  } 
  onRefresh() {
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
      );    
    }

	````
- Podemos utilizar qualquer operador do rtjx

# 09. Erro Http: Alerta de Erro com Bootstrap

- [Vídeo Aula](https://youtu.be/_mxn3t80Lek)
- Mostrar uma mensagem de erro com um componente de alerta do bootstrap 
- Vamos utilizar uma modal para o ajuste. 
- Serviço genérico com a modal em qualquer lugar. 
- Criamos a página shared e criamos o seguinte componente
	- ng g c shared/alert-modal
- Vamos usar o alert com uma opção de x para encerrar a modal.
	````html
	<div class="alert alert-warning alert-dismissible fade show" role="alert">
	  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
	  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
	````
- Vamos fazer alguns ajustes para pegar a informação que está vindo do nosso componente e preencher o aler genérico. 
- Ajustamos o html do nosso componente
	````html
  <div class="alert alert-{{ type }} mb-0 d-flex justify-content-between" role="alert">
    <span>{{ message }}</span>
    <button type="button" class="btn-close close" data-dismiss="alert" aria-label="Close" (click)="onClose()">
      <span class="visually-hidden" aria-hidden="true">&times;</span>
    </button>
  </div>
	````
	- Se fermos ele tem parametros do que vai ser recebido
- Posterior ajustamos a lógica do nosso componente com os padrões do ngx-bootstrap
	````typeScript
		export class AlertModalComponent {
	  @Input() message!: string; 
	  @Input() type = 'success'; 

	  constructor(public bsModalRef: BsModalRef){
	  }
	  onClose(){
    this.bsModalRef.hide();
  }
	}
	````
- Posterior setamos no nosso componente a determinada informação 
	````typescript
	bsModalRef!: BsModalRef;
  error$ = new Subject<boolean>();
  cursos$!: Observable<Curso[]>;

	 handelError(){
      this.bsModalRef = this.modalService.show(AlertModalComponent);
      this.bsModalRef.content.type = 'danger';
      this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
    }
	````
- Exportamos o componente no modulo para todos poderem usar
	````typeScript
		@NgModule({
		  declarations: [
		    AlertModalComponent
		  ],
		  imports: [
		    CommonModule
		  ],
		  exports:[AlertModalComponent]
		})
		export class SharedModule { }

	````
- temos que colocar dentro do app.module.ts o forRoot no nosso módulo, para todo mundo poder acessar
	````typeScript
		@NgModule({
	  declarations: [
	    AppComponent
	  ],
	  imports: [
	    BrowserModule,
	    AppRoutingModule,
	    BrowserAnimationsModule,
	    BrowserModule,
	    TooltipModule.forRoot(),
	    ModalModule.forRoot(),
	    BsDropdownModule.forRoot(),
	    TabsModule.forRoot(),   
	    HttpClientModule    
	  ],
	  providers: [    
	  ],
	  bootstrap: [AppComponent]
	})
	````
- 
# 10. Serviço de alerta genérico com Bootstrap 4

- [Vídeo Aula](https://youtu.be/TmIbSx_KR5Y)
- Vamos criar um serviço genérico para poder ser utilizado na aplicação.
- Reuso de código.
- Criamos o serviço
	- ng g s shared/alert-modal
- Ajustamos a service: 
	````typeScript
		import { Injectable } from '@angular/core';
		import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
		import { AlertModalComponent } from './alert-modal/alert-modal.component';

		enum AlertTypes {
		  DANGER = 'danger',
		  SUCCESS = 'success'
		}

		@Injectable({
		  providedIn: 'root'
		})
		export class AlertModalService {

		  //bsModalRef!: BsModalRef;
		  constructor(private modalService: BsModalService) { }

		  private showAlert( message: string, type: string){
		    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
		    bsModalRef.content.type = 'danger';
		    bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
		  }

		  showAlertDanger(message: string){
		    this.showAlert(message, AlertTypes.DANGER);
		  }

		  showAlerSuccess(message: string){
		    this.showAlert(message, AlertTypes.SUCCESS);
		  }
		}

	````
- Refatoramos o curso component
	````typeScript
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

	      this.service.list()
	      .pipe(
	        catchError(error => empty())
	      )
	      .subscribe(
	        dados => {
	          console.log(dados);
	         }
	      )    
	    }
	  
	    handelError(){
	      this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde')
	      /*this.bsModalRef = this.modalService.show(AlertModalComponent);
	      this.bsModalRef.content.type = 'danger';
	      this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';*/
	    }

	}

	````
	
# 11. Http: Criando formulário para criar e editar cursos

- [Vídeo Aula](https://youtu.be/laPM0vojRSA)
- Vamos fazer um formulário para~podermos cirar e editar cursos no futuro.
- ng g c cursos/cursos-form
- Adicionamos duas rotas para sinalizar novo curso e edição do curso.
````typeScript
	const routes: Routes = [
  {path: '', component: CursosListaComponent},
  {path: 'novo', component: CursosFormComponent},
  {path: 'editar', component: CursosFormComponent}
];
```` 
- Fizemos alguns ajustes no fonte e comentamos alguns pontos em que achamaos mais importantes.
- Criamos o nosso formulário, para construção e validação
````typeScript
export class CursosFormComponent {

  form!: FormGroup;
  
  constructor(private fb: FormBuilder){

  }
  ngOninit(){
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]      
    });
  }

}
````
- Criamos as funções de envio e e cancelamento e validação no fonte
	````html
		<form class="row g-3 needs-validation" novalidate [formGroup]="form" style="padding-top: 10px;">
    <div class="form-row">
        <div class="col-sm-12">
            <label for="nome">Nome do Curso</label>
            <input 
                type="text" 
                class="form-control" 
                id="nome"                 
                placeholder="Nome do Curso"
                formControlName="nome"
                [ngClass]="{'is-invalid' : submitted && hasError('nome')}"
            />  
            <div  *ngIf="hasError('nome')" class="invalid-feedback">
            
                    <div *ngIf="form.controls['nome'].errors?.['required']">
                        Por favor, insira o nome do curso.
                    </div>
                    <div *ngIf="form.controls['nome'].errors?.['minlength']">
                        Mínimo 3 caracteres
                    </div>
                    <div *ngIf="form.controls['nome'].errors?.['maxlength']">
                        Máximo 10 caracteres
                    </div>
             </div>               
        </div>
    </div>
    <div style="margin-top: 10px;">
        <button type="submit" class="btn btn-primary" (click)="onSubmit()">Salvar</button>
        <button type="button" class="btn btn-default" (click)="onCancel()">Cancelar</button>
    </div>
</form>  
	````
	````typeScript
		import { Component } from '@angular/core';
	import { FormBuilder, FormGroup, Validators } from '@angular/forms';

	@Component({
	  selector: 'app-cursos-form',
	  templateUrl: './cursos-form.component.html',
	  styleUrls: ['./cursos-form.component.scss']
	})
	export class CursosFormComponent {

	  form!: FormGroup;
	  submitted = false;
	  
	  constructor(private fb: FormBuilder){

	  }
	  ngOnInit(){
	    this.form = this.fb.group({
	      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]      
	    });
	  }

	hasError(field: string){
	  return this.form.get(field)?.errors;

	}

	  onSubmit(){
	    this.submitted = true;
	    console.log(this.form.value)
	    if(this.form.valid){
	      console.log('submit')
	    }
	  }
	  onCancel(){
	    this.submitted = false;
	    this.form.reset();
	    //console.log('onCancel')
	  }

	}

	````

# 12. HTTP POST Criando Cursos

- [Vídeo Aula](https://youtu.be/2TmYoPmPgdQ)
- Vamos criar um formulário para editar e criar cursos
- Podemos utilizar o formuláro para criar um curso novo.
- Estamos usando o jsonServer
- Criar o método do nosso serviço
- Ajustamos o nosso curso form component para cadastrar os nossos cursos:
````typeScript
	import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent {

  form!: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder, private service: CursosService,
    private modal: AlertModalService, private location: Location){

  }
  ngOnInit(){
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]      
    });
  }

hasError(field: string){
  return this.form.get(field)?.errors;

}

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if(this.form.valid){
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => {this.modal.showAlerSuccess('Curso Criado com sucesso!');
                    this.location.back();} ,
        error => this.modal.showAlertDanger('Tente Novamente'),
        ()=> console.log('request completo')
      );
    }
  }
  onCancel(){
    this.submitted = false;
    this.form.reset();
    //console.log('onCancel')
  }

}

````
- Melhoramos os nossos alertas
````typescript
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  //bsModalRef!: BsModalRef;
  constructor(private modalService: BsModalService) { }

  private showAlert( message: string, type: AlertTypes, dismissTimeout?:number){
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if(dismissTimeout){
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string){
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlerSuccess(message: string){
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }


}

````
- Realizamos a criação do nosso curso
````typeScript
	import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { Observable, delay, take, tap } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos`;
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );

  }

  create(curso: any){
    return this.http.post(this.API, curso).pipe(take(1));  }
}

````

# 13. Http: Editando Cursos e Observables aninhados

- [Vídeo Aula](https://youtu.be/ZsxoaAeWYdo)
- Vamos aprender a editar um curso.
- Preimeiramente criamos o apontamento da rota 
	````typeScript
	const routes: Routes = [
	  {path: '', component: CursosListaComponent},
	  {path: 'novo', component: CursosFormComponent},
	  {path: 'editar/:id', component: CursosFormComponent}
	];
	````
- ajustamos o evento no botão:
	````html
			<span class="float-end">
	       <button class="btn btn-outline-warning mb-1 btn-sm" (click)="onEdit(curso.id)" >
	           Atualizar
	         </button>
	       <button class="btn btn-outline-danger mb-1 btn-sm" >
	          Remover
	       </button>
	    </span>            
	````
- Ajustamos o inicio da chamada:
	````typeScript
		    onEdit(id: number){
      this.router.navigate(['editar', id ], {relativeTo: this.route});
    }
	````
- ActivatedRoute é a classe que tem os parametros da rota
- no ngOnInit, pegamos o parametro da rota:
	````typeScript
		 this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
      }
    );
	````
- Criamos uma função que chama o objeto e outra que joga o mesmo para a tela:
	````typeScript
		loadByID(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(
      take(1),
      map(curso => curso as Curso) // Convertendo o objeto retornado para o tipo Curso
    );
  }
	````
	````typeScript
	 ngOnInit(){

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        const curso$ = this.service.loadByID(id);
        curso$.subscribe(curso => {
        this.updateForm(curso);
        })
      }
    );
    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]      
    });
  }

  updateForm(curso: Curso){
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    })
  }
	````
- Async:
- Precisamos inicializar o formulário dentro do construtor ou dentro do ngOnInit
- Qualquer lógica do id, deve ser executada dentro subscribe
- Metodos, para quebrar o fluxo ciclico do nosso código fonte.
- Mais de um subscribe para pegar valores. 
- Vamos refatorar o código do subscribe de edição
	````typeScript
	this.route.params
      .pipe(
        map((params: any) => 
          params['id']),
          switchMap (id => this.service.loadByID(id))
      )      
      .subscribe(curso => this.updateForm(curso));
	````
- switchmap
	- Retorna um obsarvble
	- Cancela as requisisções anteriores e foca somente na principal
- Crate com concatMap -> ordem da requisição importa
- margeMap -> ordem não importa
- ExhaustMap - >Espera a resposta, comum em caso de logins
- Fizemos um Neste caso ao trocarmos de rota, ele faz o unsubscribe e destroi o formulário. 

# 14. Http: Editando Cursos + Resolver (Rota)
- [Vídeo Aula](https://youtu.be/v0cShz4njDM)
- Vamos trabalhar no formulário para editar curswos. 
- Obtemos o id e depois obetmos o objeto curso
- usaro resolver para obetr o curso no carregamento da rota
- snapshot - foto da rota
- Vamos devolve rum objeto curso, um observable de curso.
- Podemos usar resolver, para rotas diferentes
- Criamos o guarda de rotas
	````typeScript
		import { Injectable } from '@angular/core';
		import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
		import { Observable, of } from 'rxjs';
		import { Curso } from '../curso';
		import { CursosService } from '../cursos.service';

		@Injectable({
		  providedIn: 'root'
		})
		export class CursoResolverGuard implements Resolve<Curso> {
		  constructor(private service: CursosService) {}

		  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
		    if (route.params && route.params['id']) {
		      return this.service.loadByID(route.params['id']);
		    }

		    return of({
		      id: null,
		      nome: null
		    });
		  }
		}
	````
- Agora ajustamos a nossa rota
	````typeScript
		const routes: Routes = [
	  {path: '', component: CursosListaComponent},
	  {
	    path: 'novo', 
	    component: CursosFormComponent,
	    resolve: {
	      curso: CursoResolverGuard
	    }
	  },

	  {path: 'editar/:id', 
	  component: CursosFormComponent,
	  resolve: {
	    curso: CursoResolverGuard
	  }}
	];

	@NgModule({
	  imports: [RouterModule.forChild(routes)],
	  exports: [RouterModule]
	})
	export class CursosRoutingModule { }
	````
- Com resolver, criamos um metodo mais enxuto para fazer o que é necessário fazer.
````typeScript
		ngOnInit(){

	    /*this.route.params.subscribe(
	      (params: any) => {
	        const id = params['id'];
	        console.log(id);
	        const curso$ = this.service.loadByID(id);
	        curso$.subscribe(curso => {
	        this.updateForm(curso);
	        })
	      }
	    );*/

	    /*this.route.params
	      .pipe(
	        map((params: any) => 
	          params['id']),
	          switchMap (id => this.service.loadByID(id))
	          //switchMap (cursos => obterAulas)
	      )      
	      .subscribe(curso => this.updateForm(curso));
	    */

	    const curso = this.route.snapshot.data['curso'];


	    this.form = this.fb.group({
	      id: [curso.id],
	      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]      
	    });
	  }
````


# 15. Http PUT Atualizando Cursos
- [Vídeo Aula](https://youtu.be/HK6EVFNVCoU)
- Atualizar registros via API rest
- Criamos a seguinte função para fazer o update de registros
	````typeScript
	 	update(curso: any){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));  }    
	````
- Fizemos uma primeira versão do criar e alterar
	````typeScript

  list(){
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );

  }

  loadByID(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(
      take(1),
      map(curso => curso as Curso) // Convertendo o objeto retornado para o tipo Curso
    );
  }

  private create(curso: any){
    return this.http.post(this.API, curso).pipe(take(1));  }

  private update(curso: any){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));  }
  
  save(curso: any){
    if(curso.id){
      return this.update(curso);
    }
    return this.create(curso);
  }  

	````
- Refatoramos o nosso on submit

	````typeScript
		 onSubmit(){
	    this.submitted = true;
	    console.log(this.form.value)    
	    if(this.form.valid){
	      console.log('submit');

	      let mgSucces = 'Curso Criado com sucesso!';
	      let mgError = 'Erro ao criar curso, tente novamente';
	      if (this.form.value.id){        
	      mgSucces = 'Curso atualizado com sucesso!';
	      mgError = 'Erro ao atualizar curso, tente novamente';
	      }
	      console.log(this.form.value)
	      this.service.save(this.form.value).subscribe(
	        success => {
	          this.modal.showAlerSuccess(mgSucces);
	          this.location.back();
	        },
	        error => {this.modal.showAlertDanger(mgError)}
	      );

	      /*
	      if (this.form.value.id){
	        //update
	      this.service.update(this.form.value).subscribe(
	        success => {
	          this.modal.showAlerSuccess('Curso atualizado com sucesso!');
	          this.location.back();} ,
	        error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente.'),
	        ()=> console.log('update completo')
	      );
	      }else{
	        //create
	        this.service.create(this.form.value).subscribe(
	          success => {this.modal.showAlerSuccess('Curso Criado com sucesso!');
	                      this.location.back();} ,
	          error => this.modal.showAlertDanger('Tente Novamente'),
	          ()=> console.log('request completo')
	        );
	      }*/

	    }
	  }
	````


# 16. Http: Popup de Confirmação para remover Cursos
- [Vídeo Aula](https://youtu.be/I0CI6KvqobA)
- Remover recursos e adicionar uma poupup para completarmos o nosso curso. 
- pegamos o modal e passamos um template para o mesmo
- @ViweChield template core

- Pegamos a modal de confirmar do ngx bootstrap
- Nela criamos os seguintes pontos.
	- função de deletar do front
	- Adicionamos a popup conforme documentação
	````typeScript
	  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;
  constructor(private service: CursosService,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute   
    ){}


		onDelete(id: number){
      this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
    }

	````
- Criamos a seguinte modal no HTML
	````html
	<ng-template #deleteModal>
	  <div class="modal-body text-center">
	    <p>Do you want to confirm?</p>
	    <button type="button" class="btn btn-default" >Yes</button>
	    <button type="button" class="btn btn-primary" >No</button>
	  </div>
	</ng-template>
	````
- Vamos colocar a parte de confirmar ou cancelar, conforme documentação
	````typeScript
		    onConfirmDelete() {
	      this.deleteModalRef.hide();
	      
	    }
	   
	    onDeclineDelete() {
	      this.deleteModalRef.hide();
	    }

	````
- Criamos o nosso serviço
	````typeScript
		 remove(id: number){
	    return this.http.delete(`${this.API}/${id}`).pipe(take(1));

	  }
	````
- Fiezemos a chamada do serviço para deletar o curso
	````typeScript
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

	````

# 17. Popup de Confirmação genérica Bootstrap 4 (com RxJS)
- [Vídeo Aula]()
- vamos construir um componente reutilizavel

# 18. Http: Serviço Genérico de CRUD
- [Vídeo Aula]()

# 19. Upload de Arquivo Formulário Upload com Bootstrap 4
- [Vídeo Aula]()

# 20. Upload de Arquivo: Back-end com Node.js
- [Vídeo Aula]()

# 21. Upload de Arquivo: Request com FormData
- [Vídeo Aula]()

# 22. Http: Removendo CORS com Angular Proxy
- [Vídeo Aula]()

# 23. Upload Arquivo: Barra de Progresso + Observando Eventos Http
- [Vídeo Aula]()

# 24. Criando operador RxJS customizado
- [Vídeo Aula]()

# 25. Download de Arquivo
- [Vídeo Aula]()

# 26. Criando tela de pesquisa
- [Vídeo Aula]()

# 27. Http: Passando Parâmetros na URL (HttpParams)
- [Vídeo Aula]()

# 28. Pesquisa/Busca com Programação Reativa
- [Vídeo Aula]()
