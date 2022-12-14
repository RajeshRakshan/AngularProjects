import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {ContactComponent} from '../app/contact/contact.component';
import {AboutComponent} from '../app/about/about.component';
import {HomeComponent} from '../app/home/home.component';

const routes: Routes = [
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'home',component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
