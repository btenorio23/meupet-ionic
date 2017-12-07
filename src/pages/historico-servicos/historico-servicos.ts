import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeupetapiProvider } from '../../providers/meupetapi/meupetapi';

/**
 * Generated class for the HistoricoServicosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-historico-servicos',
  templateUrl: 'historico-servicos.html',
})
export class HistoricoServicosPage {

passeios: any;
pets:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: MeupetapiProvider) {
  	this.passeios = this.getPasseios()
  	this.pets = this.getPets()
  }


  getPasseios() {
    this.apiProvider.getPasseios()
    .then(data => {
      this.passeios = data;
      console.log(this.passeios)
    });
    // console.log(this.pets)
  }

  getPets() {
    this.apiProvider.getPets()
    .then(data => {
      this.pets = data;
      console.log(this.pets)
      this.reescreveNomes()
    });
    // console.log(this.pets)
  }

  reescreveNomes() {
  	this.passeios.forEach(function(current, index, array) {
  		let resultado = array.find(function(currentValue) {console.log('current', currentValue); return currentValue.pet == current.id}, current.id)
  		console.log('RESULTADO:',resultado)

  		// console.log(current)
  		// console.log(index)
  		// console.log(array)
  		// console.log("--------")
  	})
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoServicosPage');
  }

  ionViewWillEnter() {
    this.passeios = this.getPasseios()
    this.passeios = this.getPets()
  }

}
