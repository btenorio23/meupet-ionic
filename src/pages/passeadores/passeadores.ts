import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
	petEscolhido;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

  	this.detalhesCaoForm = formBuilder.group({
  		// firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
  		distancia: [''],
             passeio_com_caes: [''],
             pode_alimentar: [''],
  	});

  }

  public abreMapa() {
  	this.navCtrl.push('ContrataServicoPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasseadoresPage');
  }

}
