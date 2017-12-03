import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PasseadorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-passeador',
  templateUrl: 'passeador.html',
})
export class PasseadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasseadorPage');
  }

  showConfirmation(tipoPasseio) {
      let confirm = this.alertCtrl.create({
          title: tipoPasseio,
          message: 'Deseja confirmar essa compra?',
          buttons: [
              {
                  text: 'Confirmar',
                  handler: () => {
                      console.log("compra confirmada!");
                  }
              },
              {
                  text: 'Descartar',
                  handler: () => {
                      console.log('compra descartada');
                  }
              }
          ]
      });
      confirm.present();
  }


  public abrePedidoPasseio() {
      console.log('enviando pedido de passeio do usuario: ');
      // this.navCtrl.push('ContrataServicoPage');
      this.navCtrl.push('PasseadoresPage');
  }

  public abreDescricao() {
      // this.navCtrl.push('ContrataServicoPage');
      this.navCtrl.push('PasseadoresPage');
  }


}
