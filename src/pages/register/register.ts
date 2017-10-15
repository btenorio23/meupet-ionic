import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MeupetapiProvider } from '../../providers/meupetapi/meupetapi';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };
  pets: any 
  novoUsuario:any;

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private apiProvider: MeupetapiProvider) {}

  getUsuario() {
    this.apiProvider.getUsuarios()
    .then(data => {
      this.pets = data;
    });
  }

  public register() {
      this.pets = this.getUsuario()    
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
              this.nav.push('LoginPage');
            }
          }
        }
      ]
    });
    alert.present();
  }
}
