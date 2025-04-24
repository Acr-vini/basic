import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.scss'
})
export class Component03Component {

  imagem:string = "assets/dia.jpeg"
    alterarImagem() {
      if(this.imagem === "../../assets/dia.jpeg") {
        this.imagem = "../../assets/noite.jpeg"
      }else{
        this.imagem = "../../assets/dia.jpeg"
      }
    }
}
