import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


//  PAGES
// import { AboutPage } from '../pages/about/about';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PasseadorPage } from '../pages/passeador/passeador';
import { CaoPage } from '../pages/cao/cao';
import { PerfilPage } from '../pages/perfil/perfil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// MODULES
import { CaoPageModule } from '../pages/cao/cao.module';

// PROVIDERS
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // HomePage,
    PasseadorPage,
    PerfilPage,
    // CaoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CaoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // HomePage,
    PasseadorPage,
    CaoPage,
    PerfilPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
