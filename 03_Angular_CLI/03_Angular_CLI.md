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

- [Vídeo Aula](https://youtu.be/TZDWgAfYYqo)
- Angular CLI e sua estruturação
	- Analisar todos os diretórios que o angular cria
- Vantagens Angular CLI?
	- Cria pasta com todos os arquivos
	- Cria Index, typescripts inicais, html, css (Componente)
	- Cria arquivos de testes.
	- Conseguimos utilizar serviço, NG's, componentes, etc'...
	- Esta criação ja olha para o style guide.
	- Projetos baseados NPM (Mesmo nao usando o node no servidor)
	- Coloca as dependencias de forma consistente e correta.
	- Preparado para colocarmos código de testes dentro do projeto
		- Jasmin
		- Protractor
		- karma
	- Incializa o código git
	- Foco rápido no desenvolvimento
	- Comandos para fazer o build da aplicação
	- embercli
		- Faz tudo para nós
		- Criação de diretórios
		- Imensidão de coisas que podemos fazer.
- Estrutura de diretórios do projeto
	- config: Diretório que contém configuração para deploy/build/ teste do projeto
	- dist: diretório onde é gerado o build da aplicação ignorado pelo git
	- e2e: diretório que contém os scripts para testes end-to-end
	- node_modules: diretório que contém os pacotes npm da app (package.json). Também ignorado pelo git
	- public: diretório genérico que contém um arquivo .npmignore
	- src: diretório do código fonte da aplicação. Contém código ts/js, css, imagens e templates HTML
	- angular-cli.json: arquivo que contém informações sobre o projeto e build de produção como nome do projetom config de onde encontrar os arquivos fontes da app, config de testes , etc.
	- tslint.json - arquivo que contém configurações para fazer lint da app.
- Dependencias x Dependencias
	- dependencies: Dependências necessárias para executar a aplicação
		- Tudo que precisamos para executar em produção
	- devDependencies: Depenêcias necessárias apra desenvolver a aplicação (Não necessárias após o build de produção)
		- Tudo que precisamos para desenvolver o projeto.
- Package.JSON
	- @angular/core: Pacote principal do angular 2. Contem decorators, metadados, componente, directive, injeção de dependencias, e hooks do ciclo de vida do component
	- @angular/common: Serviços, pipes e diretivas comuns fornecidas pelo time de dev do angular
	- @angular/compiler: Template de compilação do angular. Entende o código dos templates e converte em código que faz a app ser executada e renderizada. Desenvolvedores não interagem com esse pacote diretamente
	- @angular/plataform-browser: Contém todo o código relacionado ao DOM e ao browser, especialmente as partes que ajudam a renderizar o DOM. Esse pacote também contém o método ara fazer o bootstrap da aplicação para builds de produção que pré compila os templates.
	- @angular/plataform-browser-dynamic: contém os providers e o método para iniciar as aplicações que compilam templates no lado cliente. Não usa compilação offline. Usada para fazer bootstrap durante desenvolvimento e exempmlos plunker.
	- @angular/http: fornece o cliente HTTP.
	- @angular/router: classes de roteamento.
	- core-js: biblioteca que permite cmpatibilidade de engines JS antigas com a especificação do ES 2015, ou seja, emula as funcionalidades do ES 2015 (ES6) e ES 7em browsers que suportam somente ES5.
	- reflect-metadata - Dependência compartilhada entre o Angular e o compilador TS. Permite o uso de decorators no código (Tipo Anntations). Isso permite ao desenvolvedores fazer upgrade no TSm sem precisar de fazer upgrade no Angular. Esse é o motivo desta ser uma dependência da aplicação e nao do angular
	- rxjs: extensão para a especificação dos observables (programação assincrona). Reactive extensions for JavaScript.
	ts-helper: Bibliotcea auxiliar que permite otimização de código TS, quando o mesmo é compilado para ES 5.
	zone.js: Extensão (plugins) para tarefas assincronas, chamads de Zones
	- @types/jasmine: definição para jasmine para typescript 
	- @types/protractor: dfinição protractor para tpescript
	- angular-cli: ferramenta de linha de comando para gerenciar projetos angular
	- codleyzer: lint análise de código para angular 2.
	- jasmine-core: arquivos principais jasmine para node.js
	- jasmine-spec-reporter: relatóri em tempo real para BDD com jasmine
	- karma: ferramenta de testes que ria um web server e executa código de teste em cada um dos browsers conectados
	- Karma: Ferramenta de testes que cria um web server e executa um código de testes em cada um dos browsers
	- karma-chrome-launcher: launcher do karama para o chrome
	- karma-jasmine: adaptador para code coverage (relatório)
	- protractor: framework de teste end to end integração para angular
	- ts-node: módulo typescript para node.js
	- tslins: lint para typescript
	- typescrip: compulador typescript	
- Documentação é a melhor amiga do desenvolvedor, desenvolva o hábito de ler os DOCS
	- https://angular.io/docs



## 06. Angular CLI: Gerando build de produção

- [Vídeo Aula](https://youtu.be/U0zHj14mNrI)
- Build de produção
- Comandos para o build
	- ng build --target=development --enviroment=dev
	- ng build --dev --e=dev
	- ng build --dev
	- ng build
- Dentro do bild
	- Gera dentro do diretório DIST
	- Possui 3 arquivos
		- index.html
			- limpo
		- Inline
		- Polyfills
- Build de DEV
	- Todo o código junto, identado, com as variaveis e etc.
	- Possível utilizar para debug.
- Build Final
	- ng build --dev --e=dev
	- obfusca e minifica o código JS da aplicação
	- css e templates HTML ja minificados e incluídos em main.bundle.js
	- O index.html, nao minifica.
- Germaos o nosso ng build de desenvolvimento
	- ng build
	- Gerou alguns arquivos minizados
- INstalar um servidor http
	- npm install http-server -g
- BUild de produção
	- ng build --prd
	

## 07. Angular CLI: instalando bibliotecas (bootstrap, jquery, materialize, lodash)

- [Vídeo Aula](https://youtu.be/U0zHj14mNrI)
- Instalar bibliotecas externas nos projetos.
- Criamos um novo projeto
	- ng new angular-cli-libs-externas
### Bootstrap
	- ng add @ng-bootstrap/ng-bootstrap
	- package Json, temos a versão instalada
		````json
		 "dependencies": {
			"bootstrap": "^5.2.3",
		}
		````
	-  Dentro do caminho vemos os arquivos princiapis do bootstrap
		- node_modules/bootstrap/distr/css
	- jquery instalado, dependencia do bootstrap
	- tether
		- biblitca de meio de campo entre o jquery e a nossa aplicação.
	- Automaticamente o importou o bootstrap CSS na classe tyles.css 
- Por erros no processo a cima, eu mudei algumas questões e e refiz o processo de instalação
- npm install bootstrap@latest
	- Instalação do bootstrap
- npm install jquery@latest
	- instalação do jquery
- Ajustado o caminho do css dentro dos scritps dentro do angular.json
	-  "node_modules/jquery/dist/jquery.min.js",
  	- "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
 - Posterior o processo funcionou
 - Coloquei elementos do angular e o msmo funcionou.
 - https://www.npmjs.com/package/bootstrap
 ### Materialize
 	- npm install materialize-css -save
 	- npm install angular2-materialize --save
 	- npm install jquert@^2.2.4 --save
 	- Caso de erro no fonte, você pode importar o módulo do materialize, dentro do app.module.ts
 		- import { MaterializeModule } from 'angular2-materialize';
 		- imports:[MaterializeModule]

 ### Biblioteca Global
	- npm install --save lodash
	- Importação de tudo dentro do componente
		- import * as _ from 'lodash';
		- Faz a mesma cosia que o typings
	- npm install --save @types/lodash
- utilizamos a seguinte função
	- <p *ngFor="let item of list">{{ item }}</p>
	- através de um fluxo 
		- list = _.map([1,2,3], (n) => `# ${n}`);}
- Verificamos o fluxo de processo de 3 maneiras de utilizar libs externas no angular
 - Documentações
 	- https://www.npmjs.com/package/bootstrap
 	- https://www.npmjs.com/package/angular2-materialize
