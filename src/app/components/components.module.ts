import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PopComponent } from './pop/pop.component';


@NgModule({
  declarations: [
    PopComponent
  ],
  imports:  [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    PopComponent
  ]
})
export class ComponentsModule { }
