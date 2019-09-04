import { Component, OnInit } from '@angular/core';
import { CARDS } from '../../../data/data.card';
import { cards } from '../../../interfaces/interfaces.cards';
import { from } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  cards: cards[] = [];

  constructor() {
    this.cards = CARDS.splice(0);
   }

  ngOnInit() {
  }

}
