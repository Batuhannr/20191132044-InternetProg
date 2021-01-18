import { Router } from '@angular/router';
import { FbServisService } from './../../services/fbServis.service';
import { Uye } from './../../models/uye';
import { Sonuc001 } from './../../models/sonuc001';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Sonuc001: Sonuc001 = new Sonuc001;
  secUye: Uye = new Uye;
  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  KayitYap(){
    this.fbServis.UyeOl(this.secUye).then(d =>{
      d.user.updateProfile({
        displayName: this.secUye.adsoyad
      });
      this.secUye.uid = d.user.uid;
      localStorage.setItem("user",JSON.stringify(d.user));
      this.UyeEkle();
    },err =>{
      this.Sonuc001.islem = false;
      this.Sonuc001.mesaj="Bilgileri Doğru giriniz"
    });
  }
  UyeEkle(){
    this.fbServis.UyeEkle(this.secUye).then(d=>{
      this.router.navigate(['/'])
    })
  }
}
