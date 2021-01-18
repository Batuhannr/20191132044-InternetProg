import { Router } from '@angular/router';
import { Konu3Sonuc } from './../../models/konu3sonuc';
import { Konu3 } from './../../models/konu3';
import { Konu2Sonuc } from './../../models/konu2sonuc';
import { Konu2 } from './../../models/konu2';

import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-konular3',
  templateUrl: './konu3.component.html',
  styleUrls: ['./konu3.component.scss']
})
export class Konu3Component implements OnInit {
  konular3: any;
  secKonu3: Konu3 = new Konu3;
  Konu3Sonuc: Konu3Sonuc = new Konu3Sonuc;
  detay: boolean = false;
  detay1: boolean = false;
  detay2: boolean = false;

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.Konu3Listele();
    this.secKonu3.key = null;
  }
  Konu3Listele(){
    this.fbServis.Konu3Listele().snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(data => {
            this.konular3 = data;
          });
   
  }
  konu3Kaydet(){
    if(this.secKonu3.key== null) {
      this.fbServis.Konu3Ekle(this.secKonu3).then(() =>{
        this.Konu3Sonuc.islem = true;
        this.Konu3Sonuc.mesaj ="Konu Eklendi";
      });
    }
    else {
        this.fbServis.Konu3Duzenle(this.secKonu3).then(() =>{
          this.Konu3Sonuc.islem = true;
          this.Konu3Sonuc.mesaj ="Konu Düzenledi";
        });
    }
    
  }
konu3Duzenle(konu3: Konu3){
  Object.assign(this.secKonu3,konu3);

}
konu3Sil(konu3: Konu3){
  this.fbServis.Konu3Sil(konu3.key).then(() => {
    this.Konu3Sonuc.islem = true;
    this.Konu3Sonuc.mesaj ="Konu Silindi";
  })

}
OturumuKapat(){
  this.fbServis.OturumKapat().then(()=> {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}
}