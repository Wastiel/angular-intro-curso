# Pipes

# 01. Pipes (usando pipes, parâmetros e pipes aninhados)

- [Vídeo Aula](https://youtu.be/jrXQFpbw2HQ)
- Parametros com Pipes
- Transformar com Pipe e mostrar o valor nos templates.
- No angular 1 é o que chamamos de filtros
- Criamos o seguinte projeto e um componente.
	- ng new 06_pipes
	- ng g c exemplos-pipes
- Iniciamos o servidor para testarmos
- Primeiramente ciramos o objeto Livro, com alguns dados reais
	````typeScript
		 livro: any = {
		    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
		    rating: 4.54321,
		    numeroPaginas: 314,
		    preco: 44.99,
		    dataLancamento: new Date(2016, 5, 23),
		    url: 'http://a.co/glqjpRP'
			};
	````
- Criamos também o nosso html
	````html
		<h5>Exemplos de Pipes</h5>

		<p>Título: {{ livro.titulo }}</p>
		<p>Estrelas: {{ livro.rating }}</p>
		<p>Páginas: {{ livro.numeroPaginas  }}</p>
		<p>Preço: {{ livro.preco }}</p>
		<p>Data Lançamento: {{ livro.dataLancamento }}</p>
		<p>Url: {{ livro.url }}</p>
		<br>
		<p>Livro: {{ livro }}</p>
	````
- Vamos começar aplicar pipes do angular 2
	- Pipe transforma um valor 
	- Conseguimos mostrar este valor transformado dentro de um template.
	- Angular 2 tem alguns pipes imbutidos.
	- https://angular.io/docs/ts/latest/
		- Sempre que possível, ver documentação
- Para declararmos uma pipe, é algo simples
	````html
		<p>Título: {{ livro.titulo | uppercase }}</p>
		<p>Estrelas: {{ livro.rating | number: '2.1-2' }}</p>
	````
	- Chamamos a pipe | e posterior colocamos o formetato desejado
- Abaixo um exemplo de papies e suas definições
	````html
		<p>Preço: {{ livro.preco | currency: 'BRL': true }}</p>
		<p>Data Lançamento: {{ livro.dataLancamento | date: 'shortdd' }}</p>
		<p>Data Lançamento: {{ livro.dataLancamento | date: 'dd-MMM-YYYY' }}</p>
		<p>Data Lançamento: {{ livro.dataLancamento | date: 'dd-MM-YYYY' }}</p>
		<p>Url: {{ livro.url }}</p>
		<br>
		<p>Livro: {{ livro | json}}</p>
	````
	- As definições em ordem
		- | currency: 'BRL': true = Moeda
		- | date: 'shortdd' =  data curta
		- | date: 'dd-MMM-YYYY' = data em formato com mês com nome
		- | date: 'dd-MM-YYYY' = data em formado de dia mes ano numerais
		- | uppercase = Tudo maiusculo
		- | number: '2.1-2' = Formato Numeral
		- | json = Traz o objeto no formato Json
- Aninhar pipes
	- <p>Título: {{ livro.titulo | uppercase | lowercase }}</p>
	- A ordem que os pipes vao ser executados e a ordem que eles estão dentro da declaração
- Todos os pipes estão imbutidos dentro do BrowserModule
- Todos os pipes estão imbutidos dentro do CommonModule


# 02. Criando um Pipe

- [Vídeo Aula](https://youtu.be/KO7dVbigKvI)
- Vamos aprender a criar uma pipe customizada.
- Usamos o seguinte comando para criar pipes pelo angular CLI
	- ng g p camel-case
- Todas as diretivas e Pipes estão ficam na parte do declarations
	````TtypeScript
	@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  ````
-  Entendendo a pipe:
	````typeScript
		import { Pipe, PipeTransform } from '@angular/core';

		@Pipe({
		  name: 'camelCase'
		})
		export class CamelCasePipe implements PipeTransform {

		  transform(value: unknown, ...args: unknown[]): unknown {
		    return null;
		  }

		}

	````
	- Nome do pipe: camelCase
	- O pipe precisa iplementar uma interface
- Criamos a paipe no componente de pipe criado
	````typeScript
		import { Pipe, PipeTransform } from '@angular/core';

		@Pipe({
		  name: 'camelCase'
		})
		export class CamelCasePipe implements PipeTransform {

		  transform(value: any, args?: any): any {
		    let values = value.split(' ');
		    let result = '';

		    for (let v of values){
		      result += this.capitalize(v) + ' ';
		    }
		    return result;
		  }

		  capitalize(value: string){
		    return value.substring(0,1).toUpperCase()
		    + value.substring(1).toLowerCase();
		  }

		}

	````
	- Posterior utilizamos a mesma
	````html
		<p>Título: {{ livro.titulo  | uppercase | lowercase | camelCase}}</p>
	````


# 03. Aplicando Locale (internacionalização) nos Pipes

- (Vídeo Aula)[https://youtu.be/U6y9dZfpT84]
- Se removermos o pipe de formatação de data, 
	- busca o padrão do PC
- Como colocar o padrão brasileio a nossa aplicação?
	- Mudamos dentro do nosso app.module
		````typeScript
		import { LOCALE_ID, NgModule } from '@angular/core';
		import '@angular/common/locales/global/pt';

		@NgModule({
			...
		  providers: [
		    {
		      provide: LOCALE_ID,
		      useValue: 'pt',
		      
		    }
		  ],
		  	...
		export class AppModule { }

		````
- Podemos pegar de um determinado serviço também.
	- Criamos o serviço, settings
		- ng g s settings
	- Ajustamos a nossa classe de serviço:
		````typeScript
			export class SettingsService {

			  constructor() { }

			  getLocale(){
			    return 'pt';
			  }
			}

		````
	- Ajustamos o nosso app
		````typeScript
			  providers: [
			    /*{
			      provide: LOCALE_ID,
			      useValue: 'pt'      
			    }*/
			    SettingsService,
			    {
			      provide: LOCALE_ID,
			      deps: [SettingsService],
			      useFactory: (settingsService: any) => settingsService.getLocale()
			    }
			  ],
		````
- Guardar as informações de settings dentro de um local settings

# 04. Pipes: Criando um Pipe Puro

- [Vídeo Aula](https://youtu.be/h1t_O_w0LOc)
- Criar um pipe Puro
- Criamos uma lista e mostramos a mesa
	````typeScript
		livros: string[] = ['java', 'Angular 2'];
	````
	````html
		<ul>
		    <li *ngFor="let liv of livros">
		    {{ liv }}
		    </li>
		</ul>
	````
- Se quisermos aplicar um filtro no array
- Criamos uma nova pipe
	- ng g p filtro-array
- Nunca usar o exemplo abaixo em produção, meramente exemplo
	````html
	<ul>
	    <li *ngFor="let liv of livros | filtroArray">
	    {{ liv }}
	    </li>
	</ul>
	````
- ´Para funcionar temos que importar:

	import {FormsModule} from '@angular/forms'

	FormsModule
- O que é um pipe puro?
	- Não olhas as modificações num galor que é passado como parametro.
	- Não olhas as modificações no objeto.


# 05. Pipes: Criando um Pipe Impuro

- [Vídeo Aula](https://youtu.be/Qn54Z3wbU2E)
- Pipe Impuro
- Aula Anterior, mesmo adicionando um novo valor no array nao atualizava.
- ng g p filtro-array-impuro
- Vamos utilizar herança do typeScript
- Para não repetirmos a lógica, utilizamos a importação do pipe puro como herança no pipe impuro.
	````typeScript
			import { Pipe, PipeTransform } from '@angular/core';

			import { FiltroArrayPipe } from './filtro-array.pipe';

			@Pipe({
			  name: 'filtroArrayImpuro',
			  pure: false
			})
			export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

			  

			}
	````
	- O que o torna impuro é o parametro "pure: false"
	- Criamos for para mostrar em tela	
	````html
			<h5>Pipe Impuro</h5>

			<ul>
			    <li *ngFor="let liv of livros | filtroArrayImpuro:filtro">
			    {{ liv }}
			    </li>
			</ul>
	````
- Agora ao testarmos, deixamos o campo pesquisa, adicionamos um novo array, automaticamente o nosso pipe impuro adicionao no for as informações a mais.
- Nunca usar os pipes impuros e puro em produção.

- Como fazemos em um projeto real
- Faça via metodo, não faça via filtro ou order by
	- Arquivo typeScript
		````typescript
			obterCursos(){

				    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
				      return this.livros;
				    }   

				    return this.livros.filter(v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
				   );     
				   
				  }
		````
		````html
				<h5>Maneira correta de usar filtro nos projetos</h5>

				<ul>
				    <li *ngFor="let liv of obterCursos()">
				    {{ liv }}
				    </li>
				</ul>
		````

# 06. Pipes: Async (Assíncrono)

- [Vídeo Aula](https://youtu.be/WhcK7QOL6YA)
- Pype Assyncrono
	- Saida de um valor para sair no template, mesmo quando o valor demore um pouco.
- Fizemos os seguintes fluxos e ajustes:
	````HTML
		<p> {{ valorAsync | async }}</p>

		<p> {{ valorAsync2 | async }}</p>
	````
	````typescript
			  // vai atribuir o valor assincrono a variavel async depois de 2 segundos.
			  valorAsync = new Promise((resolve, reject) => {
			    setTimeout(() => resolve('Valor assíncrono'), 2000);
			  });

			  valorAsync2 = interval(2000)
			  .pipe(
			    map(valor => 'Valor assíncrono 2')
			  );
	````
- A ideia aqui é mostrar valores posterior a um determinado tempo. 