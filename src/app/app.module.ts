import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

//  PAGES
// import { AboutPage } from '../pages/about/about';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PasseadorPage } from '../pages/passeador/passeador';
import { CaoPage } from '../pages/cao/cao';
import { PerfilPage } from '../pages/perfil/perfil';
import { AjustesPage } from '../pages/ajustes/ajustes';
// import { DetalhesCaoPage } from '../pages/detalhes-cao/detalhes-cao';

// import { DetalhesCaoPage } from '../pages/detalhes-cao/detalhes-cao';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// MODULES
import { CaoPageModule } from '../pages/cao/cao.module';

// PROVIDERS
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MeupetapiProvider } from '../providers/meupetapi/meupetapi';

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // HomePage,
    PasseadorPage,
    PerfilPage,
    // CaoPage,
    TabsPage,
    AjustesPage,
    // DetalhesCaoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CaoPageModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // HomePage,
    PasseadorPage,
    CaoPage,
    PerfilPage,
    TabsPage,
    AjustesPage,
    // DetalhesCaoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    MeupetapiProvider
  ]
})
export class AppModule {}
