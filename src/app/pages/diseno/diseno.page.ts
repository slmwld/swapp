import { Component, OnInit } from '@angular/core';
// import { CARDS } from '../../../data/data.card';
import { cards } from '../../../interfaces/interfaces.cards';
import { PopoverController } from '@ionic/angular';
import { PopComponent } from '../../components/pop/pop.component';


@Component({
  selector: 'app-diseno',
  templateUrl: './diseno.page.html',
  styleUrls: ['./diseno.page.scss'],
})
export class DisenoPage implements OnInit {

  cards: cards[] = [{
    nombre: 'Cartel Boing',
    imagen: 'assets/img/book/boing.jpg',
    conten: 'Campaña de Boing 12oz'
    },
    {
    nombre: 'Boing Primera Cosecha',
    imagen: 'assets/img/book/Pc.jpg',
    conten: 'Campaña de Boing Primera Cosecha'
    },
    {
    nombre: 'Volante Pascual',
    imagen: 'assets/img/book/volante.jpg',
    conten: 'Campaña Pascual Limon'
    },
    {
    nombre: 'Carte Agua Pascual',
    imagen: 'assets/img/book/agua.jpg',
    conten: 'Campaña Agua Pascual'
    },
    {
    nombre: 'Etiqueta Agua Saborizada',
    imagen: 'assets/img/book/etiqueta.jpg',
    conten: 'Campaña Agua Saborizada Pascual'
    },
    {
    nombre: 'Diseño Empaque',
    imagen: 'assets/img/book/aranda.png',
    conten: 'Diseño de Empaque Nuevo'
    },
  ];

  constructor( private popCtrl: PopoverController ) {
  }
  ngOnInit() {
  }

  async mostrarpop( evento) {
    const popover = await this.popCtrl.create({
      component: PopComponent,
      mode: 'ios'
    });
    await popover.present();
  }

}
