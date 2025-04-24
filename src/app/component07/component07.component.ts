import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.scss'
})
export class Component07Component {

  //variavel lógica

  condicao:boolean = false;

  //lista de aprovados e reprovados
  lista:string[] = ['Aprovado', 'Aprovado', 'Reprovado'];

}
