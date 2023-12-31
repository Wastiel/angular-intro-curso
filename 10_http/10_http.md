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

# 07. Http + RxJS: Unsubscribe Automático
- [Vídeo Aula]()

# 08. Capturando Erros (+ Erro com async)
- [Vídeo Aula]()

# 09. Erro Http: Alerta de Erro com Bootstrap
- [Vídeo Aula]()

# 10. Serviço de alerta genérico com Bootstrap 4
- [Vídeo Aula]()

# 11. Http: Criando formulário para criar e editar cursos
- [Vídeo Aula]()

# 12. HTTP POST Criando Cursos
- [Vídeo Aula]()

# 13. Http: Editando Cursos e Observables aninhados
- [Vídeo Aula]()

# 14. Http: Editando Cursos + Resolver (Rota)
- [Vídeo Aula]()

# 15. Http PUT Atualizando Cursos
- [Vídeo Aula]()

# 16. Http: Popup de Confirmação para remover Cursos
- [Vídeo Aula]()

# 17. Popup de Confirmação genérica Bootstrap 4 (com RxJS)
- [Vídeo Aula]()

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
