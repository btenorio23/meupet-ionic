import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeupetapiProvider } from '../../providers/meupetapi/meupetapi';
/**
 * Generated class for the PasseadoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-passeadores',
  templateUrl: 'passeadores.html',
})
export class PasseadoresPage {

	detalhesCaoForm: FormGroup;
	submitAttempt: boolean = false;
	
  servicos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private apiProvider : MeupetapiProvider) {
    this.servicos = this.getServicos()

  }


  getServicos(){
    this.apiProvider.getPasseios()
    .then(data => {
      this.servicos = data;
    });
  }

  public abreMapa() {
  	this.navCtrl.push('ContrataServicoPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasseadoresPage');
  }

}
