import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }
  getCards() {
    return this.http.get('/assets/data/data.card.json');
  }
}
