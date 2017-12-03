import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { DetalhesCaoPage } from '../detalhes-cao/detalhes-cao';
import { CaoPage } from './cao';

@NgModule({
  declarations: [
    CaoPage,
    // DetalhesCaoPage
  ],
  imports: [
    IonicPageModule.forChild(CaoPage),
  ],
  exports: [
    CaoPage
  ],
  entryComponents: [
    // DetalhesCaoPage,
  ],
})
export class CaoPageModule {
	novoPet: any;
	modoEditar:any = true;

	constructor() {}

	habilitaEdicao():void {
		if(this.modoEditar == true) {
			this.modoEditar = false;
		}
		else {
			this.modoEditar = true;
		}
	};

	log():void {
	 console.log('Your message here');
	};
}
