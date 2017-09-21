import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MeupetapiProvider } from '../../providers/meupetapi/meupetapi';

/**
 * Generated class for the CaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cao',
  templateUrl: 'cao.html',
})
export class CaoPage {


   pets:any;
  constructor(public nav: NavController, public navParams: NavParams, private apiProvider: MeupetapiProvider) {
  	this.pets = this.getUsers()
  	console.log(this.pets)
  }

  getUsers() {
    this.apiProvider.getUsers()
    .then(data => {
      this.pets = data;
    });
  }

  editarPet() {
  	console.log("AHhh");
  	this.nav.push('DetalhesCaoPage');
  }

  ionViewDidLoad() {
    // this.meu_pet = 'status';
  }

}
