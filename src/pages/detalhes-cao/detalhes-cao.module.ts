import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesCaoPage } from './detalhes-cao';

@NgModule({
  declarations: [
    DetalhesCaoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesCaoPage),
  ],
  exports: [
    DetalhesCaoPage
  ]
})
export class DetalhesCaoPageModule {}
