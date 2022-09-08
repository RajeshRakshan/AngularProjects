import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-lazy-content',
  templateUrl: './lazy-content.component.html',
  styleUrls: ['./lazy-content.component.css']
})
export class LazyContentComponent implements OnInit {

  constructor(public router:Router) {
   }
gotohome(){

this.router.navigateByUrl('/lazy-home')

}

  ngOnInit(): void {
  }

}
