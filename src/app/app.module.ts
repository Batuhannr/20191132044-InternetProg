import { Detay1Component } from './components/detay1/detay1.component';
import { RegisterComponent } from './components/register/register.component';
import { Konu6Component } from './components/konu6/konu6.component';
import { Konu5Component } from './components/konu5/konu5.component';
import { Konu4Component } from './components/konu4/konu4.component';
import { Konu3Component } from './components/konu3/konu3.component';
import { Konu2Component } from './components/konu2/konu2.component';

import { LoginComponent } from './components/login/login.component';
import { KonularComponent } from './components/konular/konular.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { Konu1Component } from './components/konu1/konu1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KonularComponent,
    LoginComponent,
    Konu1Component,
    Konu2Component,
    Konu3Component,
    Konu4Component,
    Konu5Component,
    Konu6Component,
    RegisterComponent,
    Detay1Component
    

    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
