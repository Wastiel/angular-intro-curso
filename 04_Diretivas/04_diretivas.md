# Diretivas

# 01. Introdução e tipos de diretivas no Angular

- [Vídeo Aula](https://youtu.be/rJNYm3-Tyns)
- Diretivas são a forma de passar instruções para o template
	- Nos dao bastante poder
	- Loop For
	````html
	<ul * ngFor="let curso of cursos"> 
		{{ curso }}
	</ul>
	````
	- O que este for está fazendo:
		- Itere todos os cursos e a cada iteração, atribua o valor do elemento atual a uma variavél curso. Replique também o elemento <li> com o valor da variável curso a cada iteração
- Componente também sao diretivas 
	- Diretivas com template
		````typescript
			template:
			<cursos-lista></li>cursos-lista>
		````
	- Crie um componente do Tipo (classe) especificado e renderize a view templlate desse componente nesse lugar
- Dois tipos de diretivas
	- Estruturais
		- utilizadas para modificar o DOOM e o codigo html dentro do template
			````typescript
			*ngfor
			* nfIf
			`````
	- Atributo
		- Interagem com o elemento em que foram aplicadas
			````typescript
			ng-class
			ng-style
			````
		- Modificar a clase e um estilo em css
- 



# 02. Diretivas: ngIf

- [Vídeo Aula](https://youtu.be/7zJNIp44B60)
	- Condicional ngIf para utilizarmos dentro do template
	- Ela é um "se" no template
	````typescript

	var (cursos.length > 0){
		// alguma lógica de programação
	}else{
		// Alguma outra lógica de programação
	}
	````

- Criei um projeto novo
	- ng new Aula_04_diretivas
	- ng add @ng-bootstrap/ng-bootstrap
	- npm install jquery@latest
	- Ajustamos o arquivo angular.json, dentro das tag's script
		- "node_modules/jquery/dist/jquery.min.js",
  		- "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
- Criamos o componente ngif
	- ng g c diretiva-ngif 
- Toda a vez que criamos o componente com os comandos, dentro do app.moudle ja é setado para a utilização.
- A nossa ideia é mostrar cursos, se a variavel cursos estiver preenchida, caso contrario, não faça nada.
	````typescript
		cursos: String[] = [];
	````
	````html
	<h5>*ngIf</h5>
	<div>
	    Lista de cursos aqui.
	</div>
	````
- Criamos uma div com o regramento
	````html
	<div *ngIf="cursos.length > 0">
    Lista de cursos aqui.
	</div>
	<div *ngIf="cursos.length == 0">
	    Não existem crusos para serem listados
	</div>

	````
	- Isto não mostra a frase Lista de Cursos aqui
	- Acima temos tipo um fluxo de if e else, com dois IF's
- Criamos um botao para mudar o nosso elemento html
	- Criamos algumas variaveis e uma função para ajustar o evento conforme botao
		````typescript
			 cursos: String[] = ["Angular2"];

			  mostrarCursos: boolean = false;

			  constructor(){}

			  ngOnInit(){}

			  onMostrarCursos(){
			    this.mostrarCursos = !this.mostrarCursos;
			  }
		````
	- Criamos uma lógica no html
		````html
		<div *ngIf="cursos.length == 0">
    	Não existem crusos para serem listados
		</div>

		<div *ngIf="mostrarCursos">
		    Lista de cursos aqui.
		</div>
		<div *ngIf="!mostrarCursos">
		    Não existem crusos para serem listados
		</div>

		<br>

		<button (click)="onMostrarCursos()">Mostrar ou esconder cursos</button>

		````
		- Nesta lógica do click, ao clicarmos o elemento é comentado ao clicarmos novamente o elemento é descomentado, assim dando a impressãod e aparecer e desaparecer.
		- Toda a arver dom, vai ser criada e estanciada. E destruido conforme regra
			- Cuidado ao usar o ngif, pois pode ser custoso em processamento.
- Para solução, iremos usar o hidden
	````html
	<button (click)="onMostrarCursos()">Mostrar ou esconder cursos</button>

		<h5>Hidden como alternativa</h5>
		<div [hidden]="!mostrarCursos">
		    Lista de cursos aqui.
		</div>
		<div [hidden]="mostrarCursos">
		    Não existem crusos para serem listados
		</div>
	````
- Quando utilizamos um ou outro?
	- [hidden]
		- Recomendado para arvore de elementos pequenas
		- Não recomendado para fluxo de segurança
	- :* ngIf
		- Recomendado para árvores de elementos grandes
		- Recomendado para fluxo de segurança

- Usei o ng lint de curiosidade no meu projeto e fiz alguns ajustes que foram solicitados
	- === ao invés de ==
	- sem construtores e metodos em branco
	- variavel inicializada com um tipo, não definido o tipo de variavel
		- Tipo String == 'teste', seria so tipo = teste;


# 03. Diretivas: ngSwitch, ngSwitchCase e ngSwitchDefault

- [Vídeo Aula](https://youtu.be/uToE2t9RHME)
- Switch na programação
	- Temos uma variavel
	- Buscamos os valores até uma possivel parada.
	- Caso não seja algum determinado valor, executamos o que está dentro do default
	- Exemplo:
		````java
			var viewMode = 'mapa';
			switch (viewMode){
			case 'mapa': //logica
				break;
			case 'lista': //logica
				break;
			default: //logica padrao
			}
		````
- Muito parecido, temos as difertivas:
	ng-Switch e ngSwitchCas
- Criamos o componente
	- ng g c diretica-ngswitch
	- adicionamos o seletor no nosso app.component
	- Criamos uma variavel aba, com um determinado valor.
	- mudamos alguns elementos, conforme fluxo de tela
	- exemplo do fonte:
		````html
			<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
		    <div class="nav navbar-nav">       
		        <a class="nav-item nav-link" 
		            [class.active]="aba === 'home'"
		            (click)="aba = 'home'">Home</a>                   
		        <a class="nav-item nav-link" 
		            [class.active]="aba === 'mapa'"
		            (click)="aba = 'mapa'">Mapa</a>            
		        <a class="nav-item nav-link" 
		            [class.active]="aba === 'lista'"
		            (click)="aba = 'lista'">Lista</a>
		      </div>    
		</nav>


		<div class="container" [ngSwitch]="aba">
		    <p *ngSwitchCase="'mapa'">Modo Mapa Ativado</p>
		    <p *ngSwitchCase="'lista'">Modo Lista Ativado</p>
		    <p *ngSwitchDefault="'lista'">Home</p>
		</div>

		<p>Mostrando o valor de Aba agora: {{ aba }}</p>
		````

# 04. Diretivas: ngFor

- [Vídeo Aula](https://youtu.be/seEbP5FGcvo)
- Permite  que a gente itere um array. 
	- Simuilar a um loop for que usamos em programação
		````java
			for(let i = 0; i< cursos.length; i++){
				let curso = cursos[i];
			}
		````
- Criamos um componente ngfor
	- ng g c diretiva-ngfor	
- declarar variavel no for, tem que ser com o let
- Conseguimos declarar um index
- Criamos um array no nosso componente TS
- Posterior criamos o for:
	````html
		<ul>
		    <li *ngFor="let curso of cursos, let i = index">
		    {{ i }} {{ curso }}
		    </li>
		</ul>

		<ul>
		    <li *ngFor="let curso of cursos">
		    {{ curso }}
		    </li>
		</ul>
	````
- Acima estão duas maneiras de usar o for, uma focando no for simplificado e outra usando um contador. 

# 05. Diretivas: sobre o * e template

- [Vídeo Aula](https://youtu.be/e-OGZocglTA)
- Vamos aprender, pq utilizamos o * antes dos comandos base, ngfor, ngswitch, ngif
- Também sobre templates
- Vamos nos basear na diretiva ngif
- Sintaxe do * é um atalho para um template.
- O angular cria um template (ng-template)
- ngIf
	````html
		<ng-template [ngIf]="mostrarCursos">
    		<div>Lista de cursos aqui.</div>
		</ng-template>	
	````
- ngFor
	````html		
			<ul>
			    <ng-template ngFor [ngForOf]= "cursos" let-curso let-i = "index">
			    <li >
			    {{ i+1 }} {{ curso }}
			    </li>
			    </ng-template>
			</ul>
	````
- ngSwitch
	````html
		<h5>Removendo o * e usando o template</h5>

		<div class="container" [ngSwitch]="aba">
		    <ng-template [ngSwitchCase]="'mapa'">
		        <p>Mapa</p>
		    </ng-template>
		    <ng-template [ngSwitchCase]="'lista'">
		        <p>Lista</p>
		    </ng-template>
		    <ng-template [ngSwitchCase]="'home'" NgSwitchDefault>
		        <p>Home</p>
		    </ng-template>  
		</div>
	````

# 06. Diretivas: ngClass

- [Vídeo Aula](https://youtu.be/DCFJZzFwDKs)
- Criamos o componente
	- ng g c diretiva-ngclass
- Exemplo de clicar em um icone
	- tipo Coração do instagram
- Exemplo usando e não usando ngclass
	````html
		<!--Sem usar ngClass-->
		<h1>
		    <i class="bi"
		      [class.bi-star]="!meuFavorito"
		      [class.bi-star-fill]="meuFavorito"
		  
		      (click)="onClick()"
		    ></i>
		  </h1>
		  
		  
		  
		  <!--Usando ngClass-->
		  <h1>
		    <i class="bi"
		      [ngClass]="{
		        'bi-star': !meuFavorito,
		        'bi-star-fill': meuFavorito
		      }"
		  
		      (click)="onClick()"
		    ></i>
		  </h1>
	````

# 07. Diretivas: ngStyle

- [vídeo Aula](https://youtu.be/WBf5sgByOY4)
# 08. Operador Elvis
# 09. ng-content
# 10. Criando uma diretiva de atributo: ElementRef e Renderer
# 11. Diretivas: HostListener e HostBinding
# 12. Diretivas: Input e Property Binding
# 13. Criando uma diretiva de estrutura (ngElse)


