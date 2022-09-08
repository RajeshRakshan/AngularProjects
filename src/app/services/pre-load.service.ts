import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreLoadService implements PreloadingStrategy{
  preload(route: Route, mypreLoad: () => Observable<any>): Observable<any> {
    if(route.data&&route.data['myLoad']){
    mypreLoad()
    }
    return of(null) 
  }

  constructor() { }
}
