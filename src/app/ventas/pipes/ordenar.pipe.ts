import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor:string = 'sin valor'): Heroe[] {

    switch (ordenarPor) {
      case 'nombre':
          heroes.sort( (a: Heroe, b: Heroe)=>{
            return (a.nombre > b.nombre)
              ? 1
              : -1;
          } );
        break;

      case 'vuela':
          heroes.sort( (a: Heroe, b: Heroe) =>{
            return (a.vuela > b.vuela)
              ? -1
              : 1;
          } )
      break;

      case 'color':
          heroes.sort( (a: Heroe, b: Heroe) =>{
            return (a.color > b.color)
              ? 1
              : -1;
          } )
      
      break;
    
      default:
        
        break;
    }

    return heroes;
    
    if( ordenarPor == 'sin valor' ) {
      return heroes;
    } else{

      return heroes.sort( (a: Heroe, b: Heroe)=>{
        return (a.nombre > b.nombre)
          ? 1
          : -1;
      } );
      
    }
  }

}
