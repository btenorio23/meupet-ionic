import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContrataServicoPage } from './contrata-servico';

@NgModule({
  declarations: [
    ContrataServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContrataServicoPage),
  ],
  exports: [
    ContrataServicoPage
  ]
})
export class ContrataServicoPageModule {}
