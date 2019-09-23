import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ServiceService } from '../../service/service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book2',
  templateUrl: './book2.page.html',
  styleUrls: ['./book2.page.scss'],
})
export class Book2Page implements OnInit {
  @ViewChild(IonSegment, { static:true}) segment: IonSegment
  categoria: Observable<any>;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.segment.value = 'diseno';
    this.categoria = this.service.getCards();
  }
  segmentChanged( event ) {
    const valorSegmento = event.detail.value;
    console.log(valorSegmento);
  }
}
