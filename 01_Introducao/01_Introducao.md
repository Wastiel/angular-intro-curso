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

## Ambiente de Desenvolvimento

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


