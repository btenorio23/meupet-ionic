// DO NOT DELETE
// http://appseed.io/blog/how-add-facebook-and-google-login-your-ionic-2-app-cordova-oauth
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { MeupetapiProvider } from '../../providers/meupetapi/meupetapi';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  // registerCredentials = { email: '', password: '' };
  // pets:any; 
  loginUsuario: FormGroup;
  submitAttempt: boolean = false;
  // user: FirebaseListObservable<any>;


  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public http: Http, private apiProvider: MeupetapiProvider, public formBuilder: FormBuilder) {
    this.loginUsuario = formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login(infoLogin) {
    infoLogin.primeiroNome = ''
    infoLogin.segundoNome = ''
    infoLogin.tipousuario = ''
    infoLogin.email = ''
    this.apiProvider.postAutenticacaoUsuario(JSON.stringify(infoLogin)).subscribe(data => {this.showLoading(); this.apiProvider.usuario_id=data.id; console.log(data); this.nav.setRoot(TabsPage)}, err => {this.showLoading(); console.log(err); return false})
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Validando login...',
      dismissOnPageChange: true
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  // showError(text) {
  //   this.loading.dismiss();

  //   let alert = this.alertCtrl.create({
  //     title: 'Fail',
  //     subTitle: text,
  //     buttons: ['OK']
  //   });
  //   alert.present(prompt);
  // }
}