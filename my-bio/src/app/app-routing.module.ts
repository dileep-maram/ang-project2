import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 {
  path:'',
  redirectTo:'home',
  pathMatch:'full'
 },
 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'aboutUs',
  component:AboutUsComponent
 },
 {
  path:'contactUs',
  component:ContactUsComponent
 },
 {
  path:'**',
  component:PageNotFoundComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
