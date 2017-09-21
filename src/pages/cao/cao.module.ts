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

	adicionaPet() {
	}
}
