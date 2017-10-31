import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoServicosPage } from './historico-servicos';

@NgModule({
  declarations: [
    HistoricoServicosPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoServicosPage),
  ],
  exports: [
    HistoricoServicosPage
  ]
})
export class HistoricoServicosPageModule {}
