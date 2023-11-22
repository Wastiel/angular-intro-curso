# Angular CLI

## 01. Angular CLI: Instalação e criação de projetos: ng new e ng serve

- [Vídeo Aula](https://youtu.be/RlfOhrhPh_Y)
- Introdução CLI
	- Ferramenta de linha de comando
	- Criar Builds
	- Criar Projetos
	- Instalar
- Para instalarmos o angular CLI, precisamos ter o node para realizar a instalação
	- Executamos o seguinte comando no console: npm intall -g angular-cli
	- requer node >=4
- Documentação do Angular CLI
	- https://github.com/angular/angular-cli
	- Proejto open source
- Novo projeto
	- ng new nome-projeto
	- Nao podemos criar nomes de projetos comecando com numero.
	- Cria toda a estrutura do projeto
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

## 02. Angular CLI: Criando components, services: ng generate

- [Vídeo Aula](https://youtu.be/8x-5Q2YzvuE)
- Criar componentes
- Criar Servicos
- Criar pipes
- Criar componente
	- ng generate component meu-primeiro
	- ng g component meu-primeiro
- ng g component diretiva-ngif
- Criar Serviço
	- ng g service diretiva-ngif/diretiva-ngif
	- Temos que apontar a qual diretório a mesma pertence, para não criar em separado no projeto.
- Componente
	- Cria os seguintes arquivos
		- .css
		- .html
		- .espec.ts
		- .ts
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

## 03. Angular CLI: Usando pré-processadores (Sass, Less, Stylus)

- [Vídeo Aula](https://youtu.be/Z0umP8p2aW8)
- Utilizar um pré processador de CSS
- Tem suporte para três pré-processadores de CSS
	- SASS
	- LESS
	- STYLUS
- Em versões mais novas, o angular ja traz a opção de escolha na criação do projeto
- Comandos para cada estilo 
	- ng new meu-projeto --style=sass
	- ng new meu-projeto --style=less
	- ng new meu-projeto --style=stylus
- Comandos para cada estilo dentro do projeto.
	- ng new meu-projeto --style=sass
	- ng new meu-projeto --style=less
	- ng new meu-projeto --style=stylus
- Projeto existente
	- ng config schematics.@schematics/angular:component.style scss
	- ng config schematics.@schematics/angular:component.style less
	- ng config schematics.@schematics/angular:component.style styl 

## 04. Angular CLI: ng lint, ng test, ng e2e

- Introdução aos comandos:
	- ng lint
		- Tipo um sonar, focado em arrumar o codigo conforme style guide
	- ng test
		- testes uniatrios
	- ng e2e
		- 
- ng lint
	- na minha priemira execução, pediu para eu instalar o ng lint como pacote
	- Executei o seguinte comando para o angular para minha versão
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
- ng test
	- Jasmine
		- Teste orientado a comportamento
		- [documentação](https://jasmine.github.io/)
	- Mostra erros, conforme 
- ng e2e
	- Testes de integração
	- end to end.
	- Não vimos muitas coisas.


## 05. Angular CLI: Estrutura do projeto

## 06. Angular CLI: Gerando build de produção

## 07. Angular CLI: instalando bibliotecas (bootstrap, jquery, materialize, lodash)


Fazer com form group e form control. 

- ng new Aula_04_Diretivas
- ng g component diretiva-ngif
- ng g service diretiva-ngif/diretiva-ngif
- ng config schematics.@schematics/angular:component.style scss
- ng add @angular-eslint/schematics@16
 constructor() {
        // do nothing.
    }

    foo() {
        // do nothing.
    }