import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, LoadingController, Loading } from 'ionic-angular';
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

  constructor(private navCtrl: NavController, private auth: AuthServiceProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private apiProvider: MeupetapiProvider, public formBuilder: FormBuilder) {
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
    informacoesUsuario.imagemUsuario = null
    this.submitAttempt = true;
    if (!this.detalhesUsuarioForm.valid) {
      this.preenchaCorretamente()
    }
    else {
      this.apiProvider.postCriacaoUsuario(JSON.stringify(informacoesUsuario)).subscribe(data => {console.log(data); this.usuarioCriado(); this.navCtrl.popToRoot();}, err => {console.log(err); return false})
    }
  }

  preenchaCorretamente() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Preencha corretamente os dados!',
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  usuarioCriado() {
    let loading = this.loadingCtrl.create({
      content: 'Usuários Criado!',
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

}
