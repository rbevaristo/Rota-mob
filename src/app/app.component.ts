import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AuthProvider } from '../providers/auth/auth';
import { LogoutPage } from '../pages/logout/logout';
import { EmployeesPage } from '../pages/employees/employees';
import { EdashboardPage } from '../pages/edashboard/edashboard';
import { ContactPage } from '../pages/contact/contact';
import { TeamPage } from '../pages/team/team';
import { ServicesPage } from '../pages/services/services';
import { AboutPage } from '../pages/about/about';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { EmployeeprofilePage } from '../pages/employeeprofile/employeeprofile';
import { RequestPage } from '../pages/request/request';
import { EmpevalfilesPage } from '../pages/empevalfiles/empevalfiles';
import { EloginPage } from '../pages/elogin/elogin';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  dashboardPages: Array<{title: string, component: any}>;
  EdashboardPages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public authService: AuthProvider,
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'Services', component: ServicesPage },
      { title: 'Team', component: TeamPage },
      { title: 'Contact Us', component: ContactPage },
      { title: 'Login as Manager', component: LoginPage},
      { title: 'Login as Employee', component: EloginPage}
    ];
    this.dashboardPages = [
      { title: 'Dashboard', component: DashboardPage},
      { title: 'Profile', component: UserprofilePage},
      { title: 'Employees', component: EmployeesPage},
      { title: 'Logout', component: LogoutPage }
    ];

    this.EdashboardPages = [
      { title: 'Dashboard', component: EdashboardPage},
      { title: 'Profile', component: EmployeeprofilePage},
      { title: 'Request Leave', component: RequestPage},
      { title: 'Evaluation', component: EmpevalfilesPage},
      { title: 'Logout', component: LogoutPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  isAuthenticated() {
    return this.authService.authenticated();
  }

  isUser() {
    return this.authService.authenticatedUser();
  }

}
