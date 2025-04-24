import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.scss'
})
export class Component08Component {

  // Váriavel de média
  media:number = 3;

  // Vetor
  nomes:string[] = ['Ralf', 'Ana', 'Danilo', 'Camila'];

  // Linguagem
  linguagem:string = 'HTML';

}
