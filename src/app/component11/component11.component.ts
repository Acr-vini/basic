import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../model/Person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.scss'
})
export class Component11Component {

// Obj de formulário

formulario = new FormGroup ({
  nome  : new FormControl('', [Validators.required, Validators.minLength (3)]),
  idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(122)]),
  cidade: new FormControl('', [Validators.required, Validators.minLength (4)]),

})

// Visibilidade dos botões
btnCadastrar: boolean = true;

// Vetor
vetor:Person[] = []

// Armazenar indice da pessoa selecionada
indice:number = -1;

// Função de cadastro
cadastrar(){
  // Cadastro no vetor
  this.vetor.push(this.formulario.value as Person);

  // Limpeza dos inputs
  this.formulario.reset();

  // Visualização via console
 // console.table(this.vetor)
}

// Função de seleção
selecionar(indice:number) {

  // Atribuir o indice da pessoa
  this.indice = indice;

  // Atribuir os dados da pessoa no formulário
  this.formulario.setValue({
    nome : this.vetor[indice].nome,
    idade: this.vetor[indice].idade,
    cidade: this.vetor[indice].cidade

  });

  // Visibilidade dos botões
  this.btnCadastrar = false;
}

// Função de alteração
alterar() {
  // Alterar vetor
  this.vetor[this.indice] = this.formulario.value as Person;

  // Limpar os inputs
  this.formulario.reset();

  // Visibilidade dos botões
  this.btnCadastrar = true
}

  // Função de remoção
  remover() {

    // Removendo pessoa do vetor
    this.vetor.splice(this.indice, 1);

    // Limpeza dos inputs
    this.formulario.reset();

    // Visibilidade dos botões
    this.btnCadastrar = true;

  }

    // Função cancelar
    cancelar() {

      // Limpeza dos inputs
      this.formulario.reset();

      // Visibilidade dos botões
      this.btnCadastrar = true;
    }
}
