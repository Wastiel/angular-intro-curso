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
- Instalar Angular
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
