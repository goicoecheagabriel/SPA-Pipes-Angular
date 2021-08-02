import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';



@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nSelect
  nombre: string = "Marcela";
  genero: string = "femenino";
  
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }
  
  // i18nPrural
  clientes: string[] = ['María', 'Pedro', 'Hernando','Eduardo' , 'Fernando'];
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos 1 cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.',
  }

 cambiarCliente(){
   console.log('Apretamos el cambiar Cliente')
   this.nombre = 'Iñaki';
   this.genero = 'masculino'
 }

 eliminarCliente(){
   if( this.clientes.length <= 0 ){
     console.log('No hay clientes disponibles');
     return;
  }
  this.clientes.pop();
 }

 // KeyValue Pipe
 persona = {
   nombre: 'Fernando',
   edad:45,
   direccion:'Ottawa, Canadá'
 }

 // Jsoon Pipe
 heroes = [
   {
     nombre: 'Superman',
     vuela: true
   },
   {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
 ]

 // Async Pipe
 miObservable = interval(2000)

 valorPromesa = new Promise((resolve, reject)=>{
   setTimeout(() => {
     resolve( 'Tenemos data de promesa' );
   }, 3500);
 })

}
