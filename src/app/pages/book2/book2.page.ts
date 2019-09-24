import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, ModalController } from '@ionic/angular';
import { ServiceService } from '../../service/service.service';
import { Observable } from 'rxjs';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-book2',
  templateUrl: './book2.page.html',
  styleUrls: ['./book2.page.scss'],
})
export class Book2Page implements OnInit {
  @ViewChild(IonSegment, { static:true}) segment: IonSegment
  categoria: Observable<any>;
  tag = '';

  constructor(
    private service: ServiceService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.segment.value = 'todo';
    this.categoria = this.service.getCards();
  }
  segmentChanged( event ) {
    let valorSegmento = event.detail.value;
    if (valorSegmento == 'todo') {
      //this.tag ='';
      valorSegmento = '';
    }
    this.tag = valorSegmento;
    console.log(valorSegmento, this.tag);
  }
  async showModal( categoria ){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        categoria: categoria
      }

    });
    await modal.present();
  }
}
