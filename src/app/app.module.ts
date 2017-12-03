import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
//  PAGES
// import { AboutPage } from '../pages/about/about';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PasseadorPage } from '../pages/passeador/passeador';
import { InicioPage } from '../pages/inicio/inicio';
import { CaoPage } from '../pages/cao/cao';
import { PerfilPage } from '../pages/perfil/perfil';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { ContrataServicoPage } from '../pages/contrata-servico/contrata-servico';
import { HistoricoServicosPage } from '../pages/historico-servicos/historico-servicos';
import { PasseadoresPage } from '../pages/passeadores/passeadores';
// import { DetalhesCaoPage } from '../pages/detalhes-cao/detalhes-cao';

// import { DetalhesCaoPage } from '../pages/detalhes-cao/detalhes-cao';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// MODULES
import { CaoPageModule } from '../pages/cao/cao.module';
import { ContrataServicoPageModule } from '../pages/contrata-servico/contrata-servico.module';
import { HistoricoServicosPageModule } from '../pages/historico-servicos/historico-servicos.module';
import { PasseadoresPageModule } from '../pages/passeadores/passeadores.module';

// Import the AF2 Module
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireModule } from 'angularfire2/src/angularfire2';
 import * as firebase from 'firebase';
// AF2 Settings

// <script src="https://www.gstatic.com/firebasejs/4.6.0/firebase.js"></script>
  // Initialize Firebase
export var config = {
    apiKey: "AIzaSyBF2ROBo_tw0D7uf_utVxH-1TgJWCRy0QY",
    authDomain: "meupet-367a2.firebaseapp.com",
    databaseURL: "https://meupet-367a2.firebaseio.com",
    projectId: "meupet-367a2",
    storageBucket: "meupet-367a2.appspot.com",
    messagingSenderId: "1024898052284"
  };
firebase.initializeApp(config);
// </script>
// PROVIDERS
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MeupetapiProvider } from '../providers/meupetapi/meupetapi';

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // HomePage,
    PasseadorPage,
    InicioPage,
    PerfilPage,
    // CaoPage,
    TabsPage,
    AjustesPage,
    // ContrataServicoPage,
    // DetalhesCaoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // AngularFireModule.initializeApp(firebaseConfig),
    CaoPageModule,
    ContrataServicoPageModule,
    HistoricoServicosPageModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // HomePage,
    PasseadorPage,
    InicioPage,
    CaoPage,
    PerfilPage,
    TabsPage,
    AjustesPage,
    ContrataServicoPage,
    HistoricoServicosPage,
    // DetalhesCaoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Geolocation,
    MeupetapiProvider,
  ]
})
export class AppModule {}
