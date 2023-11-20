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
