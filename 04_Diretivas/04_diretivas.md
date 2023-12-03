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
- Dicas de como instalar o bootstrap
	- npm install --save bootstrap-icons
	- Adicionem em src/styles.css: @import '~bootstrap-icons/font/bootstrap-icons.css'

# 07. Diretivas: ngStyle

- [vídeo Aula](https://youtu.be/WBf5sgByOY4)
- Diretiva Estrutural, parecida com a ngClass
- Criamos o componente
	- ng g c diretiva-ngclass
- Fizemos uma classe para pegar e alter os atributos como cores e fundo de um botão.
- Também adicionamos um campo texto onde ao alterarmos o valor número o erro acabe ocorrendo. 
- Antes de continuarmos, para utilizarmos o ngModel, temos que realizar os passos abaixo:
	- Dentro do app.module
		- import { FormsModule } from '@angular/forms';
		- @NgModule{
			FormsModule
		}
- 

- A ideia de aplicar o stylo diretamente no botao.
	````html
		<h5>Styles com property binding (style binding)</h5>
		<button
		  [style.backgroundColor]="ativo ? 'blue' : 'gray'"
		  [style.color]="ativo ? 'gray' : 'green'"
		  [style.fontWeight]="ativo ? 'bold' : 'normal'"
		  [style.fontSize]="tamanhoFonte + 'px'"
		  (click)="mudarAtivo()"
		>
		Mudar atributo 'ativo'
		</button>
		<br>
		<input type="text" [(ngModel)]="tamanhoFonte">	
	````
- ngstyle entra para melhorar a maneira de aplicar o stilo
	````html
		<h5>Styles com diretiva ngStyle</h5>
		<button
		  [ngStyle]="{
		    'backgroundColor': (ativo ? 'blue' : 'gray'),
		    'color': (ativo ? 'white' : 'black'),
		    'fontWeight': (ativo ? 'bold' : 'normal'),
		    'fontSize': tamanhoFonte + 'px'
		  }"
		  (click)="mudarAtivo()"
		>
		Mudar atributo 'ativo'
		</button>
	````
	- É uma alternativa diferente, neste estilo, ficando mais legivel nos vairos estilos.
- Pode utilizar o que achar melhor.

# 08. Operador Elvis

