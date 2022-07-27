import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombresMapa=[
    "David",
    "Maria"
  ]
  generosMapa=[
    "masculino",
    "femenino"
  ]
  nombreMapaPos=0;
  generosMapaPos=0;
  nombre:string = this.nombresMapa[this.nombreMapaPos];
  genero:string = this.generosMapa[this.generosMapaPos];
  invitacionMapa = {
    "masculino":"invitarlo",
    "femenino":"invitarla"
  }

  cambiarPersona(){
    this.nombreMapaPos==0 ? this.nombreMapaPos=1 : this.nombreMapaPos=0;
    this.generosMapaPos==0 ? this.generosMapaPos=1 : this.generosMapaPos=0; 
    this.nombre = this.nombresMapa[this.nombreMapaPos];
    this.genero = this.generosMapa[this.generosMapaPos];
  }

  // i18nPlural
  clientes:string[]=["Maria","Pedro","Juan","Lorena"];
  clientesMapa = {
    "=0":"no tenemos ningun cliente esperando.",
    "=1":"solo tenemos un cliente esperando.",
    "other":"tenemos # clientes esperando."
  }

  borrarCliente(){
    this.clientes.splice(this.clientes.length-1);
  }

  ingresarCliente(){
    this.clientes.push(Math.random().toString(36).slice(2, 7));
  }

  // KeyValue Pipe
  persona={
    nombre: "David",
    edad:36,
    direccion: "Santurtzi, Bizkaia"
  }

  // JsonPipe
  heroes=[
    {
      nombre: "Batman",
      vuela: false
    },
    {
      nombre: "Superman",
      vuela: true
    },{
      nombre: "Aquaman",
      vuela: false
    }    
  ]

  // Async pipe
  miObservable = interval(5000);  //0,1,2,3,4,...
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("Tenemos data de la promesa");
    }, 3500);
  });

}
