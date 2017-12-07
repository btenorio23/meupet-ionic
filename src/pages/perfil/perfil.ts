import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeupetapiProvider } from '../../providers/meupetapi/meupetapi';

/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario: any;
  usuario_img: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: MeupetapiProvider) {
    this.usuario = this.getPerfilUsuario()
  }

  getPerfilUsuario() {
    this.apiProvider.getPerfilUsuario()
    .then(data => {
      this.usuario = data;
    });
    // console.log(this.pets)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  public abreHistoricoPasseios() {
    this.navCtrl.push('HistoricoServicosPage');
  }

}
