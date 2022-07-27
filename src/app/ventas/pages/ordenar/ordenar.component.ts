import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  mayusculasActivadas:boolean=false;
  ordenarPor: string = "";
  heroes:Heroe[]=[
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Superman",
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: "Aquaman",
      vuela: false,
      color: Color.azul
    },
    {
      nombre: "Green Lantern",
      vuela: true,
      color: Color.verde
    }
  ]

  alternarMayusculas(){
    this.mayusculasActivadas=!this.mayusculasActivadas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
  }

}
