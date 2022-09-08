import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LazyAboutComponent}from './lazy-about.component'

const routes: Routes = [{path:'',component:LazyAboutComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyAboutRoutingModule { }
