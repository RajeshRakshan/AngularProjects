import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-lazy-home',
  templateUrl: './lazy-home.component.html',
  styleUrls: ['./lazy-home.component.css']
})
export class LazyHomeComponent implements OnInit {

  constructor(public router:Router) { }


gotocontent(){

  this.router.navigateByUrl('/lazy-contact')
}


  ngOnInit(): void {
    
  }

}
