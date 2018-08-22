import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvalFilesPage } from './eval-files';

@NgModule({
  declarations: [
    EvalFilesPage,
  ],
  imports: [
    IonicPageModule.forChild(EvalFilesPage),
  ],
})
export class EvalFilesPageModule {}
