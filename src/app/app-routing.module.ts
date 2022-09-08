import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import{LazyAboutComponent}from '../app/lazy-about/lazy-about.component'
import{LazyContentComponent}from './lazy-content/lazy-content.component'
import{LazyHomeComponent}from '../app/lazy-home/lazy-home.component'
const routes: Routes = [
// {
//   path:'lazy-about',component:LazyAboutComponent
// }
{
path:'lazy-about',
loadChildren:()=>import('./lazy-about/lazy-about.module').then(m=>m.LazyAboutModule),
data:{myLoad:false}
},
{
  path:'lazy-content',
  loadChildren:()=>import('./lazy-content/lazy-content.module').then(m=>m.LazyContentModule),
  data:{myLoad:false}
  },
// {

//   path:'lazy-content',component:LazyContentComponent
// },
{
  path:'lazy-home',component:LazyHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:NoPreloading})],
  //PreloadAllModuled--- it will preload all components even though  components is lazy loaded
  // imports: [RouterModule.forRoot(routes,{preloadingStrategy:NoPreloading})],
  //NoPreloading---it will not preload all components  it will do only lazy loading process   
  exports: [RouterModule]
})
export class AppRoutingModule { }
 









