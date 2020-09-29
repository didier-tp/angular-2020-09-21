import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { ConversionComponent } from './conversion/conversion.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  //{ path: 'login', component: LoginComponent } ,
  { path: 'login', component: Login2Component } ,
  { path: 'basic', component: BasicComponent } ,
  { path: 'conversion', component: ConversionComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
