import { Component, OnInit } from '@angular/core';
import { cards } from '../../../interfaces/interfaces.cards';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})
export class PopComponent implements OnInit {

  cards: cards[] = [
    {
      nombre: 'Bocho',
      imagen: 'assets/img/book/04.png',
      conten: 'Modelado y Renderizado del "Bocho"'
    },
  ];

  constructor() { }

  ngOnInit() {}

}
