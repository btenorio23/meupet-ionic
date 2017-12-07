import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeupetapiProvider } from '../../providers/meupetapi/meupetapi';

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
  criarPet:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController, private apiProvider: MeupetapiProvider) {

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

  save(detalhesCao){
    // detalhesCao.imagemPet = null
    detalhesCao.dono = this.apiProvider.usuario_id
      this.submitAttempt = true;
      if(!this.detalhesCaoForm.valid){
      		console.log("Dados Invalidos");
      }
      else{
        if(this.criarPet == 1) {
          this.apiProvider.postCriacaoPet(JSON.stringify(detalhesCao)).subscribe(data => {console.log(data); this.navCtrl.pop();}, err => {console.log(err); this.navCtrl.pop();})
        }
        else{
          this.apiProvider.putPet(JSON.stringify(detalhesCao), this.petEscolhido.id).subscribe(data => {console.log(data); this.navCtrl.pop();}, err => {console.log(err); this.navCtrl.pop();})
        }
      }
  }


  ionViewDidLoad() {
    console.log("Detalhes Cão Carregada");
    this.petEscolhido = this.navParams.get('pet');
    this.criarPet = this.navParams.get('adicionar')
    if(this.petEscolhido) {
    	console.log(this.petEscolhido);
    	this.detalhesCaoForm.controls['nome'].setValue(this.petEscolhido.nome);
    	this.detalhesCaoForm.controls['raca'].setValue(this.petEscolhido.raca);
    	this.detalhesCaoForm.controls['descricaoPet'].setValue(this.petEscolhido.descricaoPet);
    	this.detalhesCaoForm.controls['tamanho'].setValue(this.petEscolhido.tamanho);	
    }
    
  }

}
