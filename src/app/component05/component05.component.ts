import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component05',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component05.component.html',
  styleUrl: './component05.component.scss'
})
export class Component05Component {

  //vetor de nomes
  nomes:string[] = ['Ariane', 'Bruna', 'Caio', 'Denis'];


}
