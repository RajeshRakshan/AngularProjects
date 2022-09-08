import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyAboutRoutingModule } from './lazy-about-routing.module';
import{LazyAboutComponent}from './lazy-about.component'


@NgModule({
  declarations: [LazyAboutComponent],
  imports: [
    CommonModule,
    LazyAboutRoutingModule
  ]
})
export class LazyAboutModule { }
