import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MeupetapiProvider {

url:any = "https://meupetapi.herokuapp.com/api/v1/";
apiUrl:any = 'https://jsonplaceholder.typicode.com';
data:any;
resultado: any;
constructor(public http: Http) {
  console.log('Hello MeupetapiProvider Provider');
}

  getPets(nome) {
  	console.log(this.url + 'pet/');
  	return this.http.get(this.url + 'pet/')
  	.map(res => res.json());
  }

  postPets(pet) {
    var data = JSON.stringify({
        nome: pet.nome, 
        raca: pet.raca,
        dono: pet.dono,
        tamanho: pet.tamanho,
        descricao: pet.descricao,
     });
    console.log('Dando post em objetio Pet', data);
    // this.http.post(this.url + 'pet/', data)
    //   .subscribe(
    //     data => {this.data.response = data;}, 
    //     error => {console.log("Oooops!");});

  }

   postUsuario(data) {
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
    console.log('Dando post em objetio Pet', data);
    data.idade = '1996-12-26';
    this.http.post(this.url + 'usuario/', JSON.stringify(data), {headers: headers})
      .map(res => res.json())
      .subscribe(data => {console.log(data);})
      // .subscribe(
      //   data => {this.data.response = data;}, 
      //   error => {console.log("Oooops!");});
  }

  getUsuarioExemplo(data) {
    console.log(this.url + 'usuario/');
    return this.http.get(this.url + 'usuario/')
    .map(res => res.json())
    .subscribe(data => {console.log('Dados retornados', data);});
  }

  getUsuario(usuarioEsperado) {
    usuarioEsperado = usuarioEsperado._value;
    // console.log('Dando sendo enviado para getUsuario', data);
    // let myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');    
    // let myParams = new URLSearchParams();
    // myParams.append('email', data.email);
     // if (this.data) {
     //   console.log('aquiiiiiiiiiiiii')
     //   return Promise.resolve(this.data);
     // }
     // let options = new RequestOptions({ headers: myHeaders, params: myParams });
     return new Promise(resolve => {
     this.http.get(this.url+'usuario/')
         .map(res => res.json())
         .subscribe(data => {
           this.resultado = data;
           resolve(this.resultado);
           console.log('Resultado Final: ')
            this.resultado.forEach(function(resultado)  {
                if(resultado.email == usuarioEsperado.email) {
                    if(resultado.senha == usuarioEsperado.senha) {
                      console.log('Return true')
                      return true;
                    }
                    console.log('Return false')
                    return false;
                }
                else {
                  console.log('Return false')
                    return false;
                }
            })
         });
     });
  }

  getUsers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url+'pet')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

   getUsuarios() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url+'usuario')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
