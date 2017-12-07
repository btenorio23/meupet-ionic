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
     tipoServico: any;
	detalhesCaoForm: FormGroup;
	submitAttempt: boolean = false;
	
  servicos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private apiProvider : MeupetapiProvider)
  {
  }

  getServicos()
  {
    console.log(this.tipoServico)
    this.apiProvider.getServicos(this.tipoServico)
    .then(data => {
      this.servicos = data;
    });
  }

  public abreMapa() {
  	this.navCtrl.push('ContrataServicoPage');
  }

  ionViewWillEnter() {
    console.log('ENTRANDO NA PAGINA')
    this.servicos = null
    this.tipoServico = this.navParams.get('tipoPasseio');
    console.log('TIPO SERVICO:', this.tipoServico)
    this.getServicos()
  }

  ionViewWillLeave() {
    this.servicos = null
  }

}
