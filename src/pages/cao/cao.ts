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


   meu_pet:any;
   users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: MeupetapiProvider) {
  	this.getUsers()
  }

  getUsers() {
    this.apiProvider.getUsers()
    .then(data => {
      this.users = data;
    });
  }

  ionViewDidLoad() {
    this.meu_pet = 'status';
  }

}
