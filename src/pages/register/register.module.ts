import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    HttpModule,
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
