import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lazy-about',
  templateUrl: './lazy-about.component.html',
  styleUrls: ['./lazy-about.component.css']
})
export class LazyAboutComponent implements OnInit {

  constructor(public router:Router) { }

gotohome(){

  this.router.navigateByUrl('/lazy-home')
}
gotocontent(){

  this.router.navigateByUrl('/lazy-content')
}

  ngOnInit(): void {
  }

}
