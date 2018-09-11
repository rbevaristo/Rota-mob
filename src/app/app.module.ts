import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LogoutPage } from '../pages/logout/logout';
import { EmployeesPage } from '../pages/employees/employees';
import { TokenProvider } from '../providers/token/token';
import { AuthInterceptor } from '../providers/auth/authInterceptor';
import { EmployeePage } from '../pages/employee/employee';
import { EdashboardPage } from '../pages/edashboard/edashboard';
import { AboutPage } from '../pages/about/about';
import { ServicesPage } from '../pages/services/services';
import { TeamPage } from '../pages/team/team';
import { ContactPage } from '../pages/contact/contact';
import { EvaluationPage } from '../pages/evaluation/evaluation';
import { EvalFilesPage } from '../pages/eval-files/eval-files';
import { EvalFormPage } from '../pages/eval-form/eval-form';
import { ShareProvider } from '../providers/share/share';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { EmployeeprofilePage } from '../pages/employeeprofile/employeeprofile';
import { RequestPage } from '../pages/request/request';
import { EmpevalfilesPage } from '../pages/empevalfiles/empevalfiles';
import { ApiProvider } from '../providers/api/api';
import { EloginPage } from '../pages/elogin/elogin';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ServicesPage,
    TeamPage,
    ContactPage,
    LoginPage,
    EloginPage,
    DashboardPage,
    EmployeesPage,
    LogoutPage,
    EmployeePage,
    EvaluationPage,
    EvalFilesPage,
    EvalFormPage,
    UserprofilePage,
    EdashboardPage,
    EmployeeprofilePage,
    RequestPage,
    EmpevalfilesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ServicesPage,
    TeamPage,
    ContactPage,
    LoginPage,
    EloginPage,
    DashboardPage,
    EmployeesPage,
    LogoutPage,
    EmployeePage,
    EvaluationPage,
    EvalFilesPage,
    EvalFormPage,
    UserprofilePage,
    EdashboardPage,
    EmployeeprofilePage,
    RequestPage,
    EmpevalfilesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    TokenProvider,
    ShareProvider,
    ApiProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
