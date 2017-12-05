import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DetalhesCaoPage } from '../detalhes-cao/detalhes-cao';
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
  // detalhesCao = DetalhesCaoPage;
  petEscolhido: undefined;

   pets:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: MeupetapiProvider) {
  	this.pets = this.getPets()
  	// console.log(this.pets)
  }

  getPets() {
    this.apiProvider.getPets()
    .then(data => {
      this.pets = data;
    });
    // console.log(this.pets)
  }

  modoEditar(pet) {
    console.log("Pet escolhido foi: " + pet.nome);
    this.navCtrl.push("DetalhesCaoPage", {pet});
  }

  adicionaPet() {
    console.log("adicionando um novo pet");
    this.navCtrl.push("DetalhesCaoPage");
  }

  ionViewDidLoad() {
    // console.log(this.pets)
  }

}
