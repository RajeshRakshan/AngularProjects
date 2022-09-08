import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyAboutComponent } from './lazy-about/lazy-about.component';
import { LazyContentComponent } from './lazy-content/lazy-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyHomeComponent,
    // LazyAboutComponent,
    // LazyContentComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
