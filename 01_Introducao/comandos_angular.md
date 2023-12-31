# Comandos necessários para iniciarmos e começarmos a trabalhar com Angular

##
- O que necesstiamos para termos configurado nosso ambiente
	- https://nodejs.org
		- Pq instalar o node?
		- Maioria dos framewrks estão evoluindo
		- Vem instalado o NPM (Como se fosse um maven só que do node.jS)
		- Repositorio de varias bibliotecas de java Script
		- Angular_CLI.
	- https://www.typescriptlang.org/
		- TypeScript
		- Windows
			- npm install -g typescript 
		- Linux/Mac
			- sudo npm install -g typescript 
		- Versão: tsc -v
	- Angular CLI
		- npm install -g @angular/cli
		- sudo npm install -g @angular/cli
		- Ver versão: ng version

- Pq usar o typeScript e não javaScript puro?
	- Documentação do angular é em javaScript
	- O que é o Typscript?
		- Super conjunto do javaScript.

- Editor de texto para desenvolvimento
	- Visual Studio Code
	- WebStorm
	- Atom
	- Sublime Text

## Comandos do primeiro Projeto

- ng new primeiro-projeto - Comando para criar o primeiro projeto dentro de um shell e da pasta que desejariamos criar.
	- SCSS (Sass)
	- Renderização no Servidor (SSR):
	- Instalação demora um pouco
- ng-serve, para iniciar o servidor.
- @Componente - Parecido com anotation do java
- Tamplate literal, um tableta sem concatenação
	- template: `
	Contacenta tudo aqui dentro
	 `
- Comando de Component import { Component } from "@angular/core";
- ng g m cursos
	- modulo com angular CLI
- ng g c cursos 
	- Crio todos so componente.
- ng g s cursos
	- Crio a classe de serviço 
- ng2-bootstrap bootstrap --save
	- Comando para integrar o bootstrap ao projeto npm install 
- Criação de componente e módulo
	- ng g m meu-form
	- ng g c meu-form
- Instalar o Angular
	- npm intall -g angular-cli
	- Precisamos ter node instalado para conseguir instalar a versão do Angular
	- Mac ou linux, colocamos o Sudo para instalação
- Ver versão do node:
	- node -v 
- Documentação do angular CLI
	- https://github.com/angular/angular-cli
- Novo projeto
	- ng new nome-projeto
	- Nao podemos criar nomes de projetos comecando com numero.
- Iniciar o servidor
	- ng serve 
	- Adiciona um link para qual o projeto está sendo servido.
- Direcionar a porta do servidor
	- ng serve --port 4201 --live-reload-port 49153
- Podemos iniciar o projeto de uma maneira um pouco diferente
	- mkdir nomeProjeto
	- cd NomeProjeto
	- ng init
	- ng serve
- Criar componente
	- ng generate component meu-primeiro
	- ng g component meu-primeiro
	- ng g component diretiva-ngif
- limpar console
	- clear
- - Criar Serviço
	- ng g service diretiva-ngif/diretiva-ngif
	- Temos que apontar a qual diretório a mesma pertence, para não criar em separado no projeto.
- Diretiva
	- ng g directive minha-diretiva
- Pipe
	- ng g pipe meu-pipe
- Class 
	- ng g class minha-classe
- Interface
	- ng g interface minha-interface
- Enum
	- ng g enum meu-enum
- Comandos para cada estilo dentro do projeto.
	- ng new meu-projeto --style=sass
	- ng new meu-projeto --style=less
	- ng new meu-projeto --style=stylus
- Projeto existente
	- ng config schematics.@schematics/angular:component.style scss
	- ng config schematics.@schematics/angular:component.style less
	- ng config schematics.@schematics/angular:component.style styl
- Validar ocódigo de maneira consistente
	- ng lint
- ng lint install
	- Comando para versão especifica
	- ng add @angular-eslint/schematics@16
- Caso de erro ao executar o ng lint:
	````console
			C:\Mentoria\Programacao\Front-End\loiane-angular-curso-completo\03_Angular_CLI\Aula_04_diretivas\src\app\diretiva-ngif\diretiva-ngif.service.ts
		  8:17  error  Unexpected empty constructor  @typescript-eslint/no-empty-function

		✖ 1 problem (1 error, 0 warnings)
		Lint errors found in the listed files.
	````
	- Ajustar a classe citada com o seguinte construtor:
		````typescript
			 constructor() {
        	// do nothing.
		    }

		    foo() {
		        // do nothing.
		    }
		````
- Teste automatizado do angular
	- ng test

- Comandos para o build
	- ng build --target=development --enviroment=dev
	- ng build --dev --e=dev
	- ng build --dev
	- ng build
- INstalar um servidor http
	- npm install http-server -g
- Instalar Bootstrap 5 Angular
	- ng add @ng-bootstrap/ng-bootstrap
	- npm install jquery@latest
	- Ajustamos o arquivo angular.json, dentro das tag's script
		- "node_modules/jquery/dist/jquery.min.js",
  		- "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"  		
 		- Código para teste
	 	````typeScript
	  		<div class="dropdown">
			  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
			    Dropdown button
			  </button>
			  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			    <li><a class="dropdown-item" href="#">Action</a></li>
			    <li><a class="dropdown-item" href="#">Another action</a></li>
			    <li><a class="dropdown-item" href="#">Something else here</a></li>
			  </ul>
			</div>
	  	````
	- Jeito Velho e errado
	- ng add @ng-bootstrap/ng-bootstrap
	- Documentação - https://valor-software.com/ngx-bootstrap/#/
- Caso precisse, pode colocar na mão da seguinte maneira
	- @import '~boostrap/dist/css/boostrap.min.css'
	- ~ o til pega da pasta do node modules.
