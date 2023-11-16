# Introdução

## 01. Introdução ao Angular

- Vídeo Aula
[Vídeo Aula](https://youtu.be/tPOMG0D57S0)
- Introdução
	- Aulas de introdução ao Angular 2 
- Componentes e templates
- Data Binding
- Diretivas
- Serviços
- Formulários
- Roteamento
- INtegração com Servidor
- CRUD Mestre-Detalhe

- Pré Conhecimentos
	- HTML
	- CSS
	- JavaScript
	- Não precisa saber Angular 1

- Site Principal
	- https://angular.io
- Melhor amiga do desenvolvedor a documetnação
- Parceria Google + Microsoft
- Open Soruce (Código no GitHub)
- Uso de padrões Web e Web Componentes

- 8 blocos princiapis do freameWork
	- Componentes
	- Diretivas
	- Roteamento
	- Serviços
	- Template
	- Metadata
	- Data Binding
	- Injeção de Dependências
- Componente:
	- A view, o que o usuário vai ver
	- Template, código HTML que vamos mostrar para o usuário
	- Metadata: Metadados, permite o angular ler as classes e processar as mesmas. 
	- Data Binding: associações dos dados com os componentes HTML
	- Comportamento da View.
- Aplicações orientadas a componente
- Exemplo Blog
	- Componente principal
	- Cabeçalho
	- Barra Lateral
	- Lista de Post
		- Dentro de um post, um componente de notas		
- Quebrar a aplicação em partes
- Escrever testes é mais facil.
- Integração com qualquer componente Backend
- Nao devemos escrever lógica dentro do nosso compoennte
- O serviço que vai ter a lógica de negócio
- O serviço pode ser injetado em outras classes, com injeção de dependencias do angular.
- SPA Aplicação de uma página só
	- Mesmo nossa aplicação tendo uma página só, vamos ter telas diferentes
	- 3 telas - Onde vamos nos mover via router.
		- Cadastro de clientes
		- Cadastro de produtos
		- Gerenciamento de vendas
- Diretiva
	- Responsavel por modificar elementos DOM e seu comportametnto
	- Componentes também são diretivas
	- Principal funçãó é de modificiar elementos DOM
- Nossa Aplicação pode ser dividida em módulos.
	- Melhor para organizarmos a nossa aplicação

## 02. Ambiente de Desenvolvimento

- Vídeo Aula
[Vídeo Aula](https://youtu.be/XxPjcMTZz5w)
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

## 03.Hello, World! Criando primeiro projeto e o primeiro Compoennte

- [Vídeo Aula](https://youtu.be/wBrIT2Z8t5I)
- Fazer o nosso primeiro projeto
- Fazer o componente dentro da nossa aplicação. 
- Usar o angular CLI para criar o nosso projeto
- ng new primeiro-projeto - Comando para criar o primeiro projeto dentro de um shell e da pasta que desejariamos criar.
	- SCSS (Sass)
	- Renderização no Servidor (SSR):
	- Instalação demora um pouco
- Usamos o comando ng-serve, para iniciar o servidor.
- Usar o google, pelo fato de o Angular ser parte da google.
- Fazer manualmente, para entendermos como o fluxo funciona
- Entender o padrão de nomenclatura dos padrões do CLI, apra entender o guide do Angular 2
- Interpolação
	````html
	<h1>
  {{title}}
	</h1>
	````
	````typescript
	export class AppComponent {
  		title = 'primeiro-projeto';
		}
	````
- @Anotation = A decoration no angular
- @Component({}) funcionalidade da actma script
- Temos importar esta funcionalidade com o seguinte comando import { Component } from "@angular/core";
- Meta dados
- Selector, com web componentes, criando componentes HTML customizados.
- Estruturas semelhantes de código.
- Criamso um component com o seguinte código:
	`````typescript
		import { Component } from "@angular/core";

		@Component({
		    selector: 'meu-primeiro-component',
		    template: `
		    <p>Meu primeiro component com Angular2! </p>
		    `
		})
		class MeuPrimeiroComponent{}

	`````
- Após criado este primeiro componente, temos que apontar dentro do nosso componente principal, como achamos o determinado componente. 
	- Componente que vamos apontar
	- <meu-primeiro-component></meu-primeiro-component>
	- utilizamo o export para o componente poder ser visivel para os demais. 
	- export class MeuPrimeiroComponent {}
	- Colocamos o componente dentro do app.module, para ele nao poder ser visivel
		- import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro-.component';
		- declarations: [
    		AppComponent,
    		MeuPrimeiroComponent
  			],
  	- Estes passos são passos manuais para gerarmos um componente. Vamos usar este metodo muito pouco.
 - Criar o componente com o CLI
 	- ng g c meu-primeiro2
 		- g: componente global no meu 
 		- c: componente
 		- Nome do componente
 		- Angular CLI, ja cria muitos outros 
 	- Após o comando, a minha classe app.module, ja adiciona o componente para ser utilizado.
 		````typescript
				 		import { NgModule } from '@angular/core';
				import { BrowserModule } from '@angular/platform-browser';

				import { AppRoutingModule } from './app-routing.module';
				import { AppComponent } from './app.component';
				import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro-.component';
				import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

				@NgModule({
				  declarations: [
				    AppComponent,
				    MeuPrimeiroComponent,
				    MeuPrimeiro2Component
				  ],
				  imports: [
				    BrowserModule,
				    AppRoutingModule
				  ],
				  providers: [],
				  bootstrap: [AppComponent]
				})
				export class AppModule { }
 		`````
 - para utilizar este meu componente, 
 	- vou na classe criada meu-primeiro2.component, pego o seletor
 	-	 app-meu-primeiro2
 	- Depois vou para o meu main e coloco o seletor la dentro
 		app-meu-primeiro2
 	- <app-meu-primeiro2></app-meu-primeiro2>

## 04.TypeScript 

- Desmistificar TypeScript
- Vantagens com Angular 02
- Qualquer projeto javaScritp
- Criamos um arquivo main.ts para entender as diferenças entre javaScript e TypeScript
- Ecma, alguns browsers nao suportam ainda
	- precisamos de um transpiler
	- transforma para java Script
- site com as new features: es6-features.org/#Constantes
	- Declaração de variaveis
		- const
		- let
	- Arrow Functions
		- 
	- map, muito usado para programação funcional.
		````typeScript
		//JavaScript
		numeros.map(function (valor){
    		return valor *2;
    		});

		numeros.map(valor => valor *2) //ES 2015
		````
	- Transpile babel
		- babeljs.io
		- transforma o cdigo ES 6 em javaScript
	- decoratores = Anotations
	- Tipagem de variavel
		- //definição do tipo de classe 

		var n1: string = 'asdasdas';
		n1 = 4; //erro
	- Orientação a Objetos
		- interfaces
		- Classes e Atributos
		- Modificadores prive e public
		- Metodos e Getters e Setters
		- Variaveis e métodos estáticos
		- Parte de Interfaces
- Perder o medo do TypeScript


## 05. Módulos (ngModule)

- [Vídeo Aula](https://youtu.be/36kd3uR-hG8)
- Vai ajudar a organizar e modularizar a nossa aplicação
- Pode exclhoer o que outros módulos poddem ver. 
	- Vamos continuar no primeiro projeto
	- vem com o app.module.ts, que módulo raiz da nossa aplicação
- export class AppModule{}
- Em seguida existe o decorar a classe
	- O que esta classe vai ser 
	- @NgModule() -importando do angular/core
	- maioria dos decorations, fazem parte do angular/core
	- BrowserModule - prepara para a apllicação para ser executada pelo browser
	- FormsModule
	- httpModule - Contem o fluxo de requisições ajax
- Metadados
	- declarations:
		- Dentro listamos, componentes, diretivas e pipes dentro deste módulo.
			- AppComponent,
			- MeuPrimeiroComponent
			- MeuPrimeir2Component
	- imports:
		- Outros módulos, ou dentro de algum componente pertencente a este outro módulo.
			- Foram importados.
			- BrowserModule
			- FormsModule
			- HttpModule
	- providers:
		- Delcaramos tudo que vai ser usado de forma geral pela aplicação (guarda de Rotas, autenticação, login), escopo global, declaramos aqui
		- Somente no modo rais:
			- bootstrap: [AppComponent]
				- O componente que deve ser instanciado pela aplicação, vai servir como conteiner para a nossa aplicação.
	- Na nossa aplicação instanciamos o nosso componente principal.
	- Configuramos retas, menus da nossa aplicação
	- Base de um módulo no angular 2.
- Features Modules
	- Usamos para organizar nossos modulos em função de aplicações muito grandes
	- 
- SPA - single page Aplication
- Vamos criar um módulo com angular CLI.
	- ng g m cursos
- Diferença do mudulo de raiz e funcionabilidade
	- Nao tem Bootsttrap
	- tem os imports
	- temos que ter os formsMudles
	- diferença do modulo raiz para um módulo de funcionalidade
		- Nao importa o BrowserModule, mas sim o CommonModule
- ng g c cursos - Crio todos so componente.
- Foi declarado o nosso cursos.component dentro do nosso main, que nao é o que queremos.
	- Quero que cursosComponent faça parte do cursos.module.ts
	- Boa pratica, isolar o componente:
		````typescript
		import { NgModule } from '@angular/core';
		import { CommonModule } from '@angular/common';

		import { CursosComponent } from './cursos.component';
		````
- Extensão auto import
- Como fazer o cursos componente ser usado (visivel) pelo app component?
	````typescript
			@NgModule({
		  declarations: [
		    CursosComponent
		  ],
		  imports: [
		    CommonModule
		  ],
		  exports: [
		    CursosComponent
		  ]
		})
	````
	- Exports, dizemos o que vai ser visivel para ser utilizado por outras classes.
	- Vou dentro do appmodule e adiciono o CursosModule
	````typescript
		@NgModule({
		  declarations: [
		    AppComponent,
		    MeuPrimeiroComponent,
		    MeuPrimeiro2Component
		  ],
		  imports: [
		    BrowserModule,
		    AppRoutingModule,
		    CursosModule
		  ],
		  providers: [],
		  bootstrap: [AppComponent]
		})
	````
	- Com isto vemos tudo que é possível de ver
	- Colocamos também dentro de meu-primeiro2 
	
- ng g c cursos/cursos-detalhe - criar um novo componente
	- Adiciona dentro do cursos.modle, o componetnte que eu cabei de criar
	- Vamos ver somente dentro do cursos model, tipo um componente privado.
		- Assim ninguem vai ver este componente.
	- Assim temos um controle maior do que os modulos podem ver.



	