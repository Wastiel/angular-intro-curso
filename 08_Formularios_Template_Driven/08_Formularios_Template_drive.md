# Formulários (Template Driven) 

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

- [Vídeo Aula](https://youtu.be/9lmUpszp9Vo)
- Como aplicar CSS na validação dos campos
- Conseguimos submeter valor, pq nao temos controle.
- Angular trabalha com algumas classes
	- Vai aplicar algumas classes, dependendo do estado do controle

| Estado           | Sim         | Não           |
|------------------|-------------|---------------|
| Controle Visitado| ng-touched  | ng-untouched  |
| Valor Mudou      | ng-dirty    | ng-invalid    |
| Controle Válido  | ng-valid    | ng-invalid    |

- no campo e-mail, aplicou as seguintes classes.
	- ng-untouched, pq nao tocamos no campo
	- ng pristine, pq o valor nao mudou
	- ng valid, pq temos algum dado no mesmo
- Ao mudarmos o valor do campo, o angular entende e muda as classases do mesmo.
- Colcamos a seguinte lógica no nosso código fonte:
	````html
		<input type="text" class="form-control" name="name" 
            id="nome" placeholder="Nome" [(ngModel)]="usuario.nome" 
            required #nome>
        </div>
        <div>
            {{nome.className}}
        </div>
	````
	- Steamos uma variavel nosso input e depois mostramos a className da mesma em tela e temos o seguinte resultado, conforme o fluxo muda:
	- form-control ng-untouched ng-pristine ng-valid
- Dentro do nosso CSS, criamos uma regra para quando forem determinadas classes, 
	```css
	.ng-invalid.ng-touched:not(form){
    border: 1px solid red;
		}	
	```
- Com isto quando entramos no campo e não preenchemos nada e saimos do mesmo ele fica vermelho, gerando assim uma sinalização da obrigatoriedade do campo.

# 08. Forms (template driven) Mostrando mensagens de erro de validação

- [Vídeo Aula](https://youtu.be/dTL7SSoZ164)
- Divs com mensagens de erro para deixar mais amigavel para o nosso usuário
- Mostrar sinalizações
	- Tipo, o nome é obrigatório
	- email obrigatório
- Podemos utilizar as informações do controle do console, para deixar nossas mensagens de erro mais dinamicas
- Criamos uma lógica para fazer uma validação simples, mostrando se o campo não está preenchido, mostramos mostramos uma tag <p> se está preenchido não mostramos a tag <p>
	````html
        <div *ngIf="!nome.valid && nome.touched">
            <p>Nome é obrigatório</p>
        </div>
	````
- Podemos adicionar um CSS para sinalizar de melhor maneira o fluxo. 
- Utilizamos um alert para fazer o fluxo:
	````html
	  <div class="alert alert-danger" *ngIf="!nome.valid && nome.touched">
            <p>Nome é obrigatório</p>
        </div>
	````
- Podemos utilizar as funcionalidades dos alerts conforme necessidade para sinalizar erros
- Conseguimos utilizar varias formas de ajuste para o nosso formulário.
- Na proxima aula vamos ajustar para a não entrada de valores nulos.

# 09. Forms (template driven) Desabilitando o botão de submit para formulário inválido

- [Vídeo Aula](https://youtu.be/5c7qo26j728)
- Aprender a desabilitar o botao de submit caso os campos estejam inválidos.
- Para desabilitarmos é muito simples. Ajustamos o botão para o mesmo não enviar o form
	````html
	<button type="submit" class="btn btn-primary"
        [disabled]="!f.valid">Submit</button>
	````
- Setamos a propriedade [disabled]="!f.valid", para a variavel que é o form, assim o botão fica desabilitado.
- Somente é habilitado caso tenham os dados corretos para a utilização.

# 10. Forms (Dica): Verificando dados do Form no template com JSON

- [Vídeo Aula](https://youtu.be/wO2YgE3mQXg)
- Dica Desenvolvimento, para não ficarmos dependendo de cliarmos no botão submit
- Poderiamos deixar o botão disponivel, mas fica ruim clicar no botão de submit sempre.
- Vamos utilizar o pipe do angular como vimos anteriormente
- Podemos utilizar isto como uma especie de DEBUG.
- Vamos criar um componente novo
	- ng g c form-debug
- Configuramos este componente para apontar para o template-form.module.ts.
	- Ajustamos o app.module
	- Direcionamo o componente para o template-form.module
- Criamos uma variavl do tipo @input
	- @Input() form: any;
- Ajustamos o nosso form-debug.html com as seguintes informações
	````html
		<div style="margin-top: 20px " *ngIf="form" class="alert alert-info">
        <div>
            Detalhes do Form
        </div>
        <div style="margin-top: 10px;">
        <pre>
            Form válido: {{ form.valid }}
        </pre>
    	</div>
    	<div style="margin-top: 10px;">
        <pre>
            Form Submetido: {{ form.submitted }}
        </pre>
        </div>
        <div style="margin-top: 10px;">
        <pre>
            Form Valores: <br>{{ form.value | json}}
        </pre>
        </div>
	</div>

	````
- Esta div mostraria as seguintes informações:
	````html 
	Detalhes do Form
            Form válido: true
        
            Form Submetido: true
        
            Form Valores: 
	{
	  "name": "asddsa",
	  "email": "adsasdsad"
	}
	````
- Com isto temos um componente para ser usado como teste toda a vez que necessário.
- Podemos toda a vez que criarmos um novo projeto, criarmos o componente de debug.

# 11. Forms (template driven) Adicionando campos de endereço (form layout Bootstrap 3)

- [Vídeo Aula](https://youtu.be/YVIsoHN85t4)
- Adicionando campos de enderço.
- Vamos começar a colocar campos através de colunas
- Digitar um CEP, vamos consultar um webservice, onde vamos mandar o numero do CEP e teremos os dados do endereço colocados no campo.
- Vamos usar o sistema de grid's, para dividir a tela.
- Exemplo do formulário montado.
	````html
	<div class="container mt-4">
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" class="form-horizontal">
        <div class="form-group mb-3"
        [class.has-error]="!nome.valid && nome.touched"
        [class.has-feedback]="!nome.valid && nome.touched">

        <div class="col-sm-12">
            <label for="nome" class="form-label">Nome</label>
        </div>

        <div class="col-sm-12">                     
            <input type="text" class="form-control" name="name" 
            id="nome" placeholder="Nome" [(ngModel)]="usuario.nome" 
            required #nome="ngModel">
        </div>
        <div class="alert alert-danger " *ngIf="!nome.valid && nome.touched">
            <p>Nome é obrigatório</p>
        </div>
    </div>    
        <div class="form-group mb-3"
        [class.has-error]="!email.valid && email.touched"
        [class.has-feedback]="!email.valid && email.touched">
        <div class="col-sm-12">
            <label for="email" class="form-label">Email</label>
        </div>
        <div class="col-sm-12">
            <input type="email" class="form-control" name="email" 
            id="email" placeholder="nome@email.com" [(ngModel)]="usuario.email"
            required #email="ngModel">
        </div>

        <div class="alert alert-danger " *ngIf="!email.valid && email.touched">
            <p>Email Inválido.</p>
        </div>
    </div>

    <div class="form-group">
        <div class="col-md-3"
            [class.has-error]="!cep.valid && cep.touched"
            [class.has-feedback]="!cep.valid && cep.touched">
            <label for="cep" class="control-label">CEP</label>
            <input type="text" class="form-control" id="cep"
            name="cep" ngModel required #cep="ngModel">
            <div class="alert alert-danger " *ngIf="!cep.valid && cep.touched">
                <p>CEP é Obrigatório.</p>
            </div>            
        </div>
        <div class="col-md-3"
            [class.has-error]="!numero.valid && numero.touched"
            [class.has-feedback]="!numero.valid && numero.touched">
            <label for="numero" class="control-label">Número</label>
            <input type="text" class="form-control" id="numero"
            name="numero" ngModel required #numero="ngModel">
            <div class="alert alert-danger " *ngIf="!cep.valid && cep.touched">
                <p>Numero é Obrigatório.</p>
            </div>
        </div>
        <div class="col-md-6">
            <label for="complemento" class="control-label">Complemento</label>
            <input type="text" class="form-control" id="complemento"
            name="complemento" ngModel required #complemento="ngModel">
        </div>
    </div>
    <div class="form-group mb-3"
    [class.has-error]="!rua.valid && rua.touched"
    [class.has-feedback]="!rua.valid && rua.touched">

    <div class="col-sm-12">
        <label for="nome" class="form-label">Rua</label>
    </div>

    <div class="col-sm-12">                     
        <input type="text" class="form-control" name="rua" 
        id="rua" placeholder="Rua" [(ngModel)]="usuario.rua" 
        required #rua="ngModel" readonly>
    </div>
    <div class="alert alert-danger " *ngIf="!rua.valid && rua.touched">
        <p>Rua é obrigatório</p>
    </div>
</div> 

<div class="form-group">

    <div class="col-md-3"
    [class.has-error]="!bairro.valid && bairro.touched"
    [class.has-feedback]="!bairro.valid && bairro.touched">
    <label for="bairro" class="control-label">BAIRRO</label>
    <input type="text" class="form-control" id="bairro"
    name="bairro" ngModel required #bairro="ngModel">
    <div class="alert alert-danger " *ngIf="!bairro.valid && bairro.touched">
        <p>Bairro é Obrigatório.</p>
    </div> 
</div>
<div class="col-md-3"
    [class.has-error]="!cidade.valid && cidade.touched"
    [class.has-feedback]="!bairro.valid && cidade.touched">
    <label for="cidade" class="control-label">CIDADE</label>
    <input type="text" class="form-control" id="cidade"
    name="cidade" ngModel required #cidade="ngModel">
    <div class="alert alert-danger " *ngIf="!cidade.valid && cidade.touched">
        <p>Bairro é Obrigatório.</p>
    </div>
</div> 
<div class="col-md-3"
    [class.has-error]="!estado.valid && estado.touched"
    [class.has-feedback]="!estado.valid && estado.touched">
    <label for="bairro" class="control-label">ESTADO</label>
    <input type="text" class="form-control" id="Estado"
    name="estado" ngModel required #estado="ngModel">
    <div class="alert alert-danger " *ngIf="!estado.valid && estado.touched">
        <p>Bairro é Obrigatório.</p>
    </div>   
</div> 
</div>

    
        <button type="submit" class="btn btn-primary"
        [disabled]="!f.valid">Submit</button>

        <app-form-debug [form]="f"></app-form-debug>
    </form>
</div>


	````
- Para um formulário simples, a gente tem 160 linhas, muito grande
- Próxima aula vamos tentar refatorar este código HTML

# 12. Forms (template driven) Refatorando (simplificando) CSS e mensagens de erro

- [Vídeo Aula](https://youtu.be/FXrOR84Equ4)
- Refatorar o Template CSS e simplificar as mensagens de erro.
- O nosso formulário está começando a ficar muito grande. 
- Conseguimos simplificar o nosso código
	- Melhroar a manutenção
	- Mais fácil de adicionar campos ao nosso form.
- Primeiramente classe que nos retorna o css com configuração dos erros, dentro do nosso component
	````typeScript
		verificaValidTouched(campo: any){
	    return !campo.valid && campo.touched;

	  }

	  aplicaCssErro(campo: { valid: any; touched: any; }){

	    return {
	      'has-error': this.verificaValidTouched(campo),
	      'has-feedback': this.verificaValidTouched(campo),
	  }
	````
- Posterior retiramos algumas linhas de código e ajustamos a função:
	````typeScript
		<div class="form-group mb-3" [ngClass]="aplicaCssErro(nome)">  
	````
- Com isto agora, podemos chamar qualquer campo e setar o nosso CSS da maneira que acharmos melhor
- Posteriro conseguimos ajustar campos do nosso formulário com um padrão de campo
- Criamos o componenete:
	- ng g c campo-control-erro
- Adicionamos o componente criado ao model do template form.
- Retiramos do app.module para nao gerar erro.
- Dentro do componente, passamos o seguinte bloco de código:
	````html
		<div class="alert alert-danger " *ngIf="!nome.valid && nome.touched">
                <p>Nome é obrigatório</p>
            </div>
	````
- Posterior, fizemos o ajuste para se conversar com o componente e deixarmos o código mais organizado
	````typeScript
		@Input() mostraErro!: boolean;
  		@Input() msgErro!: string;

	````
- Agora ajustamos o nosso html
	````html
	        <app-campo-control-erro 
                [mostraErro]="verificaValidTouched(nome)" msgErro="Nome é obrigatório">
            </app-campo-control-erro>  
	````
	- Adicionamos o nosso componente genérico, recebendo parametros para mostra em tela as informações.
- É possivel utilizarmos o angular para criar métodos no nosso componente e deixar o nosso formulário mais limpo.

# 13. Forms (template driven) Form groups (agrupando dados)

- [Vídeo Aula](https://youtu.be/ZuQZBuGTIxc)
- Como agrupar campos do formulario em outro objeto.
- Temos um objeto endereço e podemos agrupar o mesmo, para ficar melhor organizado
- É bem simples de organizarmos. 
- Procramos os campos que queremos agrupar
- Colocamos a dirtiva conforme abaixo:
	````html
		<div ngModelGroup="endereco">
		</div>
	````
- Com isto separamos um gurpo de campos e criamos um obejeto de "Forms"


# 14. Forms (template driven) Pesquisando endereço automaticamente com CEP

- [Vídeo Aula](https://youtu.be/oLtdDwNcfoM)
- Vamos utilizar um webservice, pesquisar o endereço através de um CEP e popular os campos de forma automática.
- Quando digitarmos o CEP, o campo perder o foco, vamos pesquisar via web service os demais campos e posterior preencher os mesmos de forma automaticamente.
- Vamos utilizar para isto o via cep
	[Via CEP](https://viacep.com.br/)
- Ele trabalha com "json" ou "xml"
- Vamos trabalhar com json, mais facil de organizar os dados
- Se abrirmoso o exemplo abaixo, nos traz os dados das seguintes maneiras:
	- [Link da API](https://viacep.com.br/ws/01001000/json/)
	- Retorno
		````json
		{
		  "cep": "01001-000",
		  "logradouro": "Praça da Sé",
		  "complemento": "lado ímpar",
		  "bairro": "Sé",
		  "localidade": "São Paulo",
		  "uf": "SP",
		  "ibge": "3550308",
		  "gia": "1004",
		  "ddd": "11",
		  "siafi": "7107"
		}
		````
- Vamos utilizar jquery, por ser mais facil de entender
- [Exemplo jquery](https://viacep.com.br/exemplo/jquery/)
- Vamos utilizar o nosso template-form.component, para executar o procesos.
- Construimos uma função em javascript onblur, para quando o campo perder o foco ele chamar uma função consultaCEP
	````html
		<input type="text" class="form-control" id="cep" name="cep" ngModel required #cep="ngModel"
                (blur)="consultaCEP(cep.value)"
                >
	````
- Agora vamos começar a criar a determinada função.
- Criamos a função com a seguinte camada JavaScript
	````TypeScript
		consultaCEP(cep: any) {
	        console.log(cep);
	         //Nova variável "cep" somente com dígitos.
	         // Próprio CEP faz o replace dos digitos (CEP variavel)
	         cep = cep.replace(/\D/g, '');

	        //Verifica se campo cep possui valor informado.
	        if (cep != "") {

	          //Expressão regular para validar o CEP.
	          var validacep = /^[0-9]{8}$/;

	           //Valida o formato do CEP.
	           if(validacep.test(cep)){
	            this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => console.log(dados));                     
	           }
	        }
	      }
	````
- Fizemos uma chamada http, ara mostrar os valores via console log do determinado CEP que estamos buscando:
	````typeScript
		this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => console.log(dados));
	````
	- Retornando os seguintes dados:
		````json
			{
			  "cep": "01001-000",
			  "logradouro": "Praça da Sé",
			  "complemento": "lado ímpar",
			  "bairro": "Sé",
			  "localidade": "São Paulo",
			  "uf": "SP",
			  "ibge": "3550308",
			  "gia": "1004",
			  "ddd": "11",
			  "siafi": "7107"
			}
		````

# 15. Forms (template driven) Populando campos com setValue e patchValue (autocomplete CEP)

- [Vídeo Aula](https://youtu.be/6DxHNKzlqGQ)
- Popular os campos com a informação obtida na ultima aula
- Vamos ver a diferença do set value e get value.
- Vamos obter as informações e preencher os dados dos formularios.
- Vamos passar o formulário nas nossas funções.
- Criamos a função para preencher o formulário
	````typeScript
		populaDadosForm(dados: any,form: any){
        form.setValue({
          nome: form.value.nome,
          email: form.value.email,
          endereco: {
            rua: dados.logradouro,
            cep: dados.cep,
            numero: '',
            complemento: dados.complemento,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }
        });

      }
	````
	- Preenchemos os dados conforme retorno da chamada http que realizamos.
	- com a passada do form.value, setamos os valores em cada um dos campos.
- utilizar setvalue, tem um pequeno detalhe.
	- Quando colocamos os dados, o nome e o e-mail estão sendo populados.
- Formulário possui um pathvalue.
- Podemos utilizar o pathValue, para focar somente nos elementos necessários, sem trabalhar o formulário inteiro:
	````typeScript
		populaDadosForm(dados: any, form: any){
       
        form.form.patchValue({
          endereco: {
            rua: dados.logradouro,
            cep: dados.cep,           
            complemento: dados.complemento,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }

        })
        console.log(form);

      }
	````
- Criamos também uma função para resetar o formulário
	````typeScript
		resetaDadosForm(form: any){
        form.form.patchValue({
          endereco: {
            rua: null,
            complemento: null,
            bairro: null,
            cidade: null,
            estado: null
          }
        });
	````

# 16. Forms (template driven) Submetendo valores com HTTP POST

- [Vídeo Aula](https://youtu.be/26OzBOTc1hg)
- Submeter um formulário
- Emular envio de dados para o nosso servidor
- Em debug, conseguimos ver a proprideade value do nosso formulário, dentro a um objeto e é ela que vamos simular o envio.
- Transformamos os nossos dados em json para envio dos dados.
- Utilizamos a seguinte função:
	````typeScript
		onSubmit(form: any){

		    this.contador++;
		    console.log(form);    
		   

		    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
		      .subscribe(dados => {
		        console.log(dados);
		        form.form.reset();
		      });
		      
		    console.log(this.usuario);  
		    console.log(this.contador);  
		    

		  }
	````
	- Com isto conseguimos analisar no debug a aba rede e verificar o nosso json sendo enviado.
- HTTP vamos nos profundar em outros módulos
- [Serviço de testes HTTP](https://resttesttest.com/)
	- Este link é muito bom, pois podemos testar o envio de informações para o back end.