- npm install --save bootstrap-icons
	- Adicionem em src/styles.css: @import '~bootstrap-icons/font/bootstrap-icons.css'

- Criando diertiva
	- Sempre dentro de uma pasta compartilhada
	- Shared
	- ng g d shared/highligth-mouse
- Criando um serviço
	- ng g s shared/log
	- s de service
- Criando pipe com o Angular
	- ng g p camel-case
- Instalar o materialize
	- npm install materialize-css@next
	````typeScript
	// dentro do arquivo angular.json
		"styles": [
		  "node_modules/materialize-css/dist/css/materialize.css",
		  "src/styles.css"
		],
		"scripts": [
		  "node_modules/materialize-css/dist/js/materialize.js"
		]
	````
	````html
	// Exemplo de uso
		<button class="btn waves-effect waves-light" type="button" name="action">Clique-me
		  <i class="material-icons right">send</i>
		</button>
	````
- Criou o componente principal ja cria o modulo do determinado componente
	- Exemplo abaixo:
	- CommonModule, para termos acesso a ngif ngfor e etc
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
- Assim como rotas
	- Exemplo abaixo:
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
- Instalar Bootstrap 5 Angular
	- [Referencia 1](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/)
	- [Referencia 2](https://valor-software.com/ngx-bootstrap/#/)
	- ng add @ng-bootstrap/ng-bootstrap
	- npm install jquery@latest
	- Ajustamos o arquivo angular.json, dentro das tag's script
		- "node_modules/jquery/dist/jquery.min.js",
  		- "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"  		
 		- Código para teste
	 	````typeScript
	  		<div class="dropdown">
			  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
			    Dropdown button
			  </button>
			  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			    <li><a class="dropdown-item" href="#">Action</a></li>
			    <li><a class="dropdown-item" href="#">Another action</a></li>
			    <li><a class="dropdown-item" href="#">Something else here</a></li>
			  </ul>
			</div>
	  	````
	- Instlar o ngx-bootstrap
		ng add ngx-bootstrap
		ng add ngx-bootstrap bootstrap --save
	- Posterior Adicionamos no app.module as importações
		````typeScript
			import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
			import { TooltipModule } from 'ngx-bootstrap/tooltip';
			import { ModalModule } from 'ngx-bootstrap/modal';

			@NgModule({
			  imports: [
			    BrowserModule,
			    BsDropdownModule.forRoot(),
			    TooltipModule.forRoot(),
			    ModalModule.forRoot()
			  ],
		```` 
	- Exemplo de dropdown para teste
		````html
			<div class="btn-group" dropdown>
			  <button id="button-basic" dropdownToggle type="button" class="btn btn-primary dropdown-toggle"
			          aria-controls="dropdown-basic">
			    Button dropdown <span class="caret"></span>
			  </button>
			  <ul id="dropdown-basic" *dropdownMenu class="dropdown-menu"
			      role="menu" aria-labelledby="button-basic">
			    <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
			    <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
			    <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
			    <li class="divider dropdown-divider"></li>
			    <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
			    </li>
			  </ul>
			</div>
		````
- O nome da tag html. a classe gera o código de forma automática:
	- isto: div.form-group
	- Vai gerar isto: <div class="form-group"></div>

- ngform, ngsubmit, ngmodel, pertencem ao FormsModule.
- Caso tenha um módulo especifico, tem que importar o FormsModule, no módulo no qual estamos trabalhando.
- Criar um módulo
	- ng g m template-form

Snipets

- Para criarmos rotas defoults com snipet
	- a-route-paht-default
- (ngSubmit)="onSubmit()"

shift + alt + F para alinhar as informações

- Como temos erro de pq a variavel nao é tipada ou não aceita determinado tipo de informação


- Entender como funciona a traduação via pipe de dados.


Criar componente com routa 
	- ng g m cursos --routing



- Instalar Bootstrap 5 Angular
	- [Referencia 1](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/)
	- [Referencia 2](https://valor-software.com/ngx-bootstrap/#/)
	- npm install bootstrap
	- ng add ngx-bootstrap
	- Ajustamos o arquivo angular.json, dentro das tag's tyles
		- "node_modules/bootstrap/dist/css/bootstrap.min.css",
		- Scripts
			- "node_modules/jquery/dist/jquery.min.js",
  			- "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"  
  		- Testar	
	- Adicionamos os inportes ao app.module
		````typeScript 
		import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
		import { TooltipModule } from 'ngx-bootstrap/tooltip';
		import { ModalModule } from 'ngx-bootstrap/modal';

		@NgModule({
		  imports: [
		    BrowserModule,
		    BsDropdownModule.forRoot(),
		    TooltipModule.forRoot(),
		    ModalModule.forRoot()
		  ],
		
 		- Código para teste
 		<div class="btn-group" dropdown>
			  <button id="button-basic" dropdownToggle type="button" class="btn btn-primary dropdown-toggle"
			          aria-controls="dropdown-basic">
			    Button dropdown <span class="caret"></span>
			  </button>
			  <ul id="dropdown-basic" *dropdownMenu class="dropdown-menu"
			      role="menu" aria-labelledby="button-basic">
			    <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
			    <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
			    <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
			    <li class="divider dropdown-divider"></li>
			    <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
			    </li>
			  </ul>
			</div>


		  <button type="button" class="btn btn-primary"
          tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    	Simple demo
  			</button>

  		/*
	 import { setTheme } from 'ngx-bootstrap/utils';
	   
	  @Component({…})
	  export class AppComponent {
	    constructor() {
	      setTheme('bs5'); // or 'bs4'
	      …
	    }
	  }

	*/
  	````

	// Pode ser necessario forçar a inicializaçõa do bootstrap 5 dentro

	


ngx-bootstrap