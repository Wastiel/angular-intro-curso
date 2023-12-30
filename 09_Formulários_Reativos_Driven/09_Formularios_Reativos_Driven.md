# Formulários Reativos (Data-Driven) 


# 01. Formulários reativos (data driven) Introdução

- [Vídeo Aula](https://youtu.be/aJz-BhRxN38)
- Introdução aos formulários data driven
- Aprendemos a fazer formulário angular orientado a template. 
	- Template Driven
	- Toda a lógica fica no template html
	- Através de diretivas, conseguimos criar associações para o angular
- Vamos aprender os formulários orientados a dados
	- Formulários reativos.
- Formulários Reativos são criados no componente. 
- Sincronizado com DOM e com HTML
- Template HTML mais limpo
- Formulário melhor de trabalhar para dar manutenção
- Mas não existe certo ou errado. Podemos utilizar qualquer um.
- Preferencia da comunidade é os formulários reativos.
- Usando os Obsarvles, conseguimos reagir as mudanças dos formulários.


# 02. Formulários reativos: Configuração (Módulo e Componente)

- [Vídeo Aula](https://youtu.be/2DoQX5CVvAk)
- Colocamos o redirecionamento para o dataForm. 
- Vamos criar a variavel que vai representar o nosso formulário.
	- Ela vai ser do tipo FormGroup
	- Precisamos importar o FormGroup
	- também precisamos importar o ReactiveFormsModule dentro do app.module
- Vamos criar o módulo na mão.
	- ng g m data-form
	- Vai criar no local correto.
- Iniciamos o processo para entender a diferença entre 


# 03. Formulários reativos: Criando um form com código Angular

- [Vídeo Aula](https://youtu.be/931fynCdTKw)
- Como Criar o nosso primeiro formulário utilizando com angular
- Cada nom é um controle do formulário.
- Dentro do nosso formulário, colocamos a seguinte informação.
	- nome: new FormControl(),
	- O campo é um teipo de formulário de controle.
	- Podemos passar um valor inicial ao mesmo
- Forma mais verbosa de contruir um formulário
	````TypeScript
		this.formulario = new FormGroup({
	      nome: new FormControl(),
	      email: new FormControl(),
	    });

	````
- Exite outra maneira de construir o formulário. 
	- Usando o formBuilder
	````TypeScript		    
	    this.formulario = this.formBuilder.group({
	      nome: [null],
	      email: [null],
	    })
	````
- Não podemos esquecer de fazer os inports necessários para o fluxo funcionar. 

# 04. Formulários reativos: Sincronizando HTML com FormGroup

- [Vídeo Aula](https://youtu.be/RPL_iVbmC1g)
- Como sincronizar as tags inputs html com o nosso form component.
- Primeiramente Limpamos os dados do nosso formulário e tiramos tudo de angular dele, deixando somente e-mail e nome.
- Posterior vinculamos o formulário no html ao nosso formulário criado no nosso type script
- No fluxo, não temos variaveis no nosso formulario do html e sim no nosso typeScript
- Vamos ativar novament e nosso componente de debug, mas de uma maneira um poouco diferente
- Para isto vamos criar um módulo compartilhado.
	- ng g m shared
- Vinculamos o módulo shared aos outros modules
- Os demais modules, importamos dentro do app module
- Dentro do shared module, também temos que colocar as nossas extruturas como export, para as mesmas sejam vistas por outros compomnentes.
- Agora vamos estruturar o nosso debug, para ele receber os campos.
	- Subistituimos o nome pela diretiva
		- formControelName="nome"
		- formControelName="email"
- Com isto conseguimos ver a atualização dos campos conforme utilização

# 05. Formulários reativos: Fazendo submit

- [Vídeo Aula](https://youtu.be/uUN4h2J4ms4)
- Até o momento o botao submit nao reflete ação alguma.
- Podemos criar um evento de escutar o submit
	- (ngSubmit)="onSubmit()"
- Vamos criar o evento no data-form.compononent.
- Diferença de um para outro.
	- no template-form.component, passamos a variavel formulário
	- no data-form.component, ja temos a variavel do formulário.
- Criamos o ngSubmit no nosso formulário, criamos a função e colocamos um console log, para ver o que tem dentro do formuláiro.
	- html
		````html
			<form  class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">
		````
	- typeScript
		````typeScript
			onSubmit() {
    console.log(this.formulario);
  }
		````
- Com isto consegimos ver via console log o que o nosso onSubmit está realizando.
- Analisando o debug, a funcionalidade value é que é submetida ao servidor
- Dentro do nosso onSubmit, colocamos uma conexão com o httbin, para verificarmos se o nosso formulário foi submetido da maneira correta.
	````typeScript
	    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe((dados: any) => {
        console.log(dados);
        //formulario.form.reset();
      });

	````
- Temos que fazer o import do httpmodule, dentro do nosso modulo.


# 06. Formulários reativos: Resetando o form

- [Vídeo Aula]https://youtu.be/YqBdbU148OY)
- Como resetar um formulário
- Nao colocar o reset do formulário dentro do onSubmit
- Quando recebermos o retorno do envio, colocamos o reset.
- O nosso código de reset de formulário, fica da seguinte maneira:
	````typeScript
		   this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe((dados: any) => {
        console.log(dados);
        //reseta o form
        this.formulario.reset();
        //formulario.form.reset();
      });
	````
- Dentro do subscribe, conseguimos tratar erro. 
	````typeScript
		onSubmit() {
	    console.log(this.formulario.value);

	    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
	      .subscribe((dados: any) => {
	        console.log(dados);
	        //reseta o form
	        this.formulario.reset();
	        //formulario.form.reset();
	      },
	      (error: any) => alert('erro'));
	  }
	````
- Alteramos a URl de envio, para pegar o derterminado erro.
- Com isto temos um erro em tela, para testes
- Vamos criar um botao de cancelar e escutar seu click e vamos cirar uma função resetar.
		````html
			<button class="btn btn-secondary" (click)="resetar()">Cancelar</button>
		````
	- Tunção Resetar
		````typeScript
			 resetar() {
		    this.formulario.reset();    
		    }
		````
- Posterior ajustamos a nossa função para reutilização de código
	````typeScript
		onSubmit() {
	    console.log(this.formulario.value);

	    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
		      .subscribe((dados: any) => {
		        console.log(dados);
		        //reseta o form
		        this.formulario.reset();
		        this.resetar();
		      },
		      (error: any) => alert('erro'));
		  }  

		  resetar() {
		    this.formulario.reset();    
		    }
		
	````
- 

# 07. Formulários reativos: Aplicando validação nos campos

- [Vídeo Aula](https://youtu.be/H-HjgIONJ-Y)
- Como aplicar validação nos nossos campos do fomrulário.
- Validaçãp no código do Angular.
- Dentrode cada campo do formulário, podemos passar um parametro.
- Utilizamos o segundo parametro, o que acaba tornando o fluxo simples
	````typeScript
		ngOnInit(){	    
		    
		    this.formulario = this.formBuilder.group({
		      nome: [null, [Validators.required, Validators.min(3), Validators.max(20)]],
		      email: [null, [Validators.required, Validators.required]],
		    })
		  }
	````
	- Acaba sendo um fluxo simples:
		- nome: [null, [Validators.required, Validators.min(3), Validators.max(20)]],
		- O nome do campo e os parametros.		
- [Mais validações de campos](https://angular.io/api?query=validator)


# 08. Formulários reativos: Acesso ao FormControl no HTML e CSS de validação dos campos

- [Vídeo Aula](https://youtu.be/srtenF1rFYI)
- Vamos acessar cada controle de fomrulário e adicionar o CSS na validação dos campos.
- Primeiramente configuramos as funções abaixo:
	````typeScript
		aplicaCssErro(campo: any){

		    return {
		      'has-error': this.verificaValidTouched(campo),
		      'has-feedback': this.verificaValidTouched(campo),
		  }
		}
		verificaValidTouched(campo: any){
		  return !this.formulario.get(campo)?.valid && !this.formulario.get(campo)?.touched;
		  
		}
	````
- Posterior configuramos o nosso html:
	````html
		<div class="container mt-4" >
		    <form  class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">
		        <div class="form-group mb-3" [ngClass]="aplicaCssErro('nome')" >
		            <div class="col-sm-12">
		                <label for="nome" class="form-label">Nome</label>
		            </div>
		            <div class="col-sm-12">
		                <input type="text" class="form-control" formControlName="nome" id="nome" placeholder="Nome"                     required >
		            </div>         
		            <app-campo-control-erro [mostraErro]="verificaValidTouched('nome')" msgErro="Nome é obrigatório">
		            </app-campo-control-erro>
		        </div>
		        <div class="form-group mb-3" [ngClass]="aplicaCssErro('email')">
		            <div class="col-sm-12">
		                <label for="email" class="form-label">Email</label>
		            </div>
		            <div class="col-sm-12">
		                <input type="email" class="form-control" formControlName="email" id="email" placeholder="nome@email.com"
		                     required >
		            </div>           
		            <app-campo-control-erro [mostraErro]="verificaValidTouched('email')" msgErro="Nome é obrigatório">
		            </app-campo-control-erro>
		        </div>       

		        <button type="submit" class="btn btn-primary" >Submit</button>
		        <button class="btn btn-secondary" (click)="resetar()">Cancelar</button>

		        <app-form-debug [form]="formulario"></app-form-debug>
		    </form>
		</div>
	````
- Nele setamos uma função que configura o CSS e ajusta todas as chamadas.
- O formControl define o nome que temos que usar. 
- Agora aproveitamos e setamos o css no fluxo de validação de erros
	````html
		<div class="container mt-4" >
	    <form  class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">
	        <div class="form-group mb-3" [ngClass]="aplicaCssErro('nome')" >
	            <div class="col-sm-12">
	                <label for="nome" class="form-label">Nome</label>
	            </div>
	            <div class="col-sm-12">
	                <input type="text" class="form-control" formControlName="nome" id="nome" placeholder="Nome" >
	                <app-campo-control-erro 
	                [mostraErro]="!formulario.get('nome')?.valid && !!formulario.get('nome')?.touched" msgErro="Nome é obrigatório">
	                </app-campo-control-erro>
	            </div>         
	            
	        </div>
	        <div class="form-group mb-3" [ngClass]="aplicaCssErro('email')">
	            <div class="col-sm-12">
	                <label for="email" class="form-label">Email</label>
	            </div>
	            <div class="col-sm-12">
	                <input type="email" class="form-control" formControlName="email" id="email" placeholder="nome@email.com"
	                      >
	                     <app-campo-control-erro 
	                     [mostraErro]="!formulario.controls['email'].valid && formulario.controls['email'].touched" msgErro="Nome é obrigatório">
	                    </app-campo-control-erro>
	            </div>           
	            
	        </div>       

	        <button type="submit" class="btn btn-primary" >Submit</button>
	        <button class="btn btn-secondary" (click)="resetar()">Cancelar</button>

	        <app-form-debug [form]="formulario"></app-form-debug>
	    </form>
	</div>
	````
- Caso queiramos adicionar uma segunda mensagem de erro
	````typeScript
		verificarEmailInvalido(){   
			  if(this.formulario.get('email')?.errors && (this.formulario.get('email')?.touched)){
			    console.log(this.formulario.get('email')?.errors)
			    return true;
			  }
			  return false;  
			}
	````
	````html
		<app-campo-control-erro                     
        [mostraErro]="verificarEmailInvalido()" msgErro="Email Invalido">                      
        </app-campo-control-erro>
	````
- Com isto validamos se o email está preenchido de forma correta e caso não esteja, travamos o mesmo. 


# 09. Formulários reativos: Campos de endereço (migrando um form template driven para form reativo)

- [Vídeo Aula](https://youtu.be/elgNhMVXxq0)
- Formul[ários reativos
- Vamos adicionar os campos de endereço.
- Formatamos o nosso formulário, conforme abaixo:
	````html
		<div class="container mt-4" >
	    <form  class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">
	        <div class="form-group mb-3" [ngClass]="aplicaCssErro('nome')" >
	            <div class="col-sm-12">
	                <label for="nome" class="form-label">Nome</label>
	            </div>
	            <div class="col-sm-12">
	                <input type="text" class="form-control" formControlName="nome" id="nome" placeholder="Nome" >
	                <app-campo-control-erro 
	                [mostraErro]="!formulario.get('nome')?.valid && !!formulario.get('nome')?.touched" msgErro="Nome é obrigatório">
	                </app-campo-control-erro>
	            </div>         
	            
	        </div>
	        <div class="form-group mb-3" [ngClass]="aplicaCssErro('email')">
	            <div class="col-sm-12">
	                <label for="email" class="form-label">Email</label>
	            </div>
	            <div class="col-sm-12">
	                <input type="email" class="form-control" 
	                formControlName="email" id="email" placeholder="nome@email.com">
	                     <app-campo-control-erro 
	                     [mostraErro]="!formulario.controls['email'].valid && formulario.controls['email'].touched" msgErro="Nome é obrigatório">
	                    </app-campo-control-erro>
	                    <app-campo-control-erro                     
	                    [mostraErro]="verificarEmailInvalido()" msgErro="Email Invalido">                      
	                    </app-campo-control-erro>
	            </div>                     
	        </div>   
	        
	        <div ngModelGroup="endereco">
	            <div class="form-group">
	        <div class="container">
	            <div class="row">
	              <div class="col" [ngClass]="aplicaCssErro('cep')">
	                <label for="cep" class="control-label">CEP</label>
	                <input type="text" class="form-control" id="cep">
	                <app-campo-control-erro 
	                 [mostraErro]="verificaValidTouched('cep')" msgErro="CEP é obrigatório">
	                </app-campo-control-erro>
	              </div>
	              <div class="col" [ngClass]="aplicaCssErro('numero')">
	                <label for="numero" class="control-label">Número</label>
	                <input type="text" class="form-control" id="numero" >
	                <app-campo-control-erro 
	                [mostraErro]="verificaValidTouched('numero')" msgErro="Numero é obrigatório">
	            </app-campo-control-erro>  
	              </div>
	              <div class="col">
	                <label for="complemento" class="control-label">Complemento</label>
	                    <input type="text" class="form-control" id="complemento" name="complemento" >
	              </div>
	            </div>
	          </div>
	                
	            </div>

	            <div class="container form-group mb-3"  [ngClass]="aplicaCssErro('rua')"> 
	                <label for="nome" class="form-label">Rua</label>              
	                <input type="text" class="form-control" name="rua" id="rua" placeholder="Rua" >
	                <app-campo-control-erro 
	                [mostraErro]="verificaValidTouched('rua')" msgErro="RUA é obrigatório">
	                </app-campo-control-erro>  
	            </div>

	            <div class="container form-group">
	                <div class="row">
	                  <div class="col" [ngClass]="aplicaCssErro('bairro')">
	                    <label for="bairro" class="control-label">Bairro</label>
	                    <input type="text" class="form-control" id="bairro" name="bairro" >
	                    <app-campo-control-erro 
	                    [ngClass]="aplicaCssErro('bairro')"msgErro="Bairro é obrigatório">
	                </app-campo-control-erro>  
	                  </div>
	                  <div class="col" [ngClass]="aplicaCssErro('cidade')">
	                    <label for="cidade" class="control-label">Cidade</label>
	                <input type="text" class="form-control" id="cidade" name="cidade" >
	                <app-campo-control-erro 
	                [mostraErro]="verificaValidTouched('cidade')"
	                 msgErro="Cidade é obrigatório">
	            </app-campo-control-erro>  
	                  </div>
	                  <div class="col" [ngClass]="aplicaCssErro('estado')">
	                    <label for="bairro" class="control-label">Estado</label>
	                <input type="text" class="form-control" id="Estado" name="estado">
	                <app-campo-control-erro 
	                [mostraErro]="verificaValidTouched('estado')" msgErro="Estado é obrigatório">
	            </app-campo-control-erro>  
	                  </div>
	                </div>
	              </div>
	        </div>
	    
	        <br>
	        
	        <pre><button type="submit" class="btn btn-primary" >Submit</button> <button class="btn btn-secondary" (click)="resetar()">Cancelar</button></pre>       

	        <br>
	        <app-form-debug [form]="formulario"></app-form-debug>
	    </form>
	</div>


	````
- Posterio, vamos adicionar os campos ao nosso formulario
	````typeScript
		this.formulario = this.formBuilder.group({
	      nome: [null, [Validators.required, Validators.min(3), Validators.max(20)]],
	      email: [null, [Validators.required, Validators.email]],
	      cep: [null, Validators.required],
	      numero: [null, Validators.required],
	      complemento: [null],
	      rua: [null, Validators.required],
	      bairro: [null, Validators.required],
	      cidade: [null, Validators.required],
	      estado: [null, Validators.required]
	    })
	````
- Também ajustamos o nosso campo a nossa variavel do typescript
	````html
		<label for="complemento" class="control-label">Complemento</label>
		<input type="text" class="form-control" id="complemento" name="complemento" formControlName="complemento" >
	````
- 


# 10. Formulários reativos: Form groups (agrupando dados)

- [Vídeo Aula](https://youtu.be/k03SAXdp_rE)
- Agrupar campos dentro de um objeto, exemplo do endereço, conforme abaixo:
	````json
		{ "name": null,
		  "email": null,
		  "endereco": {
		    "cep": "",
		    "numero": "",
		    "complemento": "",
		    "rua": "",
		    "bairro": "",
		    "cidade": "",
		    "estado": ""
		  }
		}             
	````
- Criamos o grupo de campos, da seguinte maneira:
	````typeScript
		 this.formulario = this.formBuilder.group({
	      nome: [null, [Validators.required, Validators.min(3), Validators.max(20)]],
	      email: [null, [Validators.required, Validators.email]],
	      endereco: this.formBuilder.group
	      ({
	        cep: [null, Validators.required],
	        numero: [null, Validators.required],
	        complemento: [null],
	        rua: [null, Validators.required],
	        bairro: [null, Validators.required],
	        cidade: [null, Validators.required],
	        estado: [null, Validators.required]
	      })
	    })
	````
- Usando o formGroup, fazemos da seguinte maneira:
	````typeScript
		form.setValue({
          name: form.value.name,
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
	````
- Para organizarmos nas nossas div's e então terminarmos o processo
	````html
		<div formGroupName="endereco">
		</div>
	````
- As validaçoes dos campos do grupo endereço não estão ocorrendo de maneira correta, pq estamos olhando para os campos do formulário de maneira inválida.
	- Hoje olhamos da seguinte maneira:
		- formulario.nome
		- formulario.email
		- formulario.cep (Nao existe)
		- etc...
	- Para ajustarmos isto, passamos da seguinte maneira:
		````html
			<div class="col" [ngClass]="aplicaCssErro('enderedco.cep')">
				<app-campo-control-erro [mostraErro]="verificaValidTouched('endereco.cep')"></app-campo-control-erro>
			</div>
			<div class="col" [ngClass]="aplicaCssErro('endererco.numero')">
				<app-campo-control-erro [mostraErro]="verificaValidTouched('endereco.numero')"></app-campo-control-erro>
			</div>			
			<div class="col" [ngClass]="aplicaCssErro('enderedco.complemento')">
				<app-campo-control-erro [mostraErro]="verificaValidTouched('endereco.complemento')"></app-campo-control-erro>
			</div>
			<div class="col" [ngClass]="aplicaCssErro('endererco.bairro')">
				<app-campo-control-erro [mostraErro]="verificaValidTouched('endereco.bairro')"></app-campo-control-erro>
			</div>
			<div class="col" [ngClass]="aplicaCssErro('enderedco.cidade')">
				<app-campo-control-erro [mostraErro]="verificaValidTouched('endereco.cidade')"></app-campo-control-erro>
			</div>
			<div class="col" [ngClass]="aplicaCssErro('endererco.estado')">
				<app-campo-control-erro [mostraErro]="verificaValidTouched('endereco.estado')"></app-campo-control-erro>
			</div>

		````
- Com isto nossos erros de CSS acabam se complementando. 

# 11. Formulários reativos: Autopopulando endereço com CEP (setValue e patchValue)

- [Vídeo Aula](https://youtu.be/DFH2Mp-K5k0)
- Auto populando em formulários reativos. 
- relembrando, quando o CEP perde o foco, preenchemos os demais campos coorelativos.
- Fizemos alguns ajustes simples na nossa camada de typeScript do componente. conforme abaixo:
	```typeScript
		consultaCEP() {

		  let cep = this.formulario.get('endereco.cep')?.value;
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

		      this.resetaDadosForm();
		      this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados));                     
		     }
		  }
		}

		populaDadosForm(dados: any){

		  this.formulario.patchValue({
		    endereco: {
		      rua: dados.logradouro,
		      cep: dados.cep,           
		      complemento: dados.complemento,
		      bairro: dados.bairro,
		      cidade: dados.localidade,
		      estado: dados.uf
		    }
		  })
		  console.log(this.formulario);

		}

		resetaDadosForm(){
		  this.formulario.patchValue({
		    endereco: {
		      rua: null,
		      complemento: null,
		      bairro: null,
		      cidade: null,
		      estado: null
		    }
		  });

		}
	```
- Fizemos alguns ajustes no formulário, conforme o que aprendemos no template-form
- Metodo patch valure é muito util quando queremos popular muitos campos ao mesmo tempo.
- caso queiramos forçar um campo logo após a saida do campo cep
	````typeScript
	populaDadosForm(dados: any){

		  this.formulario.patchValue({
		    endereco: {
		      rua: dados.logradouro,
		      cep: dados.cep,           
		      complemento: dados.complemento,
		      bairro: dados.bairro,
		      cidade: dados.localidade,
		      estado: dados.uf
		    }
		  });
		  this.formulario.get('nome')?.setValue('Willian');
		  console.log(this.formulario); 
		}	

	````


# 12. Formulários reativos: Verificar validação dos campos com botão submit

- [Vídeo Aula](https://youtu.be/3F8HZKlaL00)
- Validar as validações dos campos com o botao submit.
- Vamos ao clicar no submit, validar todos os campos e mostrar uma mensagem em tela com quais campos ainda devem ser preenchidos.
- Ajustamos a lógica do nosso onSubmit, para validar se todo o formulário está valido:
	````typeScript
		if(this.formulario.valid){    
	    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
	      .subscribe((dados: any) => {
	        console.log(this.formulario);
	        //reseta o form        
	        //this.resetar();
	      },
	      (error: any) => alert('erro'));
	  }  

	  console.log("formulario invalido");
	  Object.keys(this.formulario.controls).forEach(
	    campo => {
	      console.log(campo);
	      const controle = this.formulario.get(campo);
	      controle?.markAsTouched();
	    });
	  //this.formulario.controls
	````
- Com isto temos a validação dos campso nome e email ao clicarmos em submit. Ele sinaliza em tela que aqueles campos não estão valídos.
- Se o nosso formulário não tiver grupamento, a logica citada a cima, serve sem problema.
- Temos grupamento, como faremos?
- Criamos a lógica da seguinte maneira:
	````typeScript
		onSubmit() {
	    //console.log(this.formulario.value);

	    if(this.formulario.valid){    
	    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
	      .subscribe((dados: any) => {
	        console.log(this.formulario);
	        //reseta o form        
	        //this.resetar();
	      },
	      (error: any) => alert('erro'));
	  }  else{
	    console.log("formulario invalido");
	    this.verificaValidacoesForm(this.formulario);
	  
	  //this.formulario.controls
	  } 
	}

	verificaValidacoesForm(formGroup: FormGroup){
	  Object.keys(formGroup.controls).forEach(
	    campo => {
	      console.log(campo);
	      const controle = formGroup.get(campo);
	      controle?.markAsTouched();
	      if(controle instanceof FormGroup){
	        this.verificaValidacoesForm(controle);
	      }
	    });
	  }
	````
- Com isto agora todos os nosso campos acabam por travar e mostrar mensagem de erro.


# 13. Formulários: Criando um serviço de Estados Brasileiros

- [Vídeo Aula](https://youtu.be/MSre76NELHQ)
- Criar um serviço que busca estados brasileiros.
- Para podermos modificar o campo de estado.
- Adicionar novos tipos de controle ao nosso formulário.
- Transformar para um timpo de combo box.
- Precisamos de uma lista de estados. 
- [Lista de Estados](https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json)
- Vamos criar um serviço dentro do shared.
	- ng g s shared/services/dropdown
	- Também colocamos o Dropdown de serviço dentro do providers da nossa service
		````typeScript
			@NgModule({
			  declarations: [
			  FormDebugComponent,
			  CampoControlErroComponent
			  ],
			  imports: [
			    CommonModule
			  ],
			  exports: [
			  FormDebugComponent,
			  CampoControlErroComponent
			  ],
			  providers: [DropdownService]
			})
		````
- Criei um arquivo dentro da pasta assets/dados
	- estadosbr.json
	- Dentro coloquei todos os estados brasileiso pegos no link acima.
- criamos uma interface para realizar o controle da devolutiva do estado
	- ng g i shared/models/estado-br
	- Dentro ajustamos a interface para se adaptar a um exemplo de json
	````typeScript
		export interface EstadoBr {
		    id: number;
		    sigla: string;
		    nome: string;
		}

	````
- interface é apenas a assinatura do que nos pecissamos ter no objeto que vai implementar esta interface.
- Criamos uma variavel que vai fazer o intermedio com o nosso serviço.
	- estados!: EstadoBr[];
	- Também insanciamos dentro do nosso construtor o dropDownService, para podermos utilizar o mesmo
- Posterior Configuramos o nosso serviço no dropdown.Service:
	````typeScript
		getEstadosBR(){
		    //return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');//.pipe();
		    return this.http.get<EstadoBr[]>('/assets/dados/estadosBr.json').pipe();
		  }
	````
- Posterio testamos com um console log para validar se o mesmo esta funcionando
	````typeScript
		this.dropdownService.getEstadosBR().subscribe(dados => {this.estados = dados; console.log(dados)});
	````
- Com isto é retornado todos os estados BR's.

# 14. Formulários: Serviço de consulta CEP + provideIn

- [Vídeo Aula](https://youtu.be/INhj9Rg3VBI)
- Vamos refatorar o serviço de cep
- primeiramente vamos criar o serviço.
	- ng g s sharde/services/consulta-cep
- O Angular é inteligente para entender onde estamos usando os serviços. 
- Declaramos o consulta cep no nosso construtor.
- Criamos o nosso serviço com a seguinte lógica:
	````typeScript
		import { HttpClient } from '@angular/common/http';
		import { Injectable } from '@angular/core';
		import { of } from 'rxjs';

		@Injectable({
		  providedIn: 'root'
		})
		export class ConsultaCepService {

		  constructor(private http: HttpClient) { }

		  consultaCEP(cep: string) {
		    
		    console.log(cep);       

		     cep = cep.replace(/\D/g, '');  

		    if (cep != "") {
		  
		      var validacep = /^[0-9]{8}$/;  

		       if(validacep.test(cep)){  
		        
		        return this.http.get(`//viacep.com.br/ws/${cep}/json`);                     
		       }
		    }
		    return of({});
		  }

		}

	````
- Posterior ajustamos o nosso consultaCEP dentro da nossa data-form.component
	````typeScript
		consultaCEP() {

		  let cep = this.formulario.get('endereco.cep')?.value;
		 
		  if (cep != null && cep !== '') 
		  {
		    this.cepService.consultaCEP(cep)?.subscribe(dados => this.populaDadosForm(dados));                     
		  }
		}		
	````
- Ao testarmos validamos que o serviço está funcionando.
- Sempre importante refatorar o código e criar serviços para melhor organização do código.

# 15. Formulários reativos: Combobox simples (select)

- [Vídeo Aula](https://youtu.be/SGvZ1O4VLYU)
- A ideia é adaptarmos o nosso campo texto que hoje é o estado e mudarmos para um select em html
- fizemos o seguinte ajuste no nosso html para gerar um select dos estados do nosso json
	```typeScript
		<select  class="form-control" id="estado" name="estado" formControlName="estado">
                  <option *ngFor="let estado of estados" [value]="estado.sigla">{{ estado.nome }}</option>
                </select>
	```
- Com isto nos trazemos os estados em tela e também setamos as variaveis que queremos ao mesmo.
- Se pesquisarmos um cep de algum lugar, o estado devera preencher automaticamente conforme o CEP
- Para evitarmos vazamento de dados. 
- primeiramente atualizamos o nosso html como async:
	````html
		<select  class="form-control" id="estado" name="estado" formControlName="estado">
                  <option *ngFor="let estado of estados | async" [value]="estado.sigla">{{ estado.nome }}</option>
                </select>
	````
- posterior ajustamos o nosso objeto estado e a nossa chamada
	````typeScript
		estados!: Observable <EstadoBr[]>;

		 ngOnInit(){

    		this.estados = this.dropdownService.getEstadosBR();
		}		
	````
- Com isto acabamos por destruir os dados após o uso.
- pipe async faz o subscribe e o unsubscrime

# 16. Formulários reativos: Combobox com Objeto (ngValue e compareWith)

- [Vídeo Aula](https://youtu.be/eeElkzR2gd4)
- Combo Box ou select. 
- trabalhar com Objetos complexos
- Ao invez de usarmos a sigla e sim um objeto para o servidor.
	- Algumas linguagens de BackEnd precisam do objeto mapeado.
- PAra trabalharmos com este exemplo, criamos uma função dentro do dropdown.service
	````typeScript
		getCargos(){
		    return[
		      {nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
		      {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
		      {nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'},
		    ];
		  }
	````
- Ajustamos o nosso HTML para mostrar os cargos de DEV
	````html
		<div class="form-group">
      <div class="col" [ngClass]="aplicaCssErro('cargo')">
        <label for="bairro" class="control-label">Cargo</label>
        <select class="form-control" id="cargo" name="cargo" formControlName="cargo">
          <option *ngFor="let cargo of cargos" [value]="cargo">{{ cargo.desc }}</option>
        </select>
        <app-campo-control-erro [mostraErro]="verificaValidTouched('cargo')" msgErro="Cargo é obrigatório">
        </app-campo-control-erro>
      </div>
    </div>
	````
- Também criamos uma variavel que recebe o serviço e inicializamos ela com o serviço. 
- Atualmente o angular somente olha para a referencia na memória.
	- Se quisermos que o Angular olhe para as propriedades do objeto, temos que fazer alguns ajustes.
	- Por padrao o angular verificar o endereço de memoria.
- ngValue
	- Aplicamos dentro do html no lugar do value
	- [value]="cargo.cargo"
- Depois temos que comparar o valor do select com o valor do serviço
- Criamos a seguinte função no nosso html
	````html
		<div class="container form-group">
	      <div class="row">
	      <div class="col" [ngClass]="aplicaCssErro('cargo')">
	        <label for="bairro" class="control-label">Cargo</label>
	        <select class="form-control" id="cargo" name="cargo" formControlName="cargo" [compareWith]="compararCargos">
	          <option *ngFor="let cargo of cargos" [ngValue]="cargo">{{ cargo.desc }}</option>
	        </select>
	        <app-campo-control-erro [mostraErro]="verificaValidTouched('cargo')" msgErro="Cargo é obrigatório">
	        </app-campo-control-erro>
	      </div>
	      <div class="col" ></div>
	      <div class="col" ></div>
	    </div>
	    </div>
	````
- Ajustamos a mensagem comprarCargos
	````typeScript
		compararCargos(obj1: any, obj2: any){  
		  //console.log(obj1)
		  return obj1 && obj2 ? (obj1.nivel === obj2.nivel) : obj1 === obj2;
		    }
	````
- Agora ao selecionarmos o combo o mesmo mostra na tela os valores selecionados de forma correta.


# 17. Formulários reativos: Combobox Múltiplo (Select Multiple)

- [Vídeo Aula](https://youtu.be/VDwVe543Ff4)
- Combo box com multiplas opções
- Deixar que o usuário escolha mais de uma opção.
- Vamos criar um serviço para retornar tecnologias
	````typeScript
		getTecnologias(){
	    return[
	      {nome: 'java', desc: 'Java'},
	      {nome: 'javascript', desc: 'JavaScript'},
	      {nome: 'php', desc: 'PHP'},
	      {nome: 'ruby', desc: 'Ruby'},
	    ];
	  }
	````
- Criamos uma variavel e recebmos o serviço na mesma
	````typeScript
		constructor(
	    private formBuilder: FormBuilder, 
	    private http: HttpClient,
	    private dropdownService: DropdownService,
	    private cepService: ConsultaCepService ){

	  }

	  ngOnInit(){

	    this.tecnologias = this.dropdownService.getTecnologias();

	    this.cargos = this.dropdownService.getCargos();

	    this.estados = this.dropdownService.getEstadosBR();
	````
- Inicializamos o campo no nosso fonte.
- criamos um botão para receber as tecnologias
	````html
		<div class="col" >
	        <label for="tecnologia" class="control-label">Tecnologia</label>
	        <select multiple class="form-control" id="tecnologia" name="tecnologia" formControlName="tecnologia" [compareWith]="compararCargos">
	          <option *ngFor="let tecnologia of tecnologias" [value]="tecnologia">{{ tecnologia.nome }}</option>
	        </select>
	        <app-campo-control-erro [mostraErro]="verificaValidTouched('tecnologia')" msgErro="Cargo é obrigatório">
	        </app-campo-control-erro>
	      </div>
	````
- Criamos um botão para setarmos tecnologias
	````html
		<button class="btn btn-secondary" (click)="setarTecnologias()">Tecnologias</button>
	````
- Posterior criamos a nossa função para setar tecnologias
	````typescript
		setarTecnologias() {  
  this.formulario.get('tecnologia')?.setValue(['java', 'javascript', 'php']);
  }
	````

# 18. Formulários reativos: Radio Button (Botão do tipo Rádio)

- [Vídeo Aula](https://youtu.be/-S8avgRBW-E)
- Radio Button.
- Conseguimos escolher somente uma opção
- Segue muito parecido com os demais fluxos do formulário
- Criamos primeiramente o serviço para setarmos o nosso radio
	````typeScript
		getNewsletter() {
	    return [
	      { id:1, valor:'S', desc: 'Sim' },
	      { id:0, valor:'N', desc: 'Não' },
	    ];
	  }
	````
- Criamos as variavies dentro do formulário e para receber a chamada do serviço
	````typeScript
		formulario!: FormGroup;  
		  estados!: Observable <EstadoBr[]>;
		  cargos!: any[];
		  tecnologias!: any[];
		  newsletterop!: any[];

		  constructor(
		    private formBuilder: FormBuilder, 
		    private http: HttpClient,
		    private dropdownService: DropdownService,
		    private cepService: ConsultaCepService ){

		  }

		  ngOnInit(){

		    this.tecnologias = this.dropdownService.getTecnologias();

		    this.cargos = this.dropdownService.getCargos();

		    this.estados = this.dropdownService.getEstadosBR();

		    this.newsletterop = this.dropdownService.getNewsletter();
	````
- Posterior criamos o nosso html
	````html
		<div class="col" [ngClass]="aplicaCssErro('newsletter')">
        <label for="newsletter" class="control-label">NewsLetter</label>
        <div id="newsletter" class="row">
          <div class="col-sm-4" *ngFor="let item of newsletterop"> 
            <label for="" class="radio-inline">         
              <input type="radio" [value]="item.valor" formControlName="newsletterop" name="newsletterop"/>{{ item.desc}}
            </label>
          </div>
        </div>        
      </div>     
	````
- Com isto conseguimos marcar as opções sim e não e as mesmas são setadas no nosso formulário.


# 19. Formulários reativos: Checkbox Toggle

- [Vídeo Aula](https://youtu.be/gQYZ6gmXZjU)
- Trabalhar com checkbox toggle.
- Exemplo Aceita os termos.
- Criamos o seguinte campo HTML
	````html
		<div class="form-group">
      <div class="col-md-3" [ngClass]="aplicaCssErro('termos')">
        <div class="checkbox">
          <label class="checkbox-inline">
            <input type="checkbox" formControlName="termos"> Aceito os termos.
          </label>
          <app-campo-control-erro [mostraErro]="!formulario.get('termo')?.valid" msgErro="Termo é Obrigatório.">
          </app-campo-control-erro>
        </div>
      </div>
    </div>
	````
- Arrumamos o serviço
	````TypeScript
		getNewsletter() {
    return [
      { id:1, valor:'S', desc: 'Sim' },
      { id:0, valor:'N', desc: 'Não' },
    ];
  }
	````
- E ajustamos as variaveis e recebemos o serviço
	````typeScript
		 constructor(
	    private formBuilder: FormBuilder, 
	    private http: HttpClient,
	    private dropdownService: DropdownService,
	    private cepService: ConsultaCepService ){

	  }

	  ngOnInit(){

	    this.tecnologias = this.dropdownService.getTecnologias();

	    this.cargos = this.dropdownService.getCargos();

	    this.estados = this.dropdownService.getEstadosBR();

	    this.newsletterop = this.dropdownService.getNewsletter();

	````

# 20. Formulários reativos: FormArray: Checkboxes Dinâmicos

- [Vídeo Aula](https://youtu.be/U2aUXay7hZc)
- Grupos de checkBox, que são dinamicos
- Usuário marcar um de muitos checkbox's
- Criamos uma variavel   frameworks = ['Angular', 'React', 'Vue', 'Sencha'];
- Enviar o valor para o servidor.
- Criamos um campo em HTML
	````html
<div class="checkbox" class="col-sm-4" formArrayName="frameworks"
        *ngFor="let item of getFrameworksControls(); let i = index">
          <label class="checkbox-inline">
            <input type="checkbox" [formControlName]="i"> {{ frameworks[i] }}
          </label>
          <!-- <app-campo-control-erro [mostrarErro]="!formulario.get('frameworks')?.valid"
          [msgErro]="'Por favor, aceite os termos'">
          </app-campo-control-erro><br> -->
        </div>      
	````
- Criamos um buildFrameworks
	````typeScript
		frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

		ngOnInit(){
			frameworks: this.buildFrameworks()
		}
		getFrameworksControls() {    

		  return this.formulario.get('frameworks') ? (<FormArray>this.formulario.get('frameworks')).controls : null;
		  }

		  buildFrameworks() {
		    const values = this.frameworks.map(v => this.formBuilder.control(false));
		    //return this.formBuilder.array(values);
		    return this.formBuilder.array(values);
		     /*this.formBuilder.array( [
		      new FormControl(false), // angular
		      new FormControl(false), // react
		      new FormControl(false), // vue
		      new FormControl(false) // sencha
		    ]);*/
		  }

		  onSubmit() {

		    console.log(this.formulario.value);

		    let valueSubmit = Object.assign({}, this.formulario.value);

		    valueSubmit = Object.assign(valueSubmit, {
		      frameworks: valueSubmit.frameworks.map((v: any, i: any) => v ? this.frameworks[i] : null)
		      .filter((v: null) => v !== null)
		    });    

		    console.log(valueSubmit)

	````
- Esta aula foi confusa em função das versões do angular e 
- O resultado final foi que conseguimos selecioanr os cheks das opções e enviar as mesmas para o servidor.
    


# 21. Formulários reativos: Validação Customizada (FormArray Checkboxes)

- [Vídeo Aula](https://youtu.be/hkiTMaeICmw)
- Criar uma validação para que o usuário precise marcar pelo menos um.
- Caso não marque 1, de mensagem de erro.
- Criar qualquer tipo de validação no angular.
	- Criar através de uma função
	- Podemos criar a nossa própria API para validações.
- Vamos criar uma regra para que se o valor marcado for ture a gente adiciona ao nosso check. Caso não seja, não adicionamos.
- Criamos a seguinte valida;'ao
	````typeScript
		requiredMinCheckbox(min = 1){
	    const validator = (formArray: FormArray) =>{
	      const values = formArray.controls;
	      let totalChecked = 0;
	      for(let i = 0; i< values.length; i++){
	        if(values[i].value){
	          totalChecked +=1;
	        }
	      }
	      return totalChecked >= min ? null : {required: true};
	    };
	    return validator;

	  }
	````
- Posterior ajustamos o nosso hmtl para mostrar o alerta via CSS
	````html
		<div class="checkbox" class="col-sm-4" formArrayName="frameworks"
      *ngFor="let item of getFrameworksControls(); let i = index">
      <label class="checkbox-inline">
        <input type="checkbox" [formControlName]="i"> {{ frameworks[i] }}
      </label>
    </div>
    <app-campo-control-erro [mostraErro]="!formulario.get('frameworks')?.valid"
      [msgErro]="'Por favor, selecione uma opção'">
    </app-campo-control-erro><br>
	````
- Posterior criamos uma classe de validação compartilhada
	- form-validations.ts
	- Dentro colocamos a nossa classe requiredMinCheckbox.
		````typeScript
			import { AbstractControl, FormArray } from "@angular/forms";

			export class FormValidations{

			    static requiredMinCheckBox(min =1){
			        const validator = (formArray: AbstractControl) => {
			          if(formArray instanceof FormArray){
			            const totalChecked = formArray.controls.map(v => v.value)
			              .reduce((total: number, atual: number) => (atual ? total + atual : total), 0);
			            return totalChecked >= min ? null : {required: true};
			          }
			          throw new Error('formArray is not an instance of FormArray');
			        };
			        return validator;
			      }

			}
		````
- Realizamos as importações e com isto temos a validação de quantidade minima que deve ser marcada.


# 22. Formulários reativos: Validação Customizada (CEP)

- [Vídeo Aula](https://youtu.be/7Z8TCVDImTg)
- Validação para o campo CEP customizada.
- Vamos criar a validação dentro do formvalidation.
- Criamos uma validação para o cep
	````typeScript
		static cepValidator(control: FormControl) {

        const cep = control.value;
        if (cep && cep !== '') {
          const validacep = /^[0-9]{8}$/;
          return validacep.test(cep) ? null : { cepInvalido : true };
        }
        return null;
      }
	````
- Colocamos a validação dentro do nosso campo
	````html
		 <div class="col" [ngClass]="aplicaCssErro('enderedco.cep')">
              <label for="cep" class="control-label">CEP</label>
              <input type="text" class="form-control" id="cep" formControlName="cep" (blur)="consultaCEP()">
              <app-campo-control-erro [mostraErro]="!verificaRequired('endereco.cep')" msgErro="CEP está no Formato Errado">
              </app-campo-control-erro>
              <app-campo-control-erro [mostraErro]="!formulario.get('endererco.cep')?.hasError('cepinvalido')" msgErro="CEP é obrigatório">
              </app-campo-control-erro>
            </div>
	````
- Com isto ao colocarmos letras no nosso CEP temos a critica de erro


# 23. Formulários reativos: Validação entre dois campos (confirmar email)

- [Vídeo Aula](https://youtu.be/34SUX2dF-vU)
- Validação customizada
- Confirmação de e-mail.
- Criamos um novo campo de email
	````typeScript
		confirmarEmail: [null, [Validators.required, Validators.email]],
	````
- Ajustamos o nosso campo html
	````html
		<div class="form-group mb-3" [ngClass]="aplicaCssErro('confirmarEmail')">
	      <div class="col-sm-12">
	        <label for="confirmarEmail" class="form-label">Confirmar Email</label>
	      </div>
	      <div class="col-sm-12">
	        <input type="confirmarEmail" class="form-control" formControlName="confirmarEmail" id="confirmarEmail" placeholder="nome@email.com">
	        <app-campo-control-erro
	          [mostraErro]="verificaValidTouched('confirmarEmail')"
	          msgErro="Confirmar Email é obrigatório">
	        </app-campo-control-erro>
	        <app-campo-control-erro
	          [mostraErro]="verificarEmailInvalido()"
	          msgErro="Confirmar Email Inválido">
	        </app-campo-control-erro>
	        <app-campo-control-erro [mostraErro]="verificarEmailInvalido()" msgErro="Email Invalido">
	        </app-campo-control-erro>
	      </div>
	    </div>
	````
- Criamos uma função para validar se os campos são equals dentro do nosso validation
	````typescript
		static equalsTo(otherField: string) {
        const validator = (formControl: FormControl) => {
          if (otherField == null) {
            throw new Error('É necessário informar um campo.');
          }
    
          if (!formControl.root || !(<FormGroup>formControl.root).controls) {
            return null;
          }
    
          const field = (<FormGroup>formControl.root).get(otherField);
    
          if (!field) {
            throw new Error('É necessário informar um campo válido.');
          }
    
          if (field.value !== formControl.value) {
            return { equalsTo : otherField };
          }
    
          return null;
        };
        return validator;
    }
	````
- Posterior voltamos a ajustar as mensagens de erro do nosso validations
	````html
		<div class="form-group mb-3" [ngClass]="aplicaCssErro('confirmarEmail')">
	      <div class="col-sm-12">
	        <label for="confirmarEmail" class="form-label">Confirmar Email</label>
	      </div>
	      <div class="col-sm-12">
	        <input type="confirmarEmail" class="form-control" formControlName="confirmarEmail" id="confirmarEmail" placeholder="nome@email.com">
	         <app-campo-control-erro [mostraErro]="!!formulario.get('confirmarEmail')?.hasError('equalsTo')" msgErro="Emails devem ser iguais">
	        </app-campo-control-erro>
	      </div>
	    </div>
	````
- Quando feito isto, conseguimos ver que se os e-mails são diferentes acusa mensagem na tela. 
- [Varios pacotes de validations](https://github.com/yuyang041060120/ng2-validation)


# 24. Formulários reativos: Validação Assíncrona

- [Vídeo Aula](https://youtu.be/wLTd-8lRNvY)
- Validações Assincronas
- Validar informações no backEnd, fazendo uma validação assincrona
- Vamos fazer uma validação no back se o email existe. 
- Criamos o arquivo verificarEmail.json
	````json
		{
		  "emails": [
		    { "email": "email@email.com"},
		    { "email": "email1@email.com"},
		    { "email": "email2@email.com"},
		    { "email": "email3@email.com"},
		    { "email": "email4@email.com"},
		    { "email": "email5@email.com"}
		  ]
		}
	````
- criamos a pasta service dentro do data-form
- Criamos o servo verifica-email
	````typeScript
		import { Injectable } from '@angular/core';
		import { HttpClient } from '../../../../node_modules/@angular/common/http';
		import { map, tap, delay } from 'rxjs/operators';
		import { Observable } from 'rxjs';

		@Injectable({
		  providedIn: 'root'
		})
		export class VerificaEmailService {

		  constructor(private http: HttpClient) { }

		  verificarEmail(email: string): Observable<boolean> {
		    return this.http.get<{ emails: any[] }>('assets/dados/verificarEmail.json')
		    .pipe(
		      delay(3000),
		      map((dados) => dados.emails),
		      map((dados: { email: string }[]) => dados.filter(v => v.email === email)),
		      map((dados: any[]) => dados.length > 0 )
		    );
		  }
		}
	````
- Validamos via XHR do dev console e o mesmo está funcionando. 
- Criamos uma classe validarEmail:
	````typeScript
		validarEmail(formControl: FormControl) {
	    return this.verificaEmailService.verificarEmail(formControl.value)
	      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
	  }
	````
- colocamos a validação dentro do formulário. Também dizemos que ele deve olhar para a validação 
- Colocamos diversas validações no campo do e-mail
	````html
		<div class="col-sm-12">
        <input type="email" class="form-control" formControlName="email" id="email" placeholder="nome@email.com">
        <app-campo-control-erro
          [mostraErro]="!formulario.controls['email'].valid && formulario.controls['email'].touched"
          msgErro="Email é obrigatório">
        </app-campo-control-erro>
        <app-campo-control-erro [mostraErro]="verificarEmailInvalido()" msgErro="Email Invalido">
        </app-campo-control-erro>
        <app-campo-control-erro [mostraErro]="formulario.get('email')?.status === 'PENDING'" msgErro="Validando Email">
        </app-campo-control-erro>
        <app-campo-control-erro [mostraErro]="formulario.get('email')?.status === 'VALID'" msgErro="Email Valido">
        </app-campo-control-erro>
        <app-campo-control-erro [mostraErro]="!!formulario.get('email')?.hasError('emailInvalido')" msgErro="Email Ja cadastrado">
        </app-campo-control-erro>
      </div>
	````
- utilizamos a propriedade delay(3000), para não gerar requisições diretas para o servidor.
	- Termos um intervalo

# 25. Formulários reativos: Serviço de Mensagens de Erros

- [Vídeo Aula](https://youtu.be/LJPKRsr9MQg)
- Serviço de mensagem de erros
- todas a smensagens de erro possam ser mostradas de forma consistente. 
- Muitas pessoas trabalhando no projeto, perdemos a consistencia do projeto. 
- Vamos criar um novo campo que vai gerenciar estas mensagens. 
- Vamos criar o componente error-msg
	- ng g c shared/error-msg
- colocamos o componente no export para podermos utilizar em todos os locais (shared.model)
- Fizemos diversos ajustes no nosso novo campo
	````css
		.erroDiv{
		    margin-bottom: 0px;
		}
	````
	````html
		<div class="alert alert-danger " *ngIf="mostraErro">
		    {{ msgErro }}
		</div>
	````
	````typeScript
		import { Component, Input } from '@angular/core';

		@Component({
		  selector: 'app-error-msg',
		  templateUrl: './error-msg.component.html',
		  styleUrls: ['./error-msg.component.css']
		})
		export class ErrorMsgComponent {
		  
		  @Input() mostraErro!: boolean;
		  @Input() msgErro!: string;

		}

	````
- Fizemos um teste e o fluxo funcionou. 
- Vamos passar as nossas validações para dentro da classe error-msg
- Criamos um get, que não vai passar um set metodo; 
- Sempre vai ser mostrado o primeiro erro de validações.
	- Assimm não mostramos dois erros ao mesmo tempo
- Criamos primeiramente uma classe de mensagens dentro do nosso form-validaton
	````typeScript
		static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        const config: { [key: string]: string } = {
          'required': `${fieldName} é obrigatório.`,
          'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
          'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
          'cepInvalido': 'CEP inválido.',
          'emailInvalido': 'Email já cadastrado!',
          'equalsTo': 'Campos não são iguais',
          'pattern': 'Campo inválido'
        };
    
        return config[validatorName];
      }
	````
- Com isto temos a mesma mensagem de validação
- Posterior criamos um get errorMessage, par apegarmos os erros Dentro de erro-msg.component
	````typeScript
		get errorMessage() {

		    for (const propertyName in this.control.errors) {
		      if (this.control.errors.hasOwnProperty(propertyName) &&
		        this.control.touched) {
		          // todo
		        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
		        }
		    }
		    return null;
		  }
	````
- Fizemos um ajuste no nosso css para olhar para esta nova forma de erro:
	````html
			<div class="alert alert-danger " *ngIf="errorMessage">
			    {{ errorMessage }}
			</div>
	````
- posterior ajustamos o nosso html para para mostrar os novos erros.
	````html
		<app-error-msg [control]="formulario.get('nome')!" label="Nome">          
        </app-error-msg>
	````
	````typeScript
	  	@Input() control!: AbstractControl;
  		@Input() label!: string;

  		constructor() { }

		  ngOnInit() {
		  }

		  get errorMessage() {

		    for (const propertyName in this.control.errors) {
		      if (this.control.errors.hasOwnProperty(propertyName) &&
		        this.control.touched) {
		          // todo
		        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
		        }
		    }
		    return false;
		  }

	````
- Com isto agora temos um erro por vêz de um determinado problema

# 26. Formulários reativos: Reagindo à mudanças reativamente

- [Vídeo Aula](https://youtu.be/pAGAtspXnyc)
- Aprender pq os formulários reativos são reativos.

# 27. Formulários reativos: Campo input customizado (ControlValueAcessor)

- [Vídeo Aula]()

# 28. Formulários reativos: Classe base para Forms (herança no Angular)

- [Vídeo Aula]()

# 29. Formulários reativos: Combobox aninhado: Estado + Cidade

- [Vídeo Aula]()
