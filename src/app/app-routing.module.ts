import { Detay1Component } from './components/detay1/detay1.component';
import { RegisterComponent } from './components/register/register.component';
import { Konu6Component } from './components/konu6/konu6.component';
import { Konu5Component } from './components/konu5/konu5.component';
import { Konu4Component } from './components/konu4/konu4.component';
import { Konu3Component } from './components/konu3/konu3.component';
import { Konu2Component } from './components/konu2/konu2.component';
import { Konu1Component } from './components/konu1/konu1.component';
import { LoginComponent } from './components/login/login.component';
import { KonularComponent } from './components/konular/konular.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectLogin=() => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
   component: 
   HomeComponent,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  },
  {
    path: 'konular',
   component: 
   KonularComponent,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  }
  ,
  {
    path: 'konu1',
   component: 
   Konu1Component,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  }
  ,
  {
    path: 'konu2',
   component: 
   Konu2Component,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  }
  ,
  {
    path: 'konu3',
   component: 
   Konu3Component,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  }
  ,
  {
    path: 'konu4',
   component: 
   Konu4Component,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  }
  ,
  {
    path: 'konu5',
   component: 
   Konu5Component,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  }
  ,
  {
    path: 'konu6',
   component: 
   Konu6Component,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  }
  ,
  {
    path: 'detay/:key',
   component: 
   Detay1Component,
   canActivate:[AngularFireAuthGuard],
   data: {
     authGuardPipe: redirectLogin
  }
   
  }
  ,
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }