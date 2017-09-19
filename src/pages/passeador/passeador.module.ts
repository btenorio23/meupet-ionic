import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasseadorPage } from './passeador';

@NgModule({
  declarations: [
    PasseadorPage,
  ],
  imports: [
    IonicPageModule.forChild(PasseadorPage),
  ],
  exports: [
    PasseadorPage
  ]
})
export class PasseadorPageModule {}
