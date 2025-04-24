import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.scss'
})
export class Component04Component {

  //váriavel para exibir ou ocultar o quadrado
  exibir:boolean = true;

  //função para exibir ou ocultar o quadrado
  acao () {
    if(this.exibir === true) {
      this.exibir = false;
    }else {
      this.exibir = true;
    }
  }

}
