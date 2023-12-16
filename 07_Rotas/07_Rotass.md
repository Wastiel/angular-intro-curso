# Rotas

# 01. Rotas: Introdução
- [Vídeo Aula](https://youtu.be/wzdKc0AFY6k)
- Introdução sobre o Roteamento
- SPA: Single Page Applications
	- Projeto que tem somente uma página
	- Muda o conteudo cnetral a URL muda, mas a aplicação não carrega a nova página. 
- Podemos ter SPA no angular, através de rotas
- O angular faz um trabalho de leitura de rota, para ver onde ir
	- /usuarios/2/edit
	O angular olha na seguinte ordem:
		- /usuarios - ListaUsuariosComponens
		- /usuarios/:id - UsuarioDetalhesComponent
		- /usuarios/:id/edit - UsuarioFormComponent
- Para este módulo, criamos um novo projeto
	- ng new 07_Rotas
- 


# 02. Rotas: Configurando rotas simples
- [Vídeo Aula](https://youtu.be/8OHoAZ6j0Rg)
- Configurar rotas simples
- Vamos criar as nossas primeiras rotas.
- Vamos criar três componentes
	- ng g c home
	- ng g c login
	- ng g c cursos
- Após cirarmos os componentes, adicionamos ao app.modeuls os mesmo
	````typeScript
		import { AppComponent } from './app.component';
		import { HomeComponent } from './home/home.component';
		import { LoginComponent } from './login/login.component';
		import { CursosComponent } from './cursos/cursos.component';

		@NgModule({
		  declarations: [
		    AppComponent,
		    HomeComponent,
		    LoginComponent,
		    CursosComponent
		  ],
		    imports: [
		    AppRoutingModule,
		    BrowserModule,
		    AppRoutingModule
		  ],
	````
	- Posterior adiconamos as rotas ao arquivo de rotas
	- No angular mais novo está um pouco diferente do curso

	````typeScript
		import { NgModule } from '@angular/core';
		import { RouterModule, Routes } from '@angular/router';

		import { HomeComponent } from './home/home.component';
		import { LoginComponent } from './login/login.component';
		import { CursosComponent } from './cursos/cursos.component';

		const routes: Routes = [
		  {path: 'cursos', component: CursosComponent},
		  {path: 'login', component: LoginComponent},
		  { path: '', component: HomeComponent}
		];

		@NgModule({
		  imports: [RouterModule.forRoot(routes)],
		  exports: [RouterModule]
		})
		export class AppRoutingModule { }

	````
- Com isto ao executamrmos a nossa aplicação com caminhos distintos, temos resultados distintos
	- http://localhost:4200/login
	- http://localhost:4200/cursos
- Para funcionamento das rotas, dentor do nosso index.html, preciammos deste apontamento
	-  <base href="/">
- 
# 03. Rotas: RouterLink: definindo rotas no template

- [Vídeo Aula](https://youtu.be/zmlooouhauE)
- Defirnir através de RouterLink, rotas
- Vamos fazer um menu e ao clicarmos em um link a determinada rota vai ser ativada.
- Entramos no site do materialize 
	- https://materializecss.com/navbar.html
	- Pegamos um componente de navBar com alinhamento a esquerda e adicionamos no nosso app.component
		````HTML
			<nav>
			    <div class="nav-wrapper">
			      <a href="#" class="brand-logo right">Logo</a>
			      <ul id="nav-mobile" class="left hide-on-med-and-down">
			        <li><a href="sass.html">Sass</a></li>
			        <li><a href="badges.html">Components</a></li>
			        <li><a href="collapsible.html">JavaScript</a></li>
			      </ul>
			    </div>
			  </nav>
		````
- Fizemos o seguinte ajust ena nossa home:
	````html
		<nav>
		  <div class="nav-wrapper">
		    <a class="brand-logo right">Rotas Ng2</a>
		    <ul id="nav-mobile" class="left hide-on-med-and-down">
		      <li><a>Login</a></li>
		      <li><a>Cursos</a></li>      
		    </ul>
		  </div>
		</nav>
		<div class="container"> <!--Classe do materialize, aplica uma margem-->
		  <router-outlet></router-outlet>
		</div>

	````
- Ao clicarmos nos links, queremos os seguintes componentes
	- No logo, queremos direcioanr para localhost/
	- No Login, queremos direcioanr para componente de login
	- No Cursos, queremos direcioanr para componente de cursos
- Fizemos o ajuste para o determinado funcionamento
	````html
		<nav>
		  <div class="nav-wrapper">
		    <a routerLink="" class="brand-logo right">Rotas Ng2</a>
		    <ul id="nav-mobile" class="left hide-on-med-and-down">
		      <li><a routerLink="/login">Login</a></li>
		      <li><a routerLink="/cursos">Cursos</a></li>      
		    </ul>
		  </div>
		</nav>
		<div class="container"> <!--Classe do materialize, aplica uma margem-->
		  <router-outlet></router-outlet>
		</div>

	````



# 04. Rotas: Aplicando CSS em rotas ativas

- [Vídeo Aula](https://youtu.be/4r6uzxmEV-k)
- Aplicando CSS em rotas ativas
- Aplicar CSS nos itens que estão ativos no css
- O que queremos é que a rota que estiver selecionada vai ficar ativa.
- Utilizamos a propreidade
	- routerLinkActive="active" dentro da nossa lista
- Nosso projeto vai ficar da seguinte maneira:
	````html
		<nav>
		  <div class="nav-wrapper">
		    <a routerLink="" class="brand-logo right">Rotas Ng2</a>
		    <ul id="nav-mobile" class="left hide-on-med-and-down">
		      <li routerLinkActive="active"><a routerLink="/login">Login</a></li>
		      <li routerLinkActive="active"><a routerLink="/cursos">Cursos</a></li>      
		    </ul>
		  </div>
		</nav>
		<div class="container"> <!--Classe do materialize, aplica uma margem-->
		  <router-outlet></router-outlet>
		</div>

	````
- 

# 05. Rotas: Definindo e extraindo parâmetros de roteamento

- [Vídeo Aula](https://youtu.be/xTkIV8YNgXw)
- Definir e extrair parametros de roteamento 
- Queremos colocar um caminho que suporte um id
- Vamos criar um componente
	- ng g c curso-detalhe
- Para passarmos um parametro via url, tipo um id, seguimos o seguinte processo:
	````typeScript		
		const routes: Routes = [
		  { path: 'cursos', component: CursosComponent},
		  { path: 'cursos/:id', component: CursosComponent},
		  { path: 'login', component: LoginComponent},
		  { path: '', component: HomeComponent}
		];
	````
	- { path: 'cursos/:id', component: CursosComponent},
- Criamos um botao para pegar o curso que querecmos carregar
- posterior ajustamos com proprety binding os dados, para toda a vez que clitarmos na URL pegarmos o parametro de número
	- <li routerLinkActive="active"><a [routerLink]="'cursos', idcurso.value">Cursos com ID</a></li>
	- Com o comando a cima, vemoos que os dados ficaram na url da seguinte maneira:
		- http://localhost:4200/cursos/15
- Como obtemos o parametro la no curso detalhe?
	- Criamos uma variavel no nosso componente
		````typeScript
			  id!: string;
			  //idCourseValue:string = '';

			  //rota ativa, podemos injetar no construtuor os detalhes da rota

			  constructor(private route: ActivatedRoute){
			    console.log(this.route);
			    this.id = this.route.snapshot.params['id'];

			  }
		````
	- Posterior mostramos ela dentro do nosso componente
		````html
			<p>
			    Id: {{ id }}
			</p>

		````

# 06. Rotas: Escutando mudanças nos parâmetros de roteamento

- [Vídeo Aula](https://youtu.be/a6PjrYAPrGs)
- Vamos aprender a escutar mudanças nos parametros de roteamento.
- Uma maneira mais elegante de trabalharmos como pegar o nosso ID
- Analisamos os parametros do http
- Fizemos um ajuste tanto em ngOnInit quando ngOnDestroy
	````typeScript
		export class CursoDetalheComponent implements OnInit{

		  id!: string;
		  inscircao!: Subscription
		  //idCourseValue:string = '';

		  //rota ativa, podemos injetar no construtuor os detalhes da rota

		  constructor(private route: ActivatedRoute){
		    //console.log(this.route);
		    //this.id = this.route.snapshot.params['id'];
		  }

		  ngOnInit(){

		    this.inscircao = this.route.params.subscribe(
		      (params: any) =>{
		        this.id = params ['id'];
		      }        
		      );
		  }

		  ngOnDestroy(){
		    this.inscircao.unsubscribe();
		        
		  }

		}
	````
- Com isto agora, ao atualizarmos o nosso ID a rota acaba por se tualizar também.
- Também encerramos a rota apó o componente for destruido.

# 07. Rotas Imperativas: Redirecionamento via código

- [Vídeo Aula](https://youtu.be/SRtM9nV_7nw)
- Vamos via Serviço, Exemplo mais completo. 
- Ao clicarmos em um curso, vamos redirecionar a rota para o curso. 
- Se o curso existe, mostramos na tela os detalhes do curso, se não direcionaoms para um outro local (Curso não encontrado)
- Criamos o serviço
	- ng g s cursos/cursos
- Vamos colocar o curso service dentro do providers
	````typeScript
		import { CursosService } from './cursos/cursos.service';

		@NgModule({
		  ....
		  providers: [CursosService],
		  ....
	````
- Adicionamos o curso service dentro do nosso componente para podermos utilizalo.
	````typescript
		 constructor(private cursosService: CursosService){
    
  		}
	````
- Criamos um objeto no curso servie, para podermos trabalhar com o proposto
	````typeScript
		getCursos(){
	    return[
	      {id: 1, nome: 'Angular 2'},
	      {id: 2, nome: 'Java'}
	    ]
	  }
	````
	````typeScript
		//Atribuimos o determinado array
		  cursos!: any[];
  
		  constructor(private cursosService: CursosService){
		  }

		  ngOnInit(){
		    this.cursos = this.cursosService.getCursos();
		  }

	````
- Adicionamos o seguinte componente do CSS, para carregar os cursos que temos na nossa base.
	- Com os ajustes abaixo, conseguimos direcionar para as páginas do curso.
	````html
		<div class="collection">
		    <a class="collection-item"
		    *ngFor="let curso of cursos"
		    [routerLink]="['/cursos', curso.id]">
		    {{ curso.nome }}</a>    
		  </div>
	````
- Agora vamos ajustar o curso-detalhe.
	- Fizemos uma validação para o curso component que não encontra a rota
		````typeScript
			import { Component, OnInit } from '@angular/core';
			import { ActivatedRoute, Router } from '@angular/router';
			import { Subscription } from 'rxjs';

			import { CursosService } from '../cursos/cursos.service';

			@Component({
			  selector: 'app-curso-detalhe',
			  templateUrl: './curso-detalhe.component.html',
			  styleUrls: ['./curso-detalhe.component.css']
			})
			export class CursoDetalheComponent implements OnInit{
			  

			  id!: number;
			  inscircao!: Subscription;
			  curso: any;
			  //idCourseValue:string = '';

			  //rota ativa, podemos injetar no construtuor os detalhes da rota

			  constructor(private route: ActivatedRoute,
			    private cursosService: CursosService,
			    private router: Router
			    ){
			    //console.log(this.route);
			    //this.id = this.route.snapshot.params['id'];
			  }

			  ngOnInit(){

			    this.inscircao = this.route.params.subscribe(
			      (params: any) =>{
			        this.id = params ['id'];
			        this.curso = this.cursosService.getCurso(this.id);

			        if (this.curso == null){
			          this.router.navigate(['/naoEncontrado']);
			        }
			      }        
			      );
			  }

			  ngOnDestroy(){
			    this.inscircao.unsubscribe();
			        
			  }

			}

		````
- Posterior criamos um componente para avaliar mostra a nao rota
	- ng g c curso-nao-encontrado
- Posterior Configuramos a rota do componente, para então poodermos direcionar:
	````typeScript
		const routes: Routes = [
		  { path: 'cursos', component: CursosComponent},
		  { path: 'cursos/:id', component: CursoDetalheComponent},
		  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
		  { path: 'login', component: LoginComponent},
		  { path: '', component: HomeComponent}
		];
	````
- Regra do curso component que direciona para a rota de não encontrado
	````typeScript
		if (this.curso == null){
			          this.router.navigate(['/naoEncontrado']);
			        }
	````

	
# 08. Rotas: Definindo e extraindo parâmetros de URL (query)

- [Vídeo Aula](https://youtu.be/B7mc184O4x0)
- Definir e extrair parametros de URL
- Lista de cursos e temos vários cursos, onde queremos mostrar os primeiros 50 cursos
- Parametro query
	- Forma de passar parametros opicionais para o angular 2
- Como fazemos isto na prática:
	````html
		<li routerLinkActive="active"><a routerLink="/cursos" [queryParams]="{pagina:1}">Cursos</a></li>      
	````
	- Conseguimos extrar a informação e usala.
- Vamos criar uma variavel para utilização dentro do fluxo.
- Primeiro vamos colocar para iniciar uma rota alternativa 
	````typeScript
	constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute
    ){
  }
  	`````
 - Para pegarmos o parametro da página
 	````typeScript
 		    this.cursos = this.cursosService.getCursos();
		    this.route.queryParams.subscribe(
		      (queryParams: any) => {
		        this.pagina = queryParams['pagina'];
		      }
		    );
 	````
- queryparams retorna uma inscrição
- Ajustamos o nosso código fonte da seguinte maneira:
	````typeScript
		  ngOnInit(){
		    this.cursos = this.cursosService.getCursos();
		    this.insscricao = this.route.queryParams.subscribe(
		      (queryParams: any) => {
		        this.pagina = queryParams['pagina'];
		      }
		    );

		  }
		  ngOnDestroy(){
		    this.insscricao.unsubscribe();
		  }
	````
- Abaixo vemos como mudar um determinado parametro e também uma variavel em tela.
	````typeScript
		import { Component, OnInit } from '@angular/core';
		import { CursosService } from './cursos.service';
		import { ActivatedRoute, Router } from '@angular/router';
		import { query } from '@angular/animations';
		import { Subscription } from 'rxjs';

		@Component({
		  selector: 'app-cursos',
		  templateUrl: './cursos.component.html',
		  styleUrls: ['./cursos.component.css']
		})
		export class CursosComponent implements OnInit{


		  cursos!: any[];
		  pagina!: number;
		  insscricao!: Subscription;

		  constructor(
		    private cursosService: CursosService,
		    private route: ActivatedRoute,
		    private router: Router
		    ){
		  }

		  ngOnInit(){
		    this.cursos = this.cursosService.getCursos();
		    this.insscricao = this.route.queryParams.subscribe(
		      (queryParams: any) => {
		        this.pagina = queryParams['pagina'];
		      }
		    );

		  }
		  ngOnDestroy(){
		    this.insscricao.unsubscribe();
		  }

		  proximaPagina(){
		    //this.pagina++;
		    this.router.navigate(['/cursos'],
		    {queryParams: {'pagina': ++this.pagina}}
		    );
		  }

		}

	````

# 09. Rotas: Criando um módulo de rotas

- [Vídeo Aula](https://youtu.be/PLzJ5jDV8is)
- Vamos refatorar o que temos de rotas até agora
- routing que tem as rotas dentro do arquivo de rotas.
- Declaramos dentro do imports as nossas rotas. 
	````typeScript
		@NgModule({
  		...
		  imports: [
		    AppRoutingModule,
		    BrowserModule,
		    AppRoutingModule
		  ],
		  ...  
	```` 
- Refectoring para começar o projeto bem organizado.
- O que está sendo feito é o que o Angular CLI ja constroi hoje.
- Configuração da classe de rotas dentro das boas práticas:
	````typeScript
		import { ModuleWithProviders, NgModule } from '@angular/core';
		import { RouterModule, Routes } from '@angular/router';

		import { HomeComponent } from './home/home.component';
		import { LoginComponent } from './login/login.component';
		import { CursosComponent } from './cursos/cursos.component';
		import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
		import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

		const routes: Routes = [
		  { path: 'cursos', component: CursosComponent},
		  { path: 'cursos/:id', component: CursoDetalheComponent},
		  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
		  { path: 'login', component: LoginComponent},
		  { path: '', component: HomeComponent}
		];

		@NgModule({
		  imports: [RouterModule.forRoot(routes)],
		  exports: [RouterModule]
		})
		export class AppRoutingModule {
		  static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
		 }

	````
- Em resumo esta aula foi mostrando o que o arquivo de rota na criação do angular CLI ja faz. 

# 10. Criando um módulo de funcionalidade

- [Vídeo Aula](https://youtu.be/P4GYpzNNEw4)
- Criar um módulo de funcionalidade, para organizar o mesmo se preparando para o crescimento do nosso projeto.
- app.modeul está enorme em função dos imports.
	- Idéia é refatorar, para e ele poder ficar mais organizado
	- A ideia é adicionar modulos como telas principais.
	- Se tudo for dentro do app.module, acabamos criando um pequeno monstrinho. 
- Movemos os diretórios que pertencem ao mesmo fluxo.
	- Por exemplo temos três componentes:
		- Cursos
		- Curso nao encontrado
		- Curso Detalhe
	- Pegamos toda a estrutura e colocmaos dentro de cursos que é ao qual ela pertence. 
	- Nosso refactory nao quebrou nada
- Temos dois modulos
	- app.module
		- modulo principal da aplicação
	- modulo de rotas
		- Rotas da aplicação
- Criamos um arquivo novo dentro doss nossos cursos
	- cursos.module.ts
	- Posterioro criamos a estrutura padrão do determinado modulo
		````typeScript
			import { NgModule } from '@angular/core';

			@NgModule({
			  imports: [],
			  exports: [],
			  declarations:[],
			  providers: [],
			})
			export class StoreModule {}
		````
- Em tese o que fazemos é tirar todos os móduos do app module e colocar em um modulo novo dentro dos componentes. Posterior a gente tira todos os modulos do app module e somente coloca o cursos module la dentro.
	````typeScript
		import { NgModule } from '@angular/core';

		import { CursosComponent } from './cursos.component';
		import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
		import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
		import { CursosService } from './cursos.service';
		import { CommonModule } from '@angular/common';
		import { RouterModule } from '@angular/router';

		@NgModule({
		  imports: [
		    CommonModule,
		    RouterModule

		  ],
		  exports: [],
		  declarations:[
		    CursosComponent,
		    CursoDetalheComponent,
		    CursoNaoEncontradoComponent,
		],
		  providers: [CursosService],
		})

		export class CursosModule {}
	````
- No App Module ficou assim:
	````typeScript
		@NgModule({
		  declarations: [
		    AppComponent,
		    HomeComponent,
		    LoginComponent /*,
		    CursosComponent,
		    CursoDetalheComponent,
		    CursoNaoEncontradoComponent*/
		  ],
		  imports: [
		    AppRoutingModule,
		    BrowserModule,
		    CursosModule,
		    AppRoutingModule
		  ],
		  //providers: [CursosService],
		  bootstrap: [AppComponent]
		})
	````
- BrowserModule, Modulo raiz da aplicação - app.module
- CommonModule, tem os ngfor, ng if, pode ser dentro do componente ou dos modules.
- FormsModule - teriamos que colocar dentro das declarações de imports
- httpModule - Chamadas ajax

# 11. Rotas: Criando um módulo de rotas de funcionalidade
- [Vídeo Aula](https://youtu.be/_JjrqiwWNFU)
- Refactor do app router da nossa aplicação
- Ficar somente com as rotas principais
- Vamos passar as rotas de um arquivo de rotas para outro arquivo de rotas.
	- A ideia disto é organizar o arquivo de rotas
- A estrutura vai ficar da seguinte maneira
	- Componente Principal
	- Os subcomponentes
	- As rotas
	- Isto vai fucnionar assim para todo e qualquer módulo que a gente criar. 
- Adaptamos o arquivo de rotas da seguinte maneira:
	````typeScript
		import { ModuleWithProviders, NgModule } from '@angular/core';
		import { RouterModule, Routes } from '@angular/router';

		import { CursosComponent } from './cursos.component';
		import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
		import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

		const cursosRoutes: Routes = [
		  { path: 'cursos', component: CursosComponent},
		  { path: 'cursos/:id', component: CursoDetalheComponent},
		  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
		];

		@NgModule({
		  imports: [RouterModule.forChild(cursosRoutes)],
		  exports: [RouterModule]
		})
		export class CursosRoutingModule {
		  //static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
		 }

	````
- Ajustamos o cursos Module para olhar para as rotas do cursos e não para a rota principal da aplicação. 
- A unica diferneça é que apontamos somente as rotas do componente e utilizamos o routerModule.ForChild, por nao se tratar da rota principal e sim da rota alternativa.
- forRoot a gente somente utiliza no módulo raiz da aplicação. 
- Aplicação refatorada

# 12. Rotas Filhas

- [Vídeo Aula](https://youtu.be/zOxKiW7hkzY)
- Rotas Filhas
- Treinar as funcionalidades de rotas
	- Criamos um novo módulo.
	- ng g c alunos
- Criou o componente principal, ja ajusta o modulo do componente, para toda a aplicação. 
- Criamos o AlunosModule.
	````typeScript
		import { NgModule } from '@angular/core';

		import { AlunosComponent } from './alunos.component';
		import { CommonModule } from '@angular/common';


		@NgModule({
		  imports: [CommonModule],  
		  exports: [],
		  declarations: [AlunosComponent],
		  providers: []
		})
		export class AlunosModule {}
	```` 
- Ajustamos no appmodule, onde tiramos o componente e adicionamos o import
- Posterio vamos criar os componentes (Tudo que é criado dentor de um diretório module, fica configurado pelo padrão do angular dentro daquele module)
	- ng g c alunos/alunos-form
	- ng g c alunos/alunos-detalhe
- Agora Vamos criar o roteamento em Alunos
	````typeScript
		import { ModuleWithProviders, NgModule } from '@angular/core';
		import { RouterModule, Routes } from '@angular/router';

		import { AlunosComponent } from './alunos.component';
		import { AlunosFormComponent } from './alunos-form/alunos-form.component';
		import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';

		const alunosRoutes: Routes = [
		  { path: 'alunos', component: AlunosComponent},
		  { path: 'alunos/:id', component: AlunosDetalheComponent},
		  { path: 'alunos/:id/editar', component: AlunosFormComponent},
		  { path: 'alunos/novo', component: AlunosFormComponent},
		];

		@NgModule({
		  imports: [RouterModule.forChild(alunosRoutes)],
		  exports: [RouterModule]
		})
		export class AlunosRoutingModule {
		  //static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
		 }
	````
- Não podemos esquecer que dentro do aluno.module, vai os componentes declarados e a iportação da rota
	````typeScript
		import { NgModule } from '@angular/core';

		import { AlunosComponent } from './alunos.component';
		import { CommonModule } from '@angular/common';
		import { AlunosRoutingModule } from './alunos.routing.module';
		import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
		import { AlunosFormComponent } from './alunos-form/alunos-form.component';


		@NgModule({
		  imports: [
		    CommonModule,
		    AlunosRoutingModule
		  ],  
		  exports: [],
		  declarations: [
		    AlunosComponent,
		    AlunosDetalheComponent,
		    AlunosFormComponent
		  ],
		  providers: []
		})
		export class AlunosModule {}
	````
- Nos casos de rotas, primeiro avaliamos o que é hardcode
	````typeScript

		const alunosRoutes: Routes = [
		  { path: 'alunos', component: AlunosComponent},
		  { path: 'alunos/novo', component: AlunosFormComponent},
		  { path: 'alunos/:id', component: AlunosDetalheComponent},
		  { path: 'alunos/:id/editar', component: AlunosFormComponent},		  
		];
		
	````
- Podemos evitar repetição declarando rotas filhas
	````typeScript
		const alunosRoutes: Routes = [
		  { path: 'alunos', component: AlunosComponent, children: [
		    { path: 'novo', component: AlunosFormComponent},
		    { path: ':id', component: AlunosDetalheComponent},
		    { path: ':id/editar', component: AlunosFormComponent},
		  ]},
	````
	- Se repararmos, as rotas filhas, evitamos repetição de código e tudo fica apontado, dentro da rota pai que neste caso é a aluna.
- Com rotas filhas, temos dois componentes renderizados e ademais do Componente do Aluno
	- alunos works!
	- alunos-detalhe works!


# 13. Rotas Filhas: desenvolvendo as telas
- [Vídeo Aula](https://youtu.be/YE9A6NtlkmQ)
- Vamos melhorar os componentes.
	- Vamos dar uma cara para o nosso projeto.
- Colocar uma lista de alunos, um formulário de alunos.
- Comentamos Os links com ID para começar a melhorar os fluxos de telas (app.component.html)
	````html
		<!--li routerLinkActive="active"><a [routerLink]="['/cursos', idCurso.value]">Cursos com ID</a></!--li-->      

		<!--p> Entre com o id do curso</!--p>
  		<input #idCurso-->
	````
- Vamos adcionar uma lista para os alunos
- Vamos criar um serviço
	ng g s alunos/alunos
- Após Criarmos e adicionarmos a determinada página, temos que adicionaro serviço como provider.
	- Todos os nossos componentes do aluno, vão poder utilizar o determinado serviço.
- Vamos no nosso componente de alunos e adicionamos a injeção de dependencia da  camada de serviço
	````typeScript
		constructor(private alunosService: AlunosService){

  		}
	````
- Sempre primeiramente trabalhamos com dados mokados. Depois vamos para o servidor. 
- Fizemos um ajuste no mostrar o aluno. Criamos primeiramente as variaveis e as funções, para podermos verificar os mesmos em tela.
- Posterior fizemos um ajuste para mostrar os usuários de forma classificada
- Fizemos a seguinte lógica para dividir a tela que mostra os alunos
	````html
		<div class="row">
	    <div class="col s6">
	      <p>
	        Lista de Alunos
	      </p>
	  
	      <div class="collection">
	        <a class="collection-item"
	        *ngFor="let aluno of alunos"
	        [routerLink]="[aluno.id]">
	        {{ aluno.nome }}
	        </a>
	      </div>
	    </div>
	  
	  <div class="col s6">
	    <router-outlet></router-outlet>
	  </div>
	  </div>
	````
- Na sequência organizamos a maneira de olhar o detalhe do aluno
- Ajustamos o detalhe do aluno, com dados para saida de tela
- Ajustamos o serviço e o detlahe do componente.
	````typeScript
		import { Component, OnDestroy, OnInit } from '@angular/core';
		import { ActivatedRoute, Router } from '@angular/router';
		import { AlunosService } from '../alunos.service';
		import { Subscription } from 'rxjs/internal/Subscription';


		@Component({
		  selector: 'app-alunos-detalhe',
		  templateUrl: './alunos-detalhe.component.html',
		  styleUrls: ['./alunos-detalhe.component.css']
		})
		export class AlunosDetalheComponent implements OnInit, OnDestroy{

		  aluno: any;
		  inscricao!: Subscription;

		  constructor(
		    private route: ActivatedRoute,
		    private router: Router,
		    private alunosService: AlunosService
		  ) { }

		  ngOnInit() {
		    this.inscricao = this.route.params.subscribe(
		      (params: any) => {
		        let id = params['id'];

		        this.aluno = this.alunosService.getAluno(id);
		      }
		    );

		    console.log('ngOnInit: AlunoDetalheComponent');

		    /*this.inscricao = this.route.data.subscribe(
		      (info: {aluno: Alunos}) => {
		        console.log('Recebendo o obj Aluno do resolver');
		        this.aluno = info.aluno;
		      }
		    );*/
		  }

		  editarContato(){
		    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
		  }

		  ngOnDestroy(){
		    this.inscricao.unsubscribe();
		  }
		}

	````
- Ajustamos a mostragem do componente da seguinte maneira:
	````html
		<h5>
	    Detalhes do Aluno
	  </h5>
	  
	  <p>Id: {{ aluno.id }}</p>
	  <p>Nome: {{ aluno.nome }}</p>
	  <p>Email: {{ aluno.email }}</p>
	  
	  <a class="waves-effect waves-light btn" 
	    (click)="editarContato()">Editar</a>
	````
- Posterior criamos o novo formulario. Primeiramento editamos o aluno form component
	````typeScript
		import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent {

  aluno: any = {};
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota(){

    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }
}

	````
- Posterior ajustamos o nosso HTML de novo formulário
	````html
		<h5>
    Criar/Editar Aluno
		  </h5>
		  
		  <div class="col s12">
		    <div class="row">
		      <div class="input-field col s12">
		        <input disabled [(ngModel)]="aluno.id" id="disabled" type="text">
		        <label for="disabled" class="active">#</label>
		      </div>
		    </div>
		    <div class="row">
		      <div class="input-field col s12">
		        <input id="nome" [(ngModel)]="aluno.nome" class="validate" (input)="onInput()">
		        <label for="nome" class="active">Nome</label>
		      </div>
		    </div>
		    <div class="row">
		      <div class="input-field col s12">
		        <input id="email" [(ngModel)]="aluno.email" type="email" class="validate">
		        <label for="email" class="active">Email</label>
		      </div>
		    </div>
		  </div> 
	````
- E posterior concluimos as importações necessárias no módulo aluno
	````typeScript
		import { NgModule } from '@angular/core';
		import { FormsModule } from '@angular/forms';
		import { ReactiveFormsModule } from '@angular/forms';
	````
- Colocamos um botão também para editar o contato
- Criamos uma apontamento de edição no formluário
	````typeScript
	   editarContato(){
    	this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  		}
  	````
- Partircularmente a Loiane nao curtiu a parte de rota no angular. O angular nao aceita direcionamento do objeto na rota.
- 


- Implementação da interfaçe é uma boa pratica para deixar claro, mas a declaração destas interfaçes não é obrigatoria

# 14. Rotas: Dica de Performance: Carregamento sob demanda (lazy loading)
- [Vídeo Aula](https://youtu.be/glOJxHDkdnQ)
- Dica de performance
	- Carregar módulos e rotas sobre demanda
	- Conceito Lazy Loading
- No nosso projeot atual, está tudo sendo carregado junto. 
- Como estamos em uma pagina home, não precisamos do código de alunos e cursos por enquanto.
	- Somente quando acionarmos ele.
- Primeira coisa a nossa aplicação vai baixar tudo que tiver que fazer o download
	- Demora mais
- Ganho de performance. 
- Ganho de Segurança
- Aplicação no ponto que está, já esta quase pronta para usarmos o lazy loading.
- 3 passos para podermos utilizar o lazy loading:
	- 1: Dentro da routing module (Arquivo Principal de rotas), colocamos o caminho com loadchildren
		- app-routing.module.ts
		````typeScript
			{path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule)},
		````		
	- 2: Remover qualquer import do modulo, não podemos ter em nem um lugar da aplicação importando cursos Module
		- app.module
		````typeScript
		@NgModule({
		  declarations: []
		  ....
		  imports: [
		    AppRoutingModule,
		    BrowserModule,
		    //CursosModule,
		    AppRoutingModule,
		    AlunosModule
		  ],
  		....
		````
	- 3: No arquivo de roteamento, temos que tirar o caminho principal,pois o principal ja foi configurado em outro ponto.
		- cursos.routing.module.ts (Primeiro Path)
		````typeScript
			const cursosRoutes: Routes = [
			  { path: '', component: CursosComponent},
			  { path: 'cursos/:id', component: CursoDetalheComponent},
			  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
			];
		````
- Ocorreu erro na rota do cursos, por não ter um padrão de rotas definido
	- Cursos modo errado:
		````typeScript
			const cursosRoutes: Routes = [
			  { path: '', component: CursosComponent},
			  { path: 'cursos/:id', component: CursoDetalheComponent},
			  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
			];
		````
	- Aluno corret:
		````typeScript
			const alunosRoutes: Routes = [
			  { path: '', component: AlunosComponent, children: [
			    { path: 'novo', component: AlunosFormComponent},
			    { path: ':id', component: AlunosDetalheComponent},
			    { path: ':id/editar', component: AlunosFormComponent},
			  ]},
		````
	- Cursos Corrigido:
		````typeScript
			const cursosRoutes: Routes = [
			  { path: '', component: CursosComponent},
			  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
			  { path: ':id', component: CursoDetalheComponent},  
			];
		````
- Lazy Loading é simples e não tem complexidade na sua implantação

# 15. Rotas: Tela de Login e como não mostrar o Menu (NavBar)

- [Vídeo Aula](https://youtu.be/bOoddUeklZY)
- Ao acessarmos a rota de login, temos somente um login works
- Queremos um usuário e senha.
- Pegmaos um html do materialize e utilizamos dentro do nosso componente de login e senha
	````html
		<div class="row">
		    <div class="input-field col s6">
		      <input value="Alvin" id="first_name2" type="text" class="validate">
		      <label class="active" for="first_name2">First Name</label>
		    </div>
		  </div>

		    <div class="row">
		    <div class="input-field col s12">
		      <input  id="senha" type="password" class="validate">
		      <label class="active" for="senha">Senha</label>
		    </div>
		  </div>
	````
- Pegamos também um botão de submit.
	````html
		  <button class="btn waves-effect waves-light" type="submit" name="action" (click)="fazerLogin()">Login
		    <i class="material-icons right">send</i>
		  </button>
	````
- Ciramos a função fazerLogin(), par avaliramos o nosso login
- Criamos uma classe de serviço para autenticação
	- ng g s login/auth
	- declaramos ela como provider dentro do nosso app module.
- Criamos um objeto usuario para fazer o gerenciamento do login com dois campos
	- Usuario
	- Senhs
- Posterior instanciamos este usuário no nosso login.component
- Ajustamos o HTMl para o mesmo ser visivel de maneira correta e com CSS:
	````html
		<h5>Login</h5>

		<div class="row">
	    <div class="input-field col s12">
	      <input  [(ngModel)]="usuario.nome"  id="usuario" type="text" class="validate">
	      <label class="active" for="usuario">Usuário</label>
	    </div>
	  </div>

	  <div class="row">
	    <div class="input-field col s12">
	      <input [(ngModel)]="usuario.senha"  id="senha" type="password" class="validate">
	      <label class="active" for="senha">Senha</label>
	    </div>
	  </div>

	  <button class="btn waves-effect waves-light" type="submit" name="action" (click)="fazerLogin()">Login
	    <i class="material-icons right">send</i>
	  </button>
	````
- LEMBRAR DE ADICIONAR O FORMS MODULE NO DECLARATION DO APP MODULE.
- Criamos uma autenticação mais basica para testar o nosso login
	- Primeiramente Criamos dentro do serviço mocado um processo de login (na serviçe do login).
	````typeScript
		export class AuthService {

		  private  usuarioAutenticado: boolean = false;
		  constructor(private router: Router) { }

		  fazerLogin(usuario: Usuario){

		    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
		      this.usuarioAutenticado = true;
		      this.router.navigate(['/'])
		    }else {
		      this.usuarioAutenticado = false; 
		    }
		  }
		}

	````
	- Posterior ajustamos o nosso componente:
	````typeScript
		export class LoginComponent implements OnInit {

		  usuario: Usuario = new Usuario();

		  constructor(private authService: AuthService){}

		  fazerLogin(){
		    console.log(this.usuario);
		    this.authService.fazerLogin(this.usuario);   
		  }

		  ngOnInit(): void {    
		  }

		}

	````
	- Em resumo, fizemos um serviço estatico e depois caso de certo, apontmaos para a rota de navegação home.
- Vamos travar na proxima aula, para o cara nao poder acerar as rotas se ele não estiver autenticado.
- No login temos o menu e não queremos mostra ele. 
- Como esconder este menu
	- Vamos utilizar um ngIF para escodner o evento
- Dentro do app mudle, criamos uma lógica de true ou false para mostrar a barra de menu
	````typeScript
		 mostrarMenu: boolean = false;
		  constructor(private authService: AuthService){
		  }

		  ngOnInit(){
		    this.authService.mostrarMenuEmitter.subscribe(
		      mostrar => this.mostrarMenu = mostrar
		    );
		  }
	````
- Dentro do auth.serivce, adicionamos a seguinte lógica:
	````typeScript
		 private  usuarioAutenticado: boolean = false;
		  constructor(private router: Router) { }

		  mostrarMenuEmitter = new EventEmitter<boolean>();

		  fazerLogin(usuario: Usuario){

		    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
		      this.usuarioAutenticado = true;
		      this.mostrarMenuEmitter.emit(true);
		      this.router.navigate(['/'])
		    }else {
		      this.usuarioAutenticado = false;
		      this.mostrarMenuEmitter.emit(false);
		    }
		  }
	````
- Posterio realizamos o ajuste no html:
	````html
		<nav *ngIf="mostrarMenu">
		  <div class="nav-wrapper">
		    <a routerLink="" class="brand-logo right">Rotas Ng2</a>
		    <ul id="nav-mobile" class="left hide-on-med-and-down">
		      <li routerLinkActive="active"><a routerLink="/login">Login</a></li>      
		      <li routerLinkActive="active"><a routerLink="/cursos" [queryParams]="{pagina:1}">Cursos</a></li>      
		      <!--li routerLinkActive="active"><a [routerLink]="['/cursos', idCurso.value]">Cursos com ID</a></!--li-->      
		      <li routerLinkActive="active"><a routerLink="/alunos" >Alunos</a></li>      
		    </ul>
		  </div>
		</nav>
	````

# 16. Usando Guarda de Rotas: CanActivate

- [Vídeo Aula](https://youtu.be/vVWttMeiR6s)
- Como desenvolver uma guarda de rotas.
- Validar se o usuário pode acessar uma determinada rota
- Conseguimos acessar as rotas sem acessar o menu em sí; 
- Ao acessar o sistema, mostramos a rota de login.
- Se o usuário nao estiver logado, não vai poder acessar as rotas.
- Tipo de serviço especial que implementa um metodo, que o angular sabe que este determinado metodo, como guarda de rotas.
- Vamos falar em 3 aulas sobre o guarda de rotas.
- Vamos seguri o padrao, colocando dentro de um diretorio guards. 
- Criei o seguinte componente:
	- ng g s guards/auth-guard
- Se temos interfaçe, temos que utilizar a implementação do determinado método.
- AuthGuard é um guarda de rotas
	- Dentro implementamos a classe CanActivate
	- Implementamos o canActivate
		````typeScript
			constructor(
		    private authSarvice: AuthService,
		    private router: Router,
		  ) { }

		  canActivate(
		    route: ActivatedRouteSnapshot, 
		    state: RouterStateSnapshot): Observable<boolean> | boolean{

		      if(this.authSarvice.usuarioEstaAutenticado()){
		        return true;
		      }else{
		        this.router.navigate(['/login'])
		        return false;
		      }     

		    }
		    
		````
		- É retornado um Obsearvble ou boolean.
		- Observable é uma variavel que está sendo monitorada e caso haja alteração o valor da variavel sera identificado
- Criamos uma validação para verificar se o usuário está autenticado
	- Validação
		````typeScript
			 usuarioEstaAutenticado(){
			    return this.usuarioAutenticado;
			  }
		````
- Como o AuthSarvice tem escopo global, euconsito utilizar o mesmo dentro do nosso guards
- O CanActivate, valida se o cara está autenticado e caso sim, manda para a o home caso não, madnda para o login
- Sinalizamos o guarda de rotas:
	````typeScript
		{path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
  		canActivate: [AuthGuard]},
	````
	- Setamos esta guarda de rotas 
- disponibilizamos também através do provider o AuthServer para todos poderem utilizar. 
- 

# 17. Usando Guarda de Rotas: CanActivateChild
- [Vídeo Aula](https://youtu.be/e7ttQtj2w6E)
- Utilizar guarda de rotas para rotas filhas
- Aula Anterior setamos o canActivate nas nossas rotas
- Similar de utilizar o guarda rotas
- Criamos o arquivo cursos.guard.ts
	````typeScript
		import { Injectable } from "@angular/core";
		import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
		import { Observable } from "rxjs";

		@Injectable()
		export class CursosGuard implements CanActivateChild{
		        
		    canActivateChild(
		        route: ActivatedRouteSnapshot, 
		        state: RouterStateSnapshot): Observable<boolean> | boolean{
		    
		            return true;        
		    
		        }

		}
	````
- Realizamos o declaration também, para o determinado guarda rotas ficar disponível para todos.
- Quando estivermos desenvolvendo, podemos criar um guarda de rotas para cada módulo ou um mais genérico para todo o projeto.
- Configuraoms guarda de rotas filha:
	````typeScript
		  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
		  canActivate: [AuthGuard],
		  canActivateChild: [CursosGuard]},
	````
- Só vai conseguir acessar cursos, se tiver logado.
- Nem sempre o usuário vai poder fazer tudo. 
- Podemos utilizar o guarda de rotas filhas para fazer esta verificação.
- Criamos um AlunosGuard, para podermos guardar as rotas do aluno
- Colocamos dentro de Provider o guarda de rotas do aluno
	````typeScript
	@NgModule({
		providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
	})
		  
	````
- Configuramos a guarda de rotas de maneira muito simliar ao cursos guard.
	````typeScript
		import { Injectable } from "@angular/core";
		import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
		import { Observable } from "rxjs";

		@Injectable()
		export class AlunosGuard implements CanActivateChild{
		        
		    canActivateChild(
		        route: ActivatedRouteSnapshot, 
		        state: RouterStateSnapshot): Observable<boolean> | boolean{

		            console.log('Guarda de rota Alunos');    
		            return true;            
		        }

		}
	````
- Colocamos dentro da rota alunos o guarda rotas
	````typeScript
		  {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
		  canActivate: [AuthGuard],
		  canActivateChild: [AlunosGuard]},		  
	```` 
- É exatamente o mesmo conteudo da aula passada.
	- Um ve o módulo, a rota especifica. 
	- O outro ve as rotas filhas, as rotas dependentes
- O que vamos ver agora, vale tanto para rotas quanto para rotas filhas
	- Ambos recebemo os mesmos parametros:
	- Route - Foto da rota ativada
	- State - Stado desta rota
- Sempre utiliza o debug para analisar o que tem nas saidas de browser.
	````typeScript
		console.log(route);    
        console.log(state);    
	````
- Pelo debug do navegador conseguimos ver por todas as rotas que são passadas
	- /alunos
	- /alunos/editar
	- /alunos/1/editar
- Conseguimos verificar pelo segmento da url "urlSegment"
	- conseguimos através deles validar se o usuário tem acesos ou nao a determinado segmento.
- Fazemos uma validação na guarda de rotas aluno, onde impedimos o usuário de usar a rota de edição de cursos
	````typeScript
	canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | boolean{

            console.log(route);    
            console.log(state);    

            if(state.url.includes('editar')){
                alert('Usuário sem aesso.');
                return false;
            }
            return true;            
        }
    ````
- Colocamos uma lógica até para sinalizar ao usuário que ele não pode executar tal tarefa através de um alert.
- dois retornos, observable e o bollean
	- No estado atual estamos retornando o boolean
- Podemos injetar um serviço para ser feita uma validação via servidor, se o usuário tem acesso a uma determinada rota.
- Exemplo usando o of:
	````typeScript
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

		            if(state.url.includes('editar')){
		                alert('Usuário sem aesso.');
		                return of(false);
		            }
		            return of(true);
		        }

		}
	````
- Dentro colocamos a lógica que podemos utilizar para verificar a questão de permissões.
- Na guarda vazia a gente ja chama a guarda de rotas filha. 
- Como mudamos o local do aluno gards, tirando o escopo global. 
- Removesmo o childGuardo da rota Alunos, dentro do nosso arquivo principal de rotas.
	````typeScript
		  {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
		  canActivate: [AuthGuard],
		  //canActivateChild: [AlunosGuard]
		},
	````
- Posterior setamos a guarda no Alunos.Routing.Module
	````typeScript
		import { ModuleWithProviders, NgModule } from '@angular/core';
		import { RouterModule, Routes } from '@angular/router';

		import { AlunosComponent } from './alunos.component';
		import { AlunosFormComponent } from './alunos-form/alunos-form.component';
		import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
		import { AlunosGuard } from '../guards/alunos.guard';

		const alunosRoutes: Routes = [
		  { path: '', component: AlunosComponent, 
		  canActivateChild: [AlunosGuard],
		  children: [
		    { path: 'novo', component: AlunosFormComponent},
		    { path: ':id', component: AlunosDetalheComponent},
		    { path: ':id/editar', component: AlunosFormComponent},
		  ]},
		  
		  
		];

		@NgModule({
		  imports: [RouterModule.forChild(alunosRoutes)],
		  exports: [RouterModule]
		})
		export class AlunosRoutingModule {
		  //static  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
		 }
	````
- Se voce quer que o guarda de rotas olhe para o componente pai tamnbém, dai voce declara no app.roudting.module
- Se você quer apenas para as rotas filhas, então coloca no módulo de rotas do seu módulo/component


# 18. Usando Guarda de Rotas: CanDeactivate

- [Vídeo Aula](https://youtu.be/I0JZcL3Bsf4)
- Guarda de rotas CanDeactivate
- Verificando se o usuário pode desativar uma determinada rota
- Desenvolver verificação de permissão
- Como verificar se o usuário pode desenvolver uma rota ou não.
- Perguntamos para o usuário se ele realmente quer sair de um formluário e perder o que ele já tem feito
- caso o usuário perca comunicação com o servidor, fica mais dificil de fazer o usuário dar o submit novamente
- Criamos o candeactivate do alunoForms
	````typeScript
		//import { IFormCanDeactivate } from '../iform-candeactivate';
		import { Observable } from 'rxjs';
		import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
		import { Injectable } from '@angular/core';
		import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';

		@Injectable()
		export class AlunosDeactivateGuard implements CanDeactivate<AlunosFormComponent> {
		                
		        canDeactivate(
		            component: AlunosFormComponent,
		            route: ActivatedRouteSnapshot,
		            state: RouterStateSnapshot
		        ): Observable<boolean>|Promise<boolean>|boolean {

		            console.log('guarda de desativação');


		            return true;
		            //return component.podeMudarRota ? component.podeMudarRota() : true;

		            //return component.podeDesativar ? component.podeDesativar() : true;
		    }
		}

	````
- Temos que setar este AlunosDeactivateGuard como providers. 
	- Neste caso em especifico vamos colocar dentro do módulo especifico da aplicação
	````typeScript
		@NgModule({
		...
		  providers: [
		    AlunosService,
		  AlunosDeactivateGuard
		 ...
		]
	````
- Colocamos o deactivate para a rota que desejamos
	````typeScript
		const alunosRoutes: Routes = [
		  { path: '', component: AlunosComponent, 
		  canActivateChild: [AlunosGuard],
		  children: [
		    { path: 'novo', component: AlunosFormComponent},
		    { path: ':id', component: AlunosDetalheComponent},
		    { path: ':id/editar', component: AlunosFormComponent,
		    canDeactivate: [AlunosDeactivateGuard]},
		  ]},
	````
- Vamos testar as validações no formulário
	- Primeiramente criamos a função onInput(), para validar se houve alteração no nosso from (alunos-form.component.ts)
		````typeScript
			  onInput(){
			    this.formMudou = true;
			    console.log('mudou');
			  }
		````
- Posterior ao editarmos o formulário acabamos por não ter mais a possibilidade de mudar de rota a não ser confirmando a saída.
- Exemplo da classe de saída
	````typeScript
	//
	  podeMudarRota(){

	    if (this.formMudou) {
	      confirm('Tem certeza que deseja sair dessa página?');
	    }
	    return true;
	  }

	//alunos-deactivate.guards
	return component.podeMudarRota ? component.podeMudarRota() : true;
	````
- 

# 19. Usando Guarda de Rotas: CanDeactivate com Interface Genérica
- [Vídeo Aula](https://youtu.be/B-a4InjV3mg)
- Guarda de desativação de rotas, fazendo isto de forma mais genérica.
- Fazendo isto em varios componentes, que são as interfaces.
- O guarda de rotas que a gente criou, so vai funcionar com o AlunoFormComponent
- Imagina se tivessemos diversos formulários
- Como podemos reutilizar um guarda de rotas, de forma mais genérica?
	- Com interfaces
	- Conseguimos fazer typeScript
- Vamos criar uma interface
	- Vamos apenas definir o comportamento daquela determinada interface.
- Criamos a interface
	- iform-candeactive.ts
	- Hoje é possível criar via angular CLI
		- ng generate interface <name> <type> [options]
		- ng g interface <name> <type> [options]
		- ng g i <name> <type> [options]
- O código da nossa interface ficou assim?
	````typeScript		
		export interface IFormCanDeactivate {

		    podeDesativar: () => any;

		}
	````
- E o nosso alunos-deactivate.ts assim:
	````typeScript
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
	````
- Com isto agora a gente vai validar o deactivate para todso que tiverem a interface IFormCanDeactivate implementada
- Posterior, sempre que temos a interface implementada, temos que declarar as funções que estão dentro da mesma no nosso método
	````typeScript
		import { Component, OnInit, OnDestroy } from '@angular/core';
		import { ActivatedRoute } from '@angular/router';
		import { Subscription } from 'rxjs';
		import { AlunosService } from '../alunos.service';
		import { ReactiveFormsModule } from '@angular/forms';
		import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

		@Component({
		  selector: 'app-alunos-form',
		  templateUrl: './alunos-form.component.html',
		  styleUrls: ['./alunos-form.component.css']
		})
		export class AlunosFormComponent implements IFormCanDeactivate{

		  aluno: any = {};
		  inscricao!: Subscription;
		  private formMudou: boolean = false;

		  constructor(
		    private route: ActivatedRoute,
		    private alunosService: AlunosService
		  ) { }

		  ngOnInit() {
		    this.inscricao = this.route.params.subscribe(
		      (params: any) => {
		        let id = params['id'];

		        this.aluno = this.alunosService.getAluno(id);

		        if (this.aluno === null){
		          this.aluno = {};
		        }
		      }
		    );
		  }

		  ngOnDestroy(){
		    this.inscricao.unsubscribe();
		  }

		  onInput(){
		    this.formMudou = true;
		    console.log('mudou');
		  }

		  podeMudarRota(){

		    if (this.formMudou) {
		      confirm('Tem certeza que deseja sair dessa página?');
		    }
		    return true;
		  }

		  podeDesativar(){
		    return this.podeMudarRota();
		  }

		}

	````
- A lógica acaba sendo especifica para cada classe que trabalhamos.

# 20. Usando Guarda de Rotas: Resolve: carregando dados antes da rota ser ativada

- [Vídeo Aula](https://youtu.be/AEUSrpsAPtw)
- Novo Guarda de Rotas: Resolve
- Tempo que demora para carregar a informação possa ser bem sensivel.
- Pode ser que tenhamos que carregar as informações antes de o componente ser criado
- Vamos criar um guarda de rotas dentro do diretório Alunos
	- guards/aluno-detalhe.resolver.ts
- Pegamos pronta a seguinte com snippet
	````typeScript	import { AlunosService } from './../alunos.service';
		//import { Aluno } from './../aluno';
		import { Injectable } from '@angular/core';
		import { Observable } from 'rxjs';
		import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

		@Injectable()
		export class AlunoDetalheResolver implements Resolve<Team> {

		    constructor(private alunosService: AlunosService) {}

		    resolve(
		        route: ActivatedRouteSnapshot,
		        state: RouterStateSnapshot
		        ): Observable<any>|Promise<any>|any {
		            
		    }
		}
	````
- Vamos criar um objeto Aluno, com typeScript (Nele Podemos)
	````typeScript
		export class Aluno {

	    constructor(
	        public id: number,
	        public nome: string,
	        public email: string
	    ){}
	}
	````
- Mudamos o nosso serviço para o array de alunos par atipo de aluno. alunos.serviçe.ts
	````TypeScript
		 private alunos: Aluno[] =[
	    {id:1 , nome: 'Aluno 01', email: 'aluno01@email.com'},
	    {id:2 , nome: 'Aluno 02', email: 'aluno02@email.com'},
	    {id:3 , nome: 'Aluno 03', email: 'aluno03@email.com'}    

	  ];
	````
- Configuramos a lógica da guarda Resolve.
	````typeScript
		import { AlunosService } from './../alunos.service';
		import { Injectable } from '@angular/core';
		import { Observable } from 'rxjs';
		import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
		import { Aluno } from '../alunos';

		@Injectable()
		export class AlunoDetalheResolver implements Resolve<Aluno> {

		    constructor(private alunosService: AlunosService) {}

		    resolve(
		        route: ActivatedRouteSnapshot,
		        state: RouterStateSnapshot
		        ): Observable<any>|Promise<any>|any {

		            console.log('AlunoDetalheResolver');
		            
		            let id = route.params['id'];
		            
		            return this.alunosService.getAluno(id);
		    }
		}
	````
- Vamos setar a Guarda de Rotas no Aluno routing (Onde estão as rotas do nosso component)
	````typeScript
		const alunosRoutes: Routes = [
		  { path: '', component: AlunosComponent, 
		  canActivateChild: [AlunosGuard],
		  children: [
		    { path: 'novo', component: AlunosFormComponent},
		    { path: ':id', component: AlunosDetalheComponent,
		    resolve: {aluno : AlunoDetalheResolver}
		    },
		    { path: ':id/editar', component: AlunosFormComponent,
		    canDeactivate: [AlunosDeactivateGuard]
		  },
		  ]},   
		];
	````
	- Como vemos abaixo, usamos a exportação da classe de rotas para um objeto.
	    { path: ':id', component: AlunosDetalheComponent,
		    resolve: {aluno : AlunoDetalheResolver}
		    },
- Tudo no Angular, temos que declarar como provider  hahhaha
	````TypeScript
		@NgModule({
		  ...		  
		  providers: [
		    AlunosService,
		    AlunosDeactivateGuard,
		    AlunoDetalheResolver
		]
		  ...
	````
	- Tem @Injectable(), temos que colocar no provider
- Vamos obter o aluno antes de carregar o componente
- Atributo data
	- Dados fornecidos
- Vamos ajustar a lógica para carregar objeto antes.
	````typeScript
		  ngOnInit() {
		    
		    console.log('ngOnInit: AlunoDetalheComponent - chegou aqui');

		    this.inscricao = this.route.data.subscribe( 
		      (info) => {
		        console.log(info);
		        this.aluno = info['aluno'];
		      }
		    );
		  }
	```` 
- Colocamos consoles.log para poder 
- Com os logs conseguimos ver o fluxo do objeto carregando antes.
- Ajax para o servidor existe diferença;




# 21. Usando Guarda de Rotas: CanLoad: como não carregar o módulo sem permissão

- [Vídeo Aula](https://youtu.be/SQViHeue6bs)
- Como utilizar CanLoad
	- Nao deixar o usuario carregar um módulo sem permissão
- Mas não fazemos isto através do Auth Guard? 
- Tem um detalhe que acaba passando despercebido.
- Se entrarmos direto na URL, o browsers carrega o arquivo com javaScript na memória.
	- Queremos proteger o determinado código.
- Vamos ajustar diretamente no auth.guard.ts
- Vamos implementar o CanLoad na nossa classe de auth guards.
	````typeScript
		import { Observable } from 'rxjs';
		import { Injectable } from '@angular/core';
		import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

		import { AuthService } from './../login/auth.service';

		@Injectable()
		export class AuthGuard implements CanActivate, CanLoad {

		  constructor(
		    private authService: AuthService,
		    private router: Router
		  ) { }

		  canActivate(
		    route: ActivatedRouteSnapshot,
		    state: RouterStateSnapshot
		  ) : Observable<boolean> | boolean {

		    console.log('AuthGuard');

		    return this.verificarAcesso();
		  }

		  private verificarAcesso(){
		    if (this.authService.usuarioEstaAutenticado()){
		      return true;
		    } 
		    this.router.navigate(['/login']);

		    return false;
		  }
		  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
		      console.log('canLoad: verificando se usuário pode carregar o cod módulo');

		      return this.verificarAcesso();
		    }

		}
	````
- Posterior aplicamos o canLoad nas rotas ()
	- Sempre lembrando de fazer o fluxo dos providers nas classes.
	````typeScript
		const routes: Routes = [
		  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
		  canActivate: [AuthGuard],
		  canActivateChild: [CursosGuard],
		  canLoad: [AuthGuard]
		},
		  {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
		  canActivate: [AuthGuard],
		  canLoad: [AuthGuard]
		  //canActivateChild: [AlunosGuard]
		},
	````
- Com isto verificamos se o determinado usuário pode carregar o módulo. 

# 22. Definindo rota padrão e wildcard (rota não encontrada)

- [Vídeo Aula](https://youtu.be/PGJeWEsejdA)
- Definindo um padrão e Wildcard - Rota não Encontrada
- Dicas de configuração de rotas
- Configurar um componente para rotas não encontrada
	- Página 404, rota não encontrada
- Importança de identificar uma rota não encontrada.
- Quando temos erro de rota, no momento atual, simplismente é mostrado em tela, diversos erros no console.
- Vamos criar um componente para gerenciar estes erros em tela
	- ng g c pagina-nao-encontrada
- Sempre colocamos as rotas com endereço físico.
- Por ultimo colocamos o vaziu. 	
- O angular faz uma validação de rotas pelos elementos do array de rotas.
- Por isto que é importante colocar as rotas mais genéricas ao final do nosso arquivo de rotas.
	- Abaixo como ficaria o nosso arquivo de rotas
	````typeScript
		const routes: Routes = [
		  {path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(mod => mod.CursosModule),
		  canActivate: [AuthGuard],
		  canActivateChild: [CursosGuard],
		  canLoad: [AuthGuard]
		},
		  {path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(mod => mod.AlunosModule),
		  canActivate: [AuthGuard],
		  canLoad: [AuthGuard]
		  //canActivateChild: [AlunosGuard]
		},
		  //{ path: 'cursos', component: CursosComponent},
		  //{ path: 'cursos/:id', component: CursoDetalheComponent},
		  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
		  { path: 'login', component: LoginComponent},
		  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
		  { path: '**', component: PaginaNaoEncontradaComponent},
		];
	````
- O path de componente não encontrado, busca tudo que não for encontrado nos path's e joga para o componente de página não encontrada
	````  typescript
	{ path: '**', component: PaginaNaoEncontradaComponent},
	````
- Também não temos mais erros.
- O usuário não conseguiu acesar, também dava para direcionar para a rota de login

- Rota padrão ou rota de redirecionamento
- { path: '', redirectTo: '/home', pathMatch: 'full'},
- Temos que ter um redirecionamento vazio, para a home ou para outro lugar.
- Documentação sobre rotas do angular:
	- https://angular.io/guide/routing-overview
- 

# 23. Estilo de URL: HTML5 ou usando
- [Vídeo Aula](https://youtu.be/zkJ4I-dzkRc)
- Configrar os estilos da rota
- # antes da rota na maioria das aplicações.
- Quando começamos a trabalhar com algum back-end, não vá reconhecer os links ou roteamentos ou URL's
- Angular oferece para nós a possibilidade de usarmos o # para configurações.
	- Que por sinal é simples
- O padrão do angular é não utlizar a #, mas caso queiramos é so adaptar conforme os parametros.
- Ajustamos o arquvio app.routing.module-ts
	````typeScript
		@NgModule({
		  imports: [RouterModule.forRoot(routes, {useHash: true})],
		  exports: [RouterModule]
		})
	````
- Ao testarmos, ocorre a # nas diversas url's
	- http://localhost:4200/#/login

