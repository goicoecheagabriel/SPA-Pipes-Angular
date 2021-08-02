import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items:MenuItem[] = [];

  constructor(private routes: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Archivo',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            items:[
              {
                label: 'Proyecto',
                routerLink: 'no-comunes',
              },
              {
                label: 'Otros',
                routerLink: ' ',
              }
            ]
          }
        ]
      }
    ]
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label:'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
    ]
  }

}
