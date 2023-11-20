# Data Binding

## 01. Property Binding e Interpolação

- [Vídeo Aula](https://youtu.be/rlVxG2lG1Tk)
- Interpolação e Proprety Binding
### Data bindig
	- Atrelar o componente ao template e vice e cersa
	- Interpolação {{valor}}
		- Pegar o valor de um atributo ou um metodo e ter a saida desta informação no template. 
	- Proprety Binding
		- Conseguimos fazer a saída de um autributo do componente para um temmplate. 
	- Escutar evento do template
		- Com isto conseguimos escutar e executar no component uma determinada ação
	- to way data binding - ngModel-
		- Manter tanto o template quanto o componente atualizado ao mesmo tempo. 

- Vamos criar um novo projeto
	- ng new data-binding
- Abrimos o projeto e adicionamos um h1, para indicar o título e se o mesmo está funcionando
	````html
		<h1>
  			{{title}}
		</h1>
	````
- criamos o compomnetne data-binding
	- ng g c data-binding
- Colocamos o seletor do componente criado, dentro do nosso app.component
- Criamos ma section seguido de um article e um título h3
	````html
	<section class="proprety-binding">
	    <article>
        		<h3>Interpolation / Interpolação</h3>
    		</article>
	</section>

	````
	- Section é utilizada para agrupar conteudos relacionado a uma página html
	- Article - Representa um conteúdo independente e autonomo.
- adicionamos uma tag p, expondo uma variavel criada no nosso component
	- <p>String renderizada com interpolação: {{ url }}</p>
	````typescript
		  url: string = 'http://loiane.com';
	````
- Por padrão de boas praticas (style gide) sempre que usamos uma variavel na interpolação, utilizamos no seguinte formato:
	- {{ url }}
	- Serve para facilitar a leitura
- Interpolação pode ser usado para diversas situações
	- Expressoes matemáticas
		- <p>Resultado de 1+1 é: {{ 1 + 1 }}</p>
		- É possível realizar operações matematicas.
	- Pode ser usado para chamar uma função
		- <p>Resultado de 1+1 não é: {{ 1 + 1 + getValor() }}</p>
	- Com expressoes 
		<p>Curso de Angular eu gosto do curso: {{ cursoAngular && getCurtirCurso() }}</p>

### Proprety Binding

- Exemplo de proprety binding
	- Criei uma URL de variavel e chamei na propriedade html
		- <img src="{{ urlImagem }}">
	- Também é possível usar o proprety binding com colchetes (Angular identifica que é um proprety binding), assim não precisamos de interpolão. 
		- <img [src]="urlImagem">
		- <img bind-src="urlImagem">
- Interpolação também é um proprety binding
- No dia a dia pode usar o que quiser, ou interpolação ou proprety binding
- Vai ter casos que so vai ser usar o proprety binding
- [] é um sintaxe sugar
	- Por baixo dos panos ele vai lser a propridade do html e tivesse colocando o:
		- <img bind-src="urlImagem">
- Valor do componente para o Template
- Usa-se colchetes <img [src]="urlimg" />
- Formato padrão é através do bind- nomePropriedade <img bind-src="urlimg"/>
- Quando não existe uma propriedade no elemento, usa-se [attr.colspan]

## 02. Class e Style binding

- [Vídeo Aula](https://youtu.be/NxtlQSpSgx8)
- Binding de classes e estilos
	- Utilizando binding com css.
- São uma forma de proprety bindg
	- Vamos trabalhar com CSS.
- Vamos trabalhar com alertas do bootstrap
	- [Alertas BootStrap](https://getbootstrap.com/docs/5.3/components/alerts/)
	- Comando para integrar o bootstrap ao projeto npm install 
		- ng2-bootstrap bootstrap --save
	- importar o botstrap dentro do projeto:
		- No arquivo style.scss
			````css
			@import '~bootstrap/dist/css/bootstrap.min.css';
			````
		- no arquivo angular.json
			````json
			"styles": [
              "~bootstrap/dist/css/bootstrap.min.css",
               "src/styles.scss"
            ],
			````
### proprety binding com classes
- Para testar, criamos um select para pegar diversos tipos de alertas
	````html
		<div>
            Selecione uma classe:
            <select #classe (change)="0">
                <option value="alert-success">Sucesso</option>
                <option value="alert-info">Info</option>
                <option value="alert-warning">Warning</option>
                <option value="alert-danger">Danger</option>                
            </select>
            <br><br>
        </div>
	````
- Posterir buscamos todos os alert's com estilos e adicoionamos ao html também
	````html
	 	<div class="alert alert-success" role="alert">...</div>
        <div class="alert alert-info" role="alert">...</div>
        <div class="alert alert-warning" role="alert">...</div>
        <div class="alert alert-danger" role="alert">...</div>
	````
- Ajustamos as classes através dos eventos através do class.binding
	``` html
	<div class="alert" role="alert" 
            [class.alert-success]="classe.value == 'alert-success'">
            Sucesso
    </div>
    ````
    - Comparamos os valores de classe selecionada no combo box é determinada classe
- Todos ajustados
	````html
		<div class="alert" role="alert" 
            [class.alert-success]="classe.value == 'alert-success'">
            Sucesso
        </div>
        <div class="alert" role="alert"
            [class.alert-info]="classe.value == 'alert-info'">
            Info
        </div>
        <div class="alert" role="alert"
            [class.alert-warning]="classe.value == 'alert-warning'">
            Alerta
        </div>
        <div class="alert" role="alert"
            [class.alert-danger]="classe.value == 'alert-danger'">
            Erro
        </div>
	````

### Outra opção pela interpolação

- Usamos a validação conforme o valor da classe:
	````html
		<div class="alert {{ classe.value}}">
            Texto colorido conforme valor do combobox.
        </div>
	````
- Outro ponto com em que acabamos usando logica para mostrar determinado logica com proprety binding
	````html
		<div class="alert alert-danger" role="alert"
        [style.display]="classe.value == 'alert-danger' ? 'block' : 'none'">
            Esse texto somente aparece em caso de erro.
        </div>
	````
	- Utilizamos uma logica muito simples
		[style.display]="classe.value == 'alert-danger' ? 'block' : 'none'">
		Comparamos o value do classe caso seja algo, mostra algo, se nao fica nao mostrando
	
## 03. Event binding

- [Vídeo Aula](https://youtu.be/WF28rLBangw)
- Escutar eventos no HTML do template
- Executar uma logica através do event binding
- Podemos escutar qualquer eventodisparado na nossa página
- Sites com eventos disponiveis:
- Nos eventos, utilizamos parentes ao redor do evento
	- Configuramos um botao para pegar um evento através de uma função chamada botaoClicado(), que mostra teste na tela
		````html
		<button (click)="botaoClicado()" class="btn btn-primary">Me Clique!</button>
		````
- Conseguimos pegar eventos de aconecimentos como a tecla que foi clicada:
	````html
		<input type="text" (keyup)="onKeyUp($event)"/>
	````
	- Criamos uma variavel do tipo keyviardEvent
	````typescript
		onKeyUp(evento: KeyboardEvent)
		{
    		console.log(evento);    
  		}

	````
- Conseguimos pegar um evento que está preenchido no html
	- ((<HTMLInputElement>evento.target).value);	
		- No código acima, conseguimos refletir o que está escrito no campo.
	- Com o código abaixo, complementado, acabamos vendo a palavra escrita
		- <p>Valura atual: {{ valorAtual }}</p>
- Utilizamos mais dois eventeos, para salvar o valo com a tecla enter ou saindo do campo.
	````html
	<input type="text" 
            (keyup)="onKeyUp($event)" 
            (keyup.enter)="salvarValor(campoInput.value)"
            (blur)="salvarValor($any($event.target).value)"
            #campoInput/>
	````	
	````typescript
	valorSalvo: string = '';
			  salvarValor(valor: string){
		    this.valorSalvo = valor;
		  }
	`````
	- Com a tecla enter:
		- (keyup.enter)="salvarValor(campoInput.value)"
	- Saindo do campo:
		- (blur)="salvarValor($any($event.target).value)"
- Evento passe o mouse sobre
	- 
	
- CSS no angular, tres maneiras
	- styles.css
		- Disponiveis para todos componentes, estilo global
	- Angular cli
		- disponivel somente no componente criado com o angular cli
		- StyleURL - Faz referencia a uma URL(Nosso arquivo dentro do componente)
	- Inline com styles dentro do componente
		- cada estilo dos templates 
		- inline somente com poucas linhas.
- Transformar o código em diretiva por ser um código muito grande (aprenderemos mais a frente).
- o angular declara funcao no elemento com on-click. Mas na tradução ficaria (Isto é melhor em leitura de código.)

## 04. Two-way data binding

- [Vídeo Aula](https://youtu.be/7PI-2pvLTu8)
- Tanto componente quanto o template, atualizado ao mesmo tempo "Dois Caminhos"
	- Valor do template para o Componente e vice e versa
	- Usa-se binding de eventos + propriedades
- Começamos no exemplo, criando um imput, onde pegamos o retorno da base 
	````html
		<input type="text"
            [value]="nome"
            />
	````
	- [value]="nome"
		- pegamos a variavel nome que está no nosso componente e adicionamos no campo imput
	- Criamos um paragrafo 
		- <p>Você digitou: {{ nome }}</p>
	- Testando uma alteração no componente input, alteramos o nome em tela e o paragrafo não atualiza.
- Fizemos um ajuste onde colocamos ida e volta para a atualização do campo
	````html
	<input type="text"
            [value]="nome"
            (input)="nome = campoInput.value"
            #campoInput/>
    ````
    - [value]="nome"
    	- pegamos o valor da variavel do criada no nosso componente
    - (input)="nome = campoInput.value" #campoInput
    	- Aqui atualizamos o valor da variavel do nosso componente
    - Com os dois passos acima, criamos meio que um looping
- ngModel
	- Representação de uma entidade
		- Campo simples
		- Objeto
- para os próximos passos funcionar, tivemos que fazer a importação do form no componente do angular
	````typescript
	import { FormsModule } from '@angular/forms';
				@NgModule({
		  declarations: [
		    AppComponent,
		    DataBindingComponent
		  ],
		  imports: [
		    BrowserModule,
		    AppRoutingModule,
		    FormsModule
		  ],
		  providers: [],
		  bootstrap: [AppComponent]
		})
	````
- Ajustamos o componente para funcionar com o ng
	````typescript
		<input type="text"
            [(ngModel)]="nome"
            (ngModelChange)="nome = campoInput.value"
            #campoInput/>
	````
	- Agora temos uma ida e volta no input
- two-away-databindig na prática
	- <input type="text" [(ngModel)]="nome"/>
- Como saber como construir o two away
	- com a sintaxe "Banana na caixa"
		- [()]
	- O que o angular faz por baixo dos panos
		- <input type="text" bindon-ngModel="nome"/>
- Utilizando um objeto para usar o two way
	- Criamos o objeto
		````typescript
		pessoa: any = {
		    nome: 'def',
		    idade: 20
		  }
		````
	- Ajustamos nosso imput e um paragrafo
		````html
			<input type="text" [(ngModel)]="pessoa.nome"/>
            <input type="text" [(ngModel)]="pessoa.idade"/>

            <br><br>
            <p>Meu nome é: {{ pessoa.nome }}</p>
            <p>Minha idade é: {{ pessoa.idade }}</p>
		````
- two-way databining, sempre vamos utilizar o ngModel
- Temos que importar o FormsModule
	````typescript
	import { FormsModule } from '@angular/forms';
				@NgModule({
		  declarations: [
		    AppComponent,
		    DataBindingComponent
		  ],
		  imports: [
		    BrowserModule,
		    AppRoutingModule,
		    FormsModule
		  ],
		  providers: [],
		  bootstrap: [AppComponent]
		})
	````
- Vamos criar um módulo novo e um novo componente
	- ng g m meu-form
	- ng g c meu-form
- forms module sempre deve estar declarado com o detemrinado componente.
- no app.module,ts, sempre devemos ter o determinado componente na tag imports
- Para o componente criado ser visivel pelo outro componente, ele tem que estar na exports dentro do ngModules;
	- Com isto conseguimos ver o componente em todos os locais.

## 05. Input properties

- [Vídeo Aula](https://youtu.be/G2cBpYZ0fzk)
- Reutilizar os componentes do nosso componente angular. 
- Criamos um novo componente
	- ng g c input-prperty
- Vamos utilizar este novo component dentro do databind componente, então não precisamos nos preucupar com diretivas.
- Adaptamos o nome do componente para <app-curso>
- Vamos passar uma variavel do data-binding componente, para o component curso.
- Para passar a determinada variavel para dentro do componente, precisamos fazer alguns ajustes dentro do nosso input-proprety
	- primeiramente usamos um decoretor chamado @input, para vincular uma variavel criada no nosso componente input para a variavel de entrada que vai ser recebeida		
		- @Input() nome: string = '';
			- Conseguimos expor umapropriedade nome, para um determinado seletor.
	- Adaptamos nosso componente para utilizar o import
		- import { Component, Input } from '@angular/core';
	- Dentro do nosso html do component databinding, fazemos da seguinte maneira:
	- <app-curso [nome]="nomeDoCurso"></app-curso>
	- Ajustamos para ficar mais vizivel o nome no html do input-proprety
		````html
			<p> {{ nomeCurso }} </p>
		````
	- Conseguimos também realizar a exsposição da variavel com outro nome
		````typescript
		@Input('nome') nomeCurso: string = '';
		````
	- Caso o nome seja o mesmo, podemos deixamos sem o nome de variavel
		````typescript
		@Input() nomeCurso: string = '';
		````
- Podemos expor a variavel pelo seletor de inputs, conforme código abaixo:
	````typescript
	@Component({
		  selector: 'app-curso',
		  templateUrl: './input-property.component.html',
		  styleUrls: ['./input-property.component.scss'],
		  inputs: ['nomeCurso:nome']
		})
		export class InputPropertyComponent {

		  //@Input('nome') 
		  nomeCurso: string = '';

		}
	````
- Dar preferencia para a convenção o decoreator
	- @Input('nome') nomeCurso: string = '';
- Cenario real, utiliariamos uma organização melhor de componentes
	- Componentes que não sao espertos e mostram em tela somente para organização.

## 06. Output properties

- [Vídeo Aula](https://youtu.be/Lbwk8oDJrCU)
- Emitir eventos com o output propriets
- Vamos criar dois contadores e incrementar e decrementar valores em dois componentes
- Criamos o componente out´put proprety
	- ng g c output-proprety
- Pelo Escopo dos componentes, eles conseguem se ver, já está ok, para podermos ver ambos e utilizar ambos
	- app module
		````typescript
		declarations: [
		    AppComponent,
		    DataBindingComponent,
		    InputPropertyComponent,
		    OutputPropretyComponent
		  ],
		````
- Criamos uma variavel e duas funções para fazer o incremento e decremento conforme clicamos nos botões.
	````typescript
		export class OutputPropretyComponent {

			  valor: number = 0;

			  inrementa(){
			    this.valor++;

			  }

			  decrementa(){
			    this.valor--;
			  }

			}

	````
- Posterior ajustamos os botões para chamar a função conforme click
	````html
		<div>
		    <button class="btn btn-primary" (click)="inrementa()">+</button>
		    <input type="text" [value]="valor" readonly>
		    <button class="btn btn-primary" (click)="decrementa()">-</button>
		</div>

	````
- Fizemos um ajuste para pegar la do componente data-binding uma variavel valor inicial e passar para o nosso componente 
	- <contador [valor]="valorInicial"></contador>
- Vamos criar uma ação a cada mudança de numeros
- Criamos a classe:
	````typescript
		onMudouvalor(evento: any){
	    console.log(evento);
  		}
	````
	- Nela vamos ouvir semrpe que o valor mudar no componente e realizar uma ação
- Primeiramente criamos um emisso de evento
	- @Output() mudouValor = new EventEmitter();
		- Isto dentro do output propriety
	- Ajustamos o databinding para chamar o determinado evento
	````typescript
			<contador [valor]="valorInicial"
               (mudouValor)="onMudouValor($event)">
            </contador>
	````
- Posterio ao executarmos o fonte no navegador, encontramos no console a execução do código.


## 07. Ciclo de vida (life-cycle) do Componente

- [Vídeo Aula](https://youtu.be/4Z543sAKmBA)
- Eventos que os componentes disparam desde o momento da sua criação até a sua destruição.
- Eventos
	- ngOnChanges - Quando o valor proprety-binding é atualizado
	- ngOnInit - quando o componente é inicializado
	- ngDoCheck - A cada ciclo de verificação de mudança
	- ngAfterContentInit - Depois de inserir conteúdo externo na view
	- ngAfterContentChecked - a cadas verificação de cónteúdo
	- ngAfterViewChecked - Verificação do conteudo inserido na view
	- ngOnDestroy - Antes de o componente ser destruido.
- Criamos o componente ciclo.
	- ng g c ciclo
- Colocamos o ciclo dentro do app-component
	- <app-ciclo></app-ciclo>
- Criamos dentro do app.ciclo, todos os eventos e ajustamos o nosso ciclo conforme necessário
	````typescript
		import { 
		  Component,
		  OnInit,
		  OnChanges,
		  DoCheck,
		  AfterContentInit,
		  AfterContentChecked,
		  AfterViewInit,
		  AfterViewChecked,
		  OnDestroy, Input } from '@angular/core';

		@Component({
		  selector: 'app-ciclo',
		  templateUrl: './ciclo.component.html',
		  styleUrls: ['./ciclo.component.scss']
		})
		export class CicloComponent implements OnChanges, OnInit,
		    DoCheck, AfterContentInit, AfterContentChecked,
		    AfterViewInit, AfterViewChecked, OnDestroy {

		  @Input() valorInicial: number = 10;  
		   
		  constructor() {
		    this.log('constructor');
		  }

		  ngOnChanges() {
		    this.log('ngOnChanges');
		  }

		  ngOnInit() {
		    this.log('ngOnInit');
		  }

		  ngDoCheck() {
		    this.log('ngDoCheck');
		  }

		  ngAfterContentInit() {
		    this.log('ngAfterContentInit');
		  }

		  ngAfterContentChecked() {
		    this.log('ngAfterContentChecked');
		  }

		  ngAfterViewInit() {
		    this.log('ngAfterViewInit');
		  }

		  ngAfterViewChecked() {
		    this.log('ngAfterViewChecked');
		  }

		  ngOnDestroy() {
		    this.log('ngOnDestroy');
		  }

		  private log(hook: string) {
		    console.log(hook);
		  }
		}

	````
- Sempre colcamos de boas praticas a interface para quem for ver o nosso código entender.
- Criamos um botão para mudar valor everifiamos em tela os eventos que se permanecem
	````html
		<app-ciclo [valorInicial]="valor" *ngIf="!deletarCiclo"></app-ciclo>
		<button class="btn btn-primary" (click)="mudarValor()">Mudar Valor</button>
		<button class="btn btn-primary" (click)="destruirClico()">Deletar</button>
	````
	- criamos as determinadas classes
		````typescript
		valor: number = 5;

		  deletarCiclo: boolean = false;

		  mudarValor(){
		    this.valor++;
		  }

		  destruirClico(){
		    this.deletarCiclo = true;
		  }
		````
- Ao testarmos verificamos os eventos que permanecem ativos:
	- ngOnChanges
	- ngDoCheck
	- ngAfterContentChecked
	- ngAfterViewChecked
- Agora vamos destruir o compomnente.
	- O evento que permanece é o de baixo:
		- ngOnDestroy
- *ngIf="!deletarCiclo".
	- Serve como lógica para manter algo na tela
- Conexão com servidor é o que mais vamos fazer ciclo de vida com o componente
- ngOnChanges ou ngOnInit os mais usados em eventos utilizados em projetos

## 08. Acesso ao DOM e ao Template com ViewChild

- Acesso ao Dom e ao Template com o decorate ViewChild
- Adicionamos uma variavel ao nosso campo input do componente output-proprety.
	- #campoInput
- Vamos trabalhar agora para acessar esta variavel
- Adicionamos um viewChild dentro da nossa classe output
	- @ViewChild('campoInput') campoValorInput!: HTMLElement;
- Usar console log para pegarmos o tipo de elemento.
- Trabalhamos diretamente com a refêrencia.


