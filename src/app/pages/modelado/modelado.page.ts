import { Component, OnInit } from '@angular/core';
import { cards } from '../../../interfaces/interfaces.cards';
import { PopoverController } from '@ionic/angular';
import { PopComponent } from '../../components/pop/pop.component';

@Component({
  selector: 'app-modelado',
  templateUrl: './modelado.page.html',
  styleUrls: ['./modelado.page.scss'],
})
export class ModeladoPage implements OnInit {

  cards: cards[] = [
    {
      nombre: 'Bocho',
      imagen: 'assets/img/book/04.png',
      conten: 'Modelado y Renderizado del "Bocho"'
    },
    {
      nombre: 'Metro CDMX',
      imagen: 'assets/img/book/00.png',
      conten: 'Modelado y Renderizado del metro de la CDMX'
    },
    {
      nombre: 'Ferrari Enzo',
      imagen: 'assets/img/book/01.png',
      conten: 'Modelado y Renderizado Ferrari'
    },
    {
      nombre: 'Mustang',
      imagen: 'assets/img/book/02.png',
      conten: 'Modelado y Renderizado Mustang'
    },
    {
      nombre: 'Combi',
      imagen: 'assets/img/book/03.png',
      conten: 'Modelado y Renderizado de "la Combi"'
    },
    {
      nombre: 'Carrito Boing',
      imagen: 'assets/img/book/05.png',
      conten: 'Modelado y Renderizado del Carrito Boing"'
    },
    {
      nombre: 'Departamento',
      imagen: 'assets/img/book/06.png',
      conten: 'Modelado y Renderizado Interior"'
    },
    {
      nombre: 'Estadio',
      imagen: 'assets/img/book/07.png',
      conten: 'Modelado de un Estadio'
    },
    {
      nombre: 'Sala',
      imagen: 'assets/img/book/08.png',
      conten: 'Modelado y Renderizado interior'
    },
    {
      nombre: 'Envase',
      imagen: 'assets/img/book/018.png',
      conten: 'Modelado de Envases'
    },
    {
      nombre: 'Envase',
      imagen: 'assets/img/book/019.png',
      conten: 'Modelado de Envase'
    },
    {
      nombre: 'Stand SAT',
      imagen: 'assets/img/book/18.png',
      conten: 'Modelado y Renderizado Stand para el SAT'
    },
    {
      nombre: 'Muestreario',
      imagen: 'assets/img/book/19.png',
      conten: 'Modelado Mobiliario'
    },
    {
      nombre: 'Tasa',
      imagen: 'assets/img/book/020.png',
      conten: 'Modelado y Renderizado Domis'
    },
    {
      nombre: 'Isla Gamesa',
      imagen: 'assets/img/book/20.png',
      conten: 'Modelado y Renderizado Domis'
    },
    {
      nombre: 'Refri',
      imagen: 'assets/img/book/024.png',
      conten: 'Modelado y Renderizado Mobiliario'
    },

  ];

  constructor( private popCtrl: PopoverController) {
   }
  ngOnInit() {
  }

  async mostrarpop( evento ) {
    const popover = await this.popCtrl.create({
      component: PopComponent,
      mode: 'ios'
    });
    await popover.present();
  }

}
