import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvalFormPage } from './eval-form';

@NgModule({
  declarations: [
    EvalFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EvalFormPage),
  ],
})
export class EvalFormPageModule {}
