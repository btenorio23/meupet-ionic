import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

// Habilitar conexão com HTTP
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };
  pets: any 

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, public http: Http) { 

      this.http.get('api/v1/usuario').map(res => res.json()).subscribe(
      data => {
        // console.log(data[0]);
        this.pets = data;
      },
        err => {
            console.log("Oops, não consegui recuperar os objetos");
        }
      );

  }



  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;


        this.showPopup("Conta criada!", "");

      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });

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
