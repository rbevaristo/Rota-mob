import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the EdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edashboard',
  templateUrl: 'edashboard.html',
})
export class EdashboardPage {

  schedules: Array<{date: any, shift: any}>;
  s = [];
  current = {
    date: null,
    shift: null
  };
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {

  }

  ionViewDidLoad() {
    this.api.eschedule().subscribe(
      data => this.handleResponse(data), error => this.handleError(error)
    );
  }
  handleResponse(data){
    for(var i = 0; i < data.data.length; i++){
      var x = data.data[i].split(',');

      var d = new Date(x[0]);
      var s = x[1].split('-');
      var s1 = s[0].split(':');
      var s2 = s[1].split(':');
      var t1 = s1[0] + ":00 AM";
      var t2 = s2[0] + ":00 AM";
      if(s1[0] > 12){
        t1 = Math.abs(parseInt(s1[0]) - 12) + ":00 PM";
      }

      if(s2[0] > 12){
        t2 = Math.abs(parseInt(s2[0]) - 12) + ":00 PM";
      }

      var t = t1 + " - " + t2; 
      this.schedules = [{
        date: this.monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(), shift: t
      }];
      this.s.push(this.schedules);
    }
    this.goToSlide(this.s);
  }

  handleError(error){
    console.log(error);
  }

  @ViewChild(Slides) slides: Slides;

  goToSlide(shift) {
    for(var i = 0; i < shift.length; i++){
      var d= new Date();
      if(shift[i][0].date == (this.monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear())){
        this.current.date = shift[i][0].date;
        this.current.shift = shift[i][0].shift;
      }
    }
  }
}
