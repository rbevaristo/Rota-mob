import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeprofilePage } from './employeeprofile';

@NgModule({
  declarations: [
    EmployeeprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeprofilePage),
  ],
})
export class EmployeeprofilePageModule {}
