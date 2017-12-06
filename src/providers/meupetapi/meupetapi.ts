import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MeupetapiProvider {

  // Propriedades
  url: any = "https://meupetapi.herokuapp.com/api/v1/";
  apiUrl: any = 'https://jsonplaceholder.typicode.com';
  data: any;
  resultado: any;
  constructor(public http: Http) {
    console.log('Hello MeupetapiProvider Provider');
  }

  postUsuario(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('Dando post em objetio Pet', data);
    data.idade = '1996-12-26';
    this.http.post(this.url + 'usuario/new', JSON.stringify(data), { headers: headers })
      .map(res => res.json())
      .subscribe(data => { console.log(data); })
  }

  postAutenticacaoUsuario(informacaoUsuario)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.url + 'usuario/login/', informacaoUsuario, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {console.log(data)})

  }

  postCriacaoUsuario(informacaoUsuario)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(this.url + 'usuario/login/', informacaoUsuario, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {console.log(data)})

  }


  // getUsuario(data) {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   console.log('Dado sendo trabalhado', data._value);
  //   data = JSON.stringify({
  //     "email": data._value.email + '',
  //     "senha": data._value.senha + '',
  //   });
  //   console.log('Dado sendo enviado para login', data);
  //   return this.http.post(this.url + 'login/', JSON.stringify(data), { headers: headers })
  //     .map(res => res.json())
  //     .subscribe(data => { console.log('Dados retornados', data); });
  // }

  getPets() 
  {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.url + 'pet/')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getPasseios() 
  {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.url + 'servico/tiposervico/P')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }


  getBanhos() 
  {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.url + 'servico/tiposervico/B')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }


  getVeterinarios() 
  {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.url + 'servico/tiposervico/V')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getTreinamentos() 
  {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.url + 'servico/tiposervico/T')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
