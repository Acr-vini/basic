import { Component } from '@angular/core';

@Component({
  selector: 'app-component01',
  standalone: true,
  imports: [],
  templateUrl: './component01.component.html',
  styleUrl: './component01.component.scss'
})
export class Component01Component {

    nome:string = "vini";
    idade:number = 20;

}
