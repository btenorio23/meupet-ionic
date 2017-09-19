import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasseadoresPage } from './passeadores';

@NgModule({
  declarations: [
    PasseadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(PasseadoresPage),
  ],
  exports: [
    PasseadoresPage
  ]
})
export class PasseadoresPageModule {}
