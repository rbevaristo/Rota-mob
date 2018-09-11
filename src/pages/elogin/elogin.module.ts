import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EloginPage } from './elogin';

@NgModule({
  declarations: [
    EloginPage,
  ],
  imports: [
    IonicPageModule.forChild(EloginPage),
  ],
})
export class EloginPageModule {}
