# Rotas

# 01. Formulários (template vs data / reativo) Introdução

- [Vídeo Aula](https://youtu.be/TevqIDM7aY8)
- Formulários da Api do Angular
- Pequena introdução
	- Template Driven
	- Data Driven
- Entender as diferenças
	- Template 
	- Data Driven
- Template Driven
	- Formulário é criado e configurado no HTML
	- Validações no template do HTML
	- HTML tem varios etributos para fazer validações do form
		- Campo obrigatorio
		- Tamanho minimo
		- Tamanho maximo 
		- etc
	- Validações no próprio template.	
	- Angular tem controles internos
		- FormGroup
	- Conseguimos gerenciar no HTML com o angular
	- Submit no form com o NgSubmit
	- Variavel local com referencia de formulário
- Data Driven (Formulário Reativo)
	- Formulário é criado e configurado no componente
	- Continuamos com o HTML
		- Fica apenas a extrutura básica
	- Fica no próprio componente
	- Validações no próprio componente
	- Referencia para associar as informações no nosso HTML
	- Formulário Reativo
	- Controles dentro do próprio componente
	- Objeto dentro do próprio componente
	- Podemos utilizar o evento de click
	- Podemos utilizar o NgSubmit também.
- As duas formas podemos utilizar no seu projeto.

- De acordo com o GPT, o mais indicado:
	- Boas práticas:
		- Em muitos casos, a preferência está se movendo em direção aos formulários reativos, especialmente para aplicativos complexos ou de grande escala.
		- Para formulários mais simples, ou quando a simplicidade e a rapidez de implementação são mais importantes, os formulários baseados em template-driven ainda são uma escolha válida.


# 02. Formulários – Criando o projeto inicial com Bootstrap 3

- [Vídeo Aula](https://youtu.be/j7OZGu3hlQ0)
- Projeto incial para podermos trabalhar com formulários
- Instalar o BootStrap
- Novo projeto:
	- ng new forms
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
	- Exemplo de código para testes:
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
- Criei mainha navbar, com algumas adaptações
	````html
		<nav class="navbar navbar-dark bg-dark navbar-expand-lg">
		  <div class="container-fluid d-flex justify-content-start">
		    <span class="btn border-success border-2" > 
		    <a class="navbar-brand" href="#">Home</a>
		    </span>
		    <p>--</p>
		    <ul class="navbar-nav">
		      <span class="border border-2 rounded-pill border-success" >      
		      <li class="nav-item">
		        <a class="nav-link " routerLink="/templateForm">Form - template Driven</a>
		      </li>      
		    </span>
		    <p>--</p>
		      <span class="border border-2 rounded-pill border-success" >
		      <li class="nav-item">
		        <a class="nav-link " routerLink="/dataForm">Form - Data Driven</a>        
		      </li>
		    </span>          
		    </ul>
		  </div>
		</nav>
		<div class="container">
		  <router-outlet></router-outlet>
		</div>

	````
- Agora vamos criar os dois componentes
	- Form - Template Driven
		- ng g c template-driven
	- Form - Data Driven
		- ng g c data-driven
- Criamos as rotas:
	````typeScript
		const routes: Routes = [
		 { path: 'templateForm', component: TemplateFormComponent },
		 { path: 'dataForm', component: DataFormComponent },
		 { path: '', pathMatch: 'full', redirectTo: 'templateForm' },
		 
		];	
	````
	- Fizemos a configuração das rotas, inclusive do form
- Vamos começar trabalhando com o form template-form
- Criamos a div form group para configurar nosso formulário
	- Usamos o alias: div.form-group
	- isto: div.form-group
	- Vai gerar isto: <div class="form-group"></div>
- Ajustamos o formulário da seguinte maneira:
	````html
		<div class="container mt-4">
		    <form>
		        <div class="form-group mb-3">
		            <label for="nome" class="form-label">Nome</label>
		            <input type="text" class="form-control" id="nome" placeholder="Nome">
		        </div>

		        <div class="form-group mb-3">
		            <label for="email" class="form-label">Email</label>
		            <input type="email" class="form-control" id="email" placeholder="nome@email.com">
		        </div>

		        <button type="submit" class="btn btn-primary">Submit</button>
		    </form>
		</div>

	````
- 

# 03. Forms (template driven) Controles ngForm, ngSubmit e ngModel

- [Vídeo Aula](https://youtu.be/x07zc2UqSuU)
- Formulários no estilo template-driven
- Associar os campos do formulário aos valores de formulário do angular.
- Como solicitar ao angular nos ajudar neste formulário.
- Vamos criar uma varivael para o angular entender e nos ajudar com este formulário
- Primeiro vamos criar uma variavel.
	- Para criar uma variavel fazemos da seguinte maneira:
	- <form #f>
	- Agora vamos associado a variavel a uma diretiva do angular
		- <form #f="ngForm">
	- Com isto o angular entende que queremos ajudar para gerenciar este formulário
- ngform, ngsubmit, ngmodel, pertencem ao FormsModule.
- Caso tenha um módulo especifico, tem que importar o FormsModule, no módulo no qual estamos trabalhando.
- Criamos um form com o envio via submit.
	````html
		 <form #f="ngForm" (ngSubmit)="onSubmit(f)">
	````
	- Ajustmaos a função onSubmit no nosso componente, para termos certeza que a mesma está funcionando
		````typeScript
			onSubmit(form: any){
			    console.log(form);    
			  }
		````
- Posterior precisamos construir uma validação de campos e dos valores.
- Para isto precisamos vincular a diretiva do ngModel.
	````html
		    <form #f="ngForm" (ngSubmit)="onSubmit(f)">
		        <div class="form-group mb-3">
		            <label for="nome" class="form-label">Nome</label>
		            <input type="text" class="form-control" name="name" id="nome" placeholder="Nome" ngModel>
		        </div>

		        <div class="form-group mb-3">
		            <label for="email" class="form-label">Email</label>
		            <input type="email" class="form-control" name="email" id="email" placeholder="nome@email.com" ngModel>
		        </div>

		        <button type="submit" class="btn btn-primary">Submit</button>
		    </form>
	````

# 04. Forms (template driven) Inicializando valores com ngModel (two-way data-binding)

- [Vídeo Aula](https://youtu.be/TzTSnEwGG6Q)
- Atualmente temos os 3 ng's em utilização no nosso form
	- ngForm
		- <form #f="ngForm" (ngSubmit)="onSubmit(f)">
	- ngSubmit
		- <form #f="ngForm" (ngSubmit)="onSubmit(f)">
	- ngModel
		- <input type="text" class="form-control" name="name" id="nome" placeholder="Nome" ngModel>

- Para podermos associado o ngModel ao nosso formulário, colocamos a propriedade name no nosso formulário.
- Queremos iniciar os vlores e agora?
- Primeiramente fizemos um ajuste simples e ciramos o nosso objeto usuário
	````typeScript
		  usuario: any = {
		    nome: 'Loiane',
		    email: 'loiane@email.com'
		  }
	````
- Para comunincação, vamos utilizar o to-ay data binding [(Banana na caixa)], algo que aprendemos no inicio do curso.
	- Configuramos os dados da seguinte maneira:
		- <input type="text" class="form-control" name="name" id="nome" placeholder="Nome" [(ngModel)]="usuario.nome">
		- [(ngModel)]="usuario.nome"
- Caso necessite somente inicializar o valor, utilize somente o Property binding
	- <input type="text" class="form-control" name="name" 
            id="nome" placeholder="Nome" [ngModel]="usuario.nome">


# 05. Forms (template driven) Módulos e FormsModule

- [Vídeo Aula](https://youtu.be/9z47wkaaqmc)
- Continuamos aprendendo com Formulários estilo template driven
- Quando inicia o projeot, está tudo dentro do appModel, nao temos porblema com a não mportação do FormsModule.
- Caso trabalhemos com o lazy mode, precisamos importr o FormsModule.
- Vamos criar o módulo do template-form, para simular os erros
	- ng g m template-form
- Criamos o módulo, porém temos 3 problemas
	- Temos que vincular o nosso componente criado ao módulo
	- Temos que colocar o FormsModule
		````typeScript
			@NgModule({
			  declarations: [
			    TemplateFormComponent
			  ],
			  imports: [
			    CommonModule,
			    FormsModule
			  ]
			})
		````
	- Temos que vincular o nosso componente ao app.module
		````typeScript
		@NgModule({
			imports: [
    			...
    			TemplateFormModule
		})
			  
			
		````
- importante ter o FormsModule importado.

# 06. Forms (template driven) Aplicando validação nos campos

- [Vídeo Aula](https://youtu.be/9mSl652fDPs)
- Validações do angular e do HTMl 5.
- [Documentação Angular](https://angular.io/)
	- Podemos olhar os tipos de validações do angular
- Required
	- Campo Obrigatório.
- email
	- Pattern de e-mail
- Link com introdução aos html validation
	- https://www.the-art-of-web.com/html/html5-form-validation/


# 07. Forms (template driven) Aplicando CSS na validação dos campos

# 08. Forms (template driven) Mostrando mensagens de erro de validação

# 09. Forms (template driven) Desabilitando o botão de submit para formulário inválido

# 10. Forms (Dica): Verificando dados do Form no template com JSON

# 11. Forms (template driven) Adicionando campos de endereço (form layout Bootstrap 3)

# 12. Forms (template driven) Refatorando (simplificando) CSS e mensagens de erro

# 13. Forms (template driven) Form groups (agrupando dados)

# 14. Forms (template driven) Pesquisando endereço automaticamente com CEP

# 15. Forms (template driven) Populando campos com setValue e patchValue (autocomplete CEP)

# 16. Forms (template driven) Submetendo valores com HTTP POST