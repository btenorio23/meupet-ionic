import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasseadoresPage');
  }

  public escolhePasseador() {
  let confirm = this.alertCtrl.create({
      title: 'Passeador contratado!',
      buttons: [
          {
              text: 'OK',
              handler: () => {
                  console.log("compra confirmada!");
              }
          }
      ]

  });
  confirm.present();
  }

}
