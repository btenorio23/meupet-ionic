import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaoPage } from './cao';

@NgModule({
  declarations: [
    CaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CaoPage),
  ],
  exports: [
    CaoPage
  ]
})
export class CaoPageModule {}
