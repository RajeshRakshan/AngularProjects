import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyContentComponent } from './lazy-content.component';

const routes: Routes = [{path:'',component:LazyContentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyContentRoutingModule { }
