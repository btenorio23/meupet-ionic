import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { HomePage } from '../home/home';
import {PasseadorPage } from '../passeador/passeador';
import {CaoPage } from '../cao/cao';
import {PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = HomePage;
  // tab2Root = AboutPage;
  tab1Root = PasseadorPage;
  tab2Root = CaoPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
 
