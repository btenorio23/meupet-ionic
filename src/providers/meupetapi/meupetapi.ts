import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MeupetapiProvider {

  // Propriedades
  url: any = "https://meupetapi.herokuapp.com/api/v1/";
  apiUrl: any = 'https://jsonplaceholder.typicode.com';
  data: any;
  usuario_id: any;
  resultado: any;
  constructor(public http: Http) {
    console.log('Hello MeupetapiProvider Provider');
  }

  postAutenticacaoUsuario(informacaoUsuario)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'usuario/login/', informacaoUsuario, {headers: headers}).map(res => res.json())
  }

  postCriacaoUsuario(informacaoUsuario)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'usuario/registrar/', informacaoUsuario, {headers: headers}).map(res => res.json())
  }

  getPets() 
  {
    return new Promise(resolve => {
      this.http.get(this.url + 'pet/usuario/' + this.usuario_id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getPasseios() 
  {
    return new Promise(resolve => {
      this.http.get(this.url + 'passeio/dono/' + this.usuario_id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  postCriacaoPet(informacaoPet)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'pet/', informacaoPet, {headers: headers}).map(res => res.json())
  }

  putPet(informacaoPet, id)
  {
    console.log('informacao', informacaoPet)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // return this.http.put(this.url + 'pet/' + id, informacaoPet, {headers: headers}).map(res => res.json())
    return this.http.put(this.url + 'pet/' + id, informacaoPet, {headers: headers}).map(res => res.json())
  }

  getServicos(tiposervico) 
  {
    return new Promise(resolve => {
      this.http.get(this.url + 'servico/provedortiposervico/' + tiposervico)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getPerfilUsuario() 
  {
    return new Promise(resolve => {
      this.http.get(this.url + 'usuario/' + this.usuario_id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