- [Vídeo Aula](https://youtu.be/z2GUOnkGCdc)
- Maneira de fazer uma navegação segura entre objetos
	- ng g c operador-elvis
- Nao pode ler um valor de um objetuo null
	- Como resolver um problem neste sentido
- Na aula o exemplo executado não deu muito certo. Vou ter que buscar mais conhecimento sobre o operador elvis.


# 09. ng-content
- [Vídeo Aula](https://youtu.be/fud-ezN6RJo)
- Utilizar o ngContent
- Criar o componente
	- ng g c exemplo-ng-content
- A ideia é abrir um componente dentro de outro compmponente.
- Com estes seletores, conseguimos colocar de forma mais precisa onde os mesmos vão aparecer.
	- app.component
	````html
	
	<app-exemplo-ng-content>
		    Conteúdo passado para o componente.
		    <app-operador-elvis></app-operador-elvis>
		</app-exemplo-ng-content>

		<app-exemplo-ng-content>
		    <div class="titulo">Título do Painel</div>
		    <div class="corpo">
		        Conteúdo passado para o componente.
		    </div>
		    <div class="corpo">
		        Conteúdo passado para o componente 2.
		    </div>
		</app-exemplo-ng-content>

	````
	- exemplo-ng-content
	````html		
		<div class="panel panel-default">
		    <div class="panel-heading">
		      <ng-content select=".titulo"></ng-content>
		    </div>
		    <div class="panel-body">
		      <ng-content select=".corpo"></ng-content>
		    </div>
		  </div>
	````
- Seletores iguais, o angular concatena.

# 10. Criando uma diretiva de atributo: ElementRef e Renderer

- [Vídeo Aula](https://youtu.be/fud-ezN6RJo)
- Atributos customizadas
- ElementRef
	- Referencia do DOM
- Render
	-  Manipulação no DOM
- Vamos criar uma diretiva.
	- Componente sem template.
- Dois tipos de diretivas
	- Diretivas estruturais
		- ngFor, NgIF, nGSwitch
	- Diretivas de atributos
		- ngClass, ngStyle
- Comando para criar a diretiva
	- ng g d shared/fundo-amarelo
- Diretiva vai ser compartilhada por toda a plicação
	- diretorio shared é compartilhado por toda a plicação. Criamos la dentro.
- Seletor como conchetes
	````typeScript
		@Directive({
	  		selector: '[appFundoAmarelo]'
		})
	````
- Criamos também um componente para podermos continuar com o exemplo
	- ng g c diretiva-customizada
- Colocamos os pingos nos i's
	- componente no app.componente.html
	- E identificamos o mesmo para sabermos o que fazer
- Pelo Inspecionar, conseguimos ver que o fundo amarelo está dentro da diretiva.
- Para realizarmos esta modificaçãoe deixarmos o fundo amarelo, poderiamos faze assim:
	````html
		<p fundoAmarelo style="background-color: yellow;">
		    Texto com fundo amarelo
		</p>
	````
	- Mas a idéia é utilizarmos via diretiva

- A propriedade para acesssarmos
	- nativeElement
	- O Chrome da o caminho para setarmos
		- .nativeElement.style.backgroundColor
	- Sempre que nao souber o que quer modificar. 
		- Faz o console log para descobrir
	- Setmaos conforme abaixo, para ajustar o texto
		````typescript
			/* eslint-disable @angular-eslint/directive-selector */
			/* eslint-disable @typescript-eslint/no-empty-function */
			import { Directive, ElementRef } from '@angular/core';

			@Directive({
			  selector: '[fundoAmarelo]'
			})
			export class FundoAmareloDirective {

			  constructor(private _elementRef:ElementRef) {
			    console.log(this._elementRef);
			    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
			   }

			}

		````
- Podemos colocar em um botão amarelo
	````html
		<p fundoAmarelo>
		    Texto com fundo amarelo
		</p>

		<button fundoAmarelo> Botao com fundo amarelo</button>
	````
- Se quisermos aplicar somente a uma tag
	- Seguimos o exemplo abaixo, setando somente no paragrafo
		````typeScript
			/* eslint-disable @angular-eslint/directive-selector */
			/* eslint-disable @typescript-eslint/no-empty-function */
			import { Directive, ElementRef } from '@angular/core';

			@Directive({
			  selector: 'p[fundoAmarelo]'
			})
			export class FundoAmareloDirective {

			  constructor(private _elementRef:ElementRef) {
			    console.log(this._elementRef);
			    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
			   }

			}

		````
		- Colocamos na frente do seletor
		````typeScript
			@Directive({
  			selector: 'button[fundoAmarelo]'
			})
		````
- Na documentação, não é recomendado que façamos o acesso direto, assim gerando a possíbilidade ataques crossScript
	````export class FundoAmareloDirective {
		  constructor(private _elementRef:ElementRef) {
		    //console.log(this._elementRef);
		    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
		   }
	````
- O correto é utilizar o Renderer, renderizador
	- Responsavel por modificar o Dom
	- Abaixo, como ficaria a o código com o Renderer
		````typeScript
		import { Directive, ElementRef, Renderer2 } from '@angular/core';
		@Directive({
		  selector: '[fundoAmarelo]'
		})
		export class FundoAmareloDirective {

		  constructor(private _elementRef:ElementRef,
		    private _renderer:Renderer2,
		    ) {
		    //console.log(this._elementRef);
		    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
		    this._renderer.setStyle(_elementRef.nativeElement, 'background-color', 'yellow');
		   }

		}
		````
		- Na forma de uso, vemos que usamos o renderere, para então setarmos o stylo na propriedade
			````typeScript
				(_elementRef.nativeElement, 'background-color', 'yellow')
			````
		- Analisando, são 3 elementos
- O render é o formato seguro para a utilização. 


# 11. Diretivas: HostListener e HostBinding

- [Vídeo Aula](https://youtu.be/PUxHzEUDVG4)
- Diretivas customizadas
	- HostListener 
	- HostBinding
- Criamos a diretiva
	- ng g d shared/highligth-mouse
- Dica: Nome parecido com diretiva, fica mais facil de trabalharmos com ele e encontrarmos ele.
- Escutar um evento dentro da diretiva
	- Com o HostListner
	- Ele é um Metadado
- Criamos um metadado para escutar o evento e fazer algo, conforme a ação.
- Criamos o seguinte exemplo de código para o determinado funcionamento:
	````typeScript
	import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

		@Directive({
		  selector: '[highligthMouse]'
		})
		export class HighligthMouseDirective {

		  @HostListener('mouseenter') onMouseOver(){
		    this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'yellow');
		  }

		  @HostListener('mouseleave') onMouseLeave(){
		    this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'white');
		  }

		  constructor(private _ElementRef: ElementRef,
		    private _renderer: Renderer2
		    ) { }

		}
	````
	- No código a cima, criamos duas hostlistner, para ouvir o que vai ocorrer com determinada ação.
		- Ação de passar o mouse por cima
			- Fundo fica amarelo
		- Ação de passar o mouse por baixo
			- Fundo fica branco
- Existe um método melhor de fazer o que propomos na parte anterior
	- HostBinding
	- Permite que façamos a ligação a associação de um atributo para um atributo do nosso elmeento html
	- Criamos da seguinte maneira:
		````typeScript
			import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

			@Directive({
			  selector: '[highligthMouse]'
			})
			export class HighligthMouseDirective {

			  @HostListener('mouseenter') onMouseOver(){
			    //this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'yellow');
			    this.backgroundColor = 'yellow';
			  }

			  @HostListener('mouseleave') onMouseLeave(){
			    //this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'white');
			    this.backgroundColor = 'white';
			  }

			  @HostBinding('style.backgroundColor')
			  backgroundColor!: string;

			  constructor(
			    
			    //private _ElementRef: ElementRef,
			    //private _renderer: Renderer2
			    ) { }

			}
		````
	- Temos dois funcionamentos diferentes que fazem a mesma coisa. Porém o código fica mais organizado.
- HostListener
	- Escutando o evento no hospedeiro da diretiva
- HostBinding
	- Permite que façamos no binding a associação do atributo em uma classedo html ou uma variavel
- Podemos utilizar também os métodos setColor e getColor
	````typeScript
		/* eslint-disable @typescript-eslint/no-empty-function */
		/* eslint-disable @angular-eslint/directive-selector */
		import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

		@Directive({
		  selector: '[highligthMouse]'
		})
		export class HighligthMouseDirective {

		  @HostListener('mouseenter') onMouseOver(){
		    //this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'yellow');
		    this.backgroundColor = 'yellow';
		  }

		  @HostListener('mouseleave') onMouseLeave(){
		    //this._renderer.setStyle(this._ElementRef.nativeElement, 'background-color', 'white');
		    this.backgroundColor = 'white';
		  }

		  //@HostBinding('style.backgroundColor') backgroundColor!: string;
		  @HostBinding('style.backgroundColor') get setColor(){
		    return this.backgroundColor;
		  }

		  private backgroundColor!: string;

		  constructor(    
		    //private _ElementRef: ElementRef,
		    //private _renderer: Renderer2
		    ) { }

		}
	````


# 12. Diretivas: Input e Property Binding

- [Vídeo Aula](https://youtu.be/rB3OjMOel3s)
- Criamos uma diretiva
	- ng g d share/highlitgh
- Ajustamos a nossa tela highligth mouse, para agilizarmos
	````typeScript
		/* eslint-disable @typescript-eslint/no-empty-function */
		/* eslint-disable @angular-eslint/directive-selector */
		import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

		@Directive({
		  selector: '[hitgligth]'
		})
		export class HitgligthDirective {
		  
		  @HostListener('mouseenter') onMouseOver(){  
		    this.backgroundColor = 'yellow';
		  }

		  @HostListener('mouseleave') onMouseLeave(){
		    this.backgroundColor = 'white';
		  }

		  @HostBinding('style.backgroundColor') backgroundColor!: string;
		  
		  constructor(    
		    //private _ElementRef: ElementRef,
		    //private _renderer: Renderer2
		    ) { }


		}

	````
- A nossa ideia desta aula, é fazer uma customização na definição de cores.
- Vamos criar duas variaveis.
- ngOnInit ()
	- utilizamos quando o componente é inicializado
	- setamos um defaultcolor no processo
	- Se declararmos da maneira abaixo, o angular entende que o mesmo é uma diretiva e um seletor
		````typescript
		@Input('highlitght') highligthColor: string = 'yellow';
		````
- Abaixo como a nossa classe ficou
	````typeScript
		/* eslint-disable @typescript-eslint/no-empty-function */
		/* eslint-disable @typescript-eslint/no-inferrable-types */
		/* eslint-disable @angular-eslint/directive-selector */
		import { Directive, HostListener, HostBinding,
		  Input } from '@angular/core';

		@Directive({
		  selector: '[highlight]'
		})
		export class HighlightDirective {

		  @HostListener('mouseenter') onMouseOver(){
		      this.backgroundColor = this.highlightColor;
		  }

		  @HostListener('mouseleave') onMouseLeave(){
		      this.backgroundColor = this.defaultColor;
		  }

		  @HostBinding('style.backgroundColor') backgroundColor!: string;

		  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
		  @Input() defaultColor: string = 'white';
		  @Input('highlight') highlightColor: string = 'yellow';

		  constructor() { }

		  ngOnInit(){
		    this.backgroundColor = this.defaultColor;
		  }

		}
	````
- diretiva html
	````html
		 <p fundoAmarelo >
    		Texto com fundo amarelo.
		  </p>
		  
		  <button fundoAmarelo>Botão com fundo amarelo.</button>
		  
		  <p highligthMouse>
		    Texto com highlight quando passo o mousee.
		  </p>

		  <p highlight="blue" defaultColor="grey">
		    Texto com highlight com cores customizadas.
		  </p>
	````


# 13. Criando uma diretiva de estrutura (ngElse)

- [Vídeo Aula](https://youtu.be/b-rRPCK-fdE)
- Diretiva de estrutura customizada
- Criamos a diretiva ng-else
	- ng g d shared/ng-else
- Diretiva de estrutura
	- ngIf é uma proprety binding
- Configuramos uma lógica para poder tratar os elementos em tela, simulando um ngelse
	````typescript
		/* eslint-disable @angular-eslint/directive-selector */
		import { Directive, Input,
		  TemplateRef, ViewContainerRef } from '@angular/core';

		@Directive({
		  selector: '[ngElse]'
		})
		export class NgElseDirective {

		  @Input() set ngElse(condition: boolean){
		    if (!condition){
		      this._viewContainerRef.createEmbeddedView(this._templateRef);
		    } else {
		      this._viewContainerRef.clear();
		    }
		  }

		  constructor(
		    private _templateRef: TemplateRef<any>,
		    private _viewContainerRef: ViewContainerRef
		  ) { }

}
	````
	````html
		<p fundoAmarelo >
		    Texto com fundo amarelo.
		  </p>
		  
		  <button fundoAmarelo>Botão com fundo amarelo.</button>
		  
		  <p highligthMouse>
		    Texto com highlight quando passo o mousee.
		  </p>

		  <p highlight="blue" defaultColor="grey">
		    Texto com highlight com cores customizadas.
		  </p>

		  <h5>Diretiva Estrutura customizada - ngElse</h5>

		<div *ngIf="mostrarCursos" >
		  Lista de cursos aqui.
		</div>
		<div *ngElse="mostrarCursos" >
		  Não existem cursos para serem listados.
		</div>

		<br>
		<button (click)="onMostrarCursos()">
		  Mostrar ou esconder cursos
		</button>
		<br>

		<!-- Para Angular v4+, usar <ng-template></ng-template> no lugar de <template></template> -->
		<ng-template [ngElse]="mostrarCursos">
		  <div>
		    Não existem cursos para serem listados.
		  </div>
		</ng-template>
	````
	````typescript
	/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
	/* eslint-disable @typescript-eslint/no-empty-function */
	/* eslint-disable @typescript-eslint/no-inferrable-types */
	import { Component, OnInit } from '@angular/core';

	@Component({
	  selector: 'app-diretiva-customizada',
	  templateUrl: './diretiva-customizada.component.html',
	  styleUrls: ['./diretiva-customizada.component.css']
	})
	export class DiretivaCustomizadaComponent implements OnInit{

	  mostrarCursos: boolean = false;

	  constructor() { }

	  ngOnInit() {
	  }

	  onMostrarCursos(){
	    this.mostrarCursos = !this.mostrarCursos;
	  }


	}
	````

