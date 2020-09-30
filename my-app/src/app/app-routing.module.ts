import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { ConversionComponent } from './conversion/conversion.component';
import { Login2Component } from './login2/login2.component';
import { TvaComponent } from './basic/tva/tva.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  //{ path: 'login', component: LoginComponent } ,
  { path: 'login', component: Login2Component } ,
  { path: 'basic', component: BasicComponent ,
  children: [
    { path: 'tva', component: TvaComponent },
    { path: 'calculatrice/:mode', component: CalculatriceComponent },
    { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
    ]
   } ,
  { path: 'conversion', component: ConversionComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
