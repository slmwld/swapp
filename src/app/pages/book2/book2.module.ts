import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Book2Page } from './book2.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ModalPage } from '../modal/modal.page';
import { ModalPageModule } from '../modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: Book2Page
  }
];

@NgModule({
  entryComponents: [
    ModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule,
    ModalPageModule
  ],
  declarations: [Book2Page]
})
export class Book2PageModule {}
