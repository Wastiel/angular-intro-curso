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


# 07. Rotas Imperativas: Redirecionamento via código
- [Vídeo Aula]()

# 08. Rotas: Definindo e extraindo parâmetros de URL (query)
- [Vídeo Aula]()

# 09. Rotas: Criando um módulo de rotas
- [Vídeo Aula]()

# 10. Criando um módulo de funcionalidade
- [Vídeo Aula]()

# 11. Rotas: Criando um módulo de rotas de funcionalidade
- [Vídeo Aula]()

# 12. Rotas Filhas
- [Vídeo Aula]()

# 13. Rotas Filhas: desenvolvendo as telas
- [Vídeo Aula]()

# 14. Rotas: Dica de Performance: Carregamento sob demanda (lazy loading)
- [Vídeo Aula]()

# 15. Rotas: Tela de Login e como não mostrar o Menu (NavBar)
- [Vídeo Aula]()

# 16. Usando Guarda de Rotas: CanActivate
- [Vídeo Aula]()

# 17. Usando Guarda de Rotas: CanActivateChild
- [Vídeo Aula]()

# 18. Usando Guarda de Rotas: CanDeactivate
- [Vídeo Aula]()

# 19. Usando Guarda de Rotas: CanDeactivate com Interface Genérica
- [Vídeo Aula]()

# 20. Usando Guarda de Rotas: Resolve: carregando dados antes da rota ser ativada
- [Vídeo Aula]()

# 21. Usando Guarda de Rotas: CanLoad: como não carregar o módulo sem permissão
- [Vídeo Aula]()

# 22. Definindo rota padrão e wildcard (rota não encontrada)
- [Vídeo Aula]()

# 23. Estilo de URL: HTML5 ou usando
- [Vídeo Aula]()