import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingProject';
  day=new Date();
  day1=10-11-1989
  num =123.558
  num1=1252.254685
  num2=1259.25648
  percentage1=.98256
  sqr=this.num1*this.num2;
  cur=102256;
  constructor(public router:Router){}
  gotoabout()
  {this.router.navigateByUrl("/about")}
}
