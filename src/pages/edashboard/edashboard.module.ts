import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdashboardPage } from './edashboard';

@NgModule({
  declarations: [
    EdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(EdashboardPage),
  ],
})
export class EdashboardPageModule {}
