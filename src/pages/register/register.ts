import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MeupetapiProvider } from '../../providers/meupetapi/meupetapi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  detalhesUsuarioForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private apiProvider: MeupetapiProvider, public formBuilder: FormBuilder) {
    this.detalhesUsuarioForm = formBuilder.group({
      primeiroNome: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      segundoNome: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: [''],
      password: [''],
    });
  }

  showCancela() {
    let confirm = this.alertCtrl.create({
      title: 'Deseja cancelar a alteração?',
      buttons: [
        {
          text: 'NÃO',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'SIM',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

  registraUsuario(informacoesUsuario) {
    informacoesUsuario.tipousuario = ['2']
    console.log(informacoesUsuario)

    // this.submitAttempt = true;
    // if (!this.detalhesUsuarioForm.valid) {
    //   console.log("Dados Invalidos");
    // }
    // // else {this.navCtrl.pop();}
    // else {
    //   data._value.descricaoUsuario = '-'
    //   data._value.tipousuario = ['1']
    //   console.log('Detalhes Usuario', data._value)
    //   this.apiProvider.postUsuario(data._value)
    //   this.navCtrl.popToRoot();
    //   this.navCtrl.push('LoginPage');
    // }
  }

  // getUsuario() {
  //   this.apiProvider.getUsuarios()
  //   .then(data => {
  //     this.pets = data;
  //   });
  // }

  // public register() {
  //     this.pets = this.getUsuario()    
  // }

  // showPopup(title, text) {
  //   let alert = this.alertCtrl.create({
  //     title: title,
  //     subTitle: text,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           if (this.createSuccess) {
  //             this.nav.popToRoot();
  //             this.nav.push('LoginPage');
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }
}
