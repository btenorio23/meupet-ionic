import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the DetalhesCaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalhes-cao',
  templateUrl: 'detalhes-cao.html',
})
export class DetalhesCaoPage {

  detalhesCaoForm: FormGroup;
  submitAttempt: boolean = false;
  petEscolhido;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {

  	this.detalhesCaoForm = formBuilder.group({
  		// firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
  		nome: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
  		raca: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
  		tamanho: [''],
  		descricaoPet: [''],
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

  save(){
      this.submitAttempt = true;
      if(!this.detalhesCaoForm.valid){
      		console.log("Dados Invalidos");
      }
      else {this.navCtrl.pop();}
  }


  ionViewDidLoad() {
    console.log("Detalhes Cão Carregada");
    this.petEscolhido = this.navParams.get('pet');
    if(this.petEscolhido) {
    	console.log(this.petEscolhido);
    	this.detalhesCaoForm.controls['nome'].setValue(this.petEscolhido.nome);
    	this.detalhesCaoForm.controls['raca'].setValue(this.petEscolhido.raca);
    	this.detalhesCaoForm.controls['descricaoPet'].setValue(this.petEscolhido.descricaoPet);
    	this.detalhesCaoForm.controls['tamanho'].setValue(this.petEscolhido.tamanho);	
    }
    
  }

}
