import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { Observable, distinctUntilChanged, empty, map, of, switchMap, tap } from 'rxjs';
import { FormValidations } from '../shared/form-validations';
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidades';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit{


  //formulario!: FormGroup;  
  estados!: Observable <EstadoBr[]>;
  cargos!: any[];
  tecnologias!: any[];
  newsletterop!: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];
  cidades!: Observable <Cidade[]>;
  cidades$: any;
  //verificaEmailService: any;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
     ){
  super();
  }

  ngOnInit(){

    this.tecnologias = this.dropdownService.getTecnologias();

    this.cargos = this.dropdownService.getCargos();

    this.estados = this.dropdownService.getEstadosBR();

    this.newsletterop = this.dropdownService.getNewsletter();
    
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group
      ({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),

      cargo: [null],
      tecnologia: [null],
      newsletterop: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()

    });

    /*this.formulario.get('endereco.cep')?.statusChanges
    .subscribe(value => console.log('status CEP:', value));*/

    this.formulario.get('endereco.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status => status === 'VALID' ?
          this.cepService.consultaCEP(this.formulario.get('endereco.cep')?.value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaDadosForm(dados) : {});

    this.dropdownService.getCidades(8).subscribe(console.log);

    this.cidades =  this.dropdownService.getCidades(8);
    //console.log(this.formulario.get('endereco.estado')?.value)

    this.formulario.get('endereco.estado')?.valueChanges
    .pipe(
      switchMap(sigla => this.estados.pipe(
        map(estados => estados.filter(estado => estado.sigla === sigla)),
        tap(console.log),
        map(estados => estados[0]?.id),
        switchMap(id => this.dropdownService.getCidades(id))
      ))
    )
    .subscribe((cidades: Cidade[]) => {
      console.log('Cidades retornadas:', cidades);
      this.cidades$ = of(cidades); // Use of para criar um novo Observable com o valor emitido
    });

    
  }

  getFrameworksControls() {    
    return this.formulario.get('frameworks') ? (<FormArray>this.formulario.get('frameworks')).controls : null;
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => this.formBuilder.control(false));    
    return this.formBuilder.array(values, FormValidations.requiredMinCheckBox(1) )
     /*this.formBuilder.array( [
      new FormControl(false), // angular
      new FormControl(false), // react
      new FormControl(false), // vue
      new FormControl(false) // sencha
    ]);*/
  }

 /* requiredMinCheckbox(min = 1){
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

  }*/
  


  submit(){
    
    console.log(this.formulario.value);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks.map((v: any, i: any) => v ? this.frameworks[i] : null)
      .filter((v: null) => v !== null)
    });    

    console.log(valueSubmit)

    this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
      .subscribe((dados: any) => {
        console.log(this.formulario);
        //reseta o form        
        //this.resetar();
      },
      (error: any) => alert('erro'));
      

  }


  //onSubmit() {}

/*verificaValidacoesForm(formGroup: FormGroup){
  Object.keys(formGroup.controls).forEach(
    campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsTouched();
      if(controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    });
  }*/

/*aplicaCssErro(campo: string){

    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
  }
}
*/
/*verificaValidTouched(campo: string){

  return !!(this.formulario.get(campo)?.touched && !this.formulario.get(campo)?.valid);

  return !!(
    (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty) &&
    !this.formulario.get(campo)?.valid
  );
}*/


/*verificaRequired(campo: string){

  return !!(this.formulario.get(campo)?.hasError('required') && !this.formulario.get(campo)?.valid);

}*/


verificarEmailInvalido(){ 
  
 return this.formulario.get('email')?.errors && (this.formulario.get('email')?.touched) || false;
  /*if(this.formulario.get('email')?.errors && (this.formulario.get('email')?.touched)){
    console.log(this.formulario.get('email')?.errors)
    return true;
  }
  return false;  */
}

/*resetar(){
  this.formulario.reset();
}*/

/*
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
*/

consultaCEP() {

  let cep = this.formulario.get('endereco.cep')?.value;
 
  if (cep != null && cep !== '') 
  {
    this.cepService.consultaCEP(cep)?.subscribe(dados => this.populaDadosForm(dados));                     
  }
  
  /*{

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

     //Valida o formato do CEP.
     if(validacep.test(cep)){

      this.resetaDadosForm();
      this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados));                     
     }
  }*/
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
  });
  this.formulario.get('nome')?.setValue('Willian');
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

setarCargo() {
  const cargo = {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'};
  this.formulario.get('cargo')?.setValue(cargo);
  }

compararCargos(obj1: any, obj2: any){  
  //console.log(obj1)
  return obj1 && obj2 ? (obj1.nivel === obj2.nivel) : obj1 === obj2;
    }

setarTecnologias() {  
  this.formulario.get('tecnologia')?.setValue(['java', 'javascript', 'php']);
  }

validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }
}
