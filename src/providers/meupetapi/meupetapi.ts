import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MeupetapiProvider {

url:any = "https://meupetapi.herokuapp.com/api/v1/";
apiUrl:any = 'https://jsonplaceholder.typicode.com';
data:any;
  constructor(public http: Http) {
    console.log('Hello MeupetapiProvider Provider');
  }

  getPets(nome) {
  	console.log(this.url + 'pet/');
  	return this.http.get(this.url + 'pet/')
  	.map(res => res.json());
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
