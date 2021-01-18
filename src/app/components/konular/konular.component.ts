import { Ogr1 } from './../../models/ogr1';
import { Router } from '@angular/router';

import { KonuSonuc } from './../../models/konusonuc';
import { Konu } from './../../models/konu';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import { userInfo } from 'os';

@Component({
  selector: 'app-konular',
  templateUrl: './konular.component.html',
  styleUrls: ['./konular.component.scss']
})
export class KonularComponent implements OnInit {
  konular: any;
  ogrAdi: string;
  uid: String;
  secKonu: Konu = new Konu;
  KonuSonuc: KonuSonuc = new KonuSonuc;
  secOgr1: Ogr1 = new Ogr1;
  detay: boolean = false;
  detay1: boolean = false;
  detay2: boolean = false;
  detay3: boolean = false;
  detay4: boolean = false;
  detay5: boolean = false;
  detay6: boolean = false;
  detay7: boolean = false;
  detay8: boolean = false;
  detay9: boolean = false;

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.KonuListele();
    this.secKonu.key = null;
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.ogrAdi=user.displayName;
  }
  KonuListele(){
    this.fbServis.KonuListele().snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(data => {
            this.konular = data;
          });
   
  }
  konuKaydet(){
    if(this.secKonu.key== null) {
      this.fbServis.KonuEkle(this.secKonu).then(() =>{
        this.KonuSonuc.islem = true;
        this.KonuSonuc.mesaj ="Konu Eklendi";
      });
    }
    else {
        this.fbServis.KonuDuzenle(this.secKonu).then(() =>{
          this.KonuSonuc.islem = true;
          this.KonuSonuc.mesaj ="Konu Düzenledi";
        });
    }
    
  }
konuDuzenle(konu: Konu){
  Object.assign(this.secKonu,konu);

}
konuSil(konu: Konu){
  this.fbServis.KonuSil(konu.key).then(() => {
    this.KonuSonuc.islem = true;
    this.KonuSonuc.mesaj ="Konu Silindi";
  })
}
OturumuKapat(){
  this.fbServis.OturumKapat().then(()=> {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}

Ogr1Ekle(){
  if(this.secOgr1.ogrAdi== null) {
    this.fbServis.Ogr1Ekle(this.secOgr1).then(() =>{
      this.KonuSonuc.islem = true;
      this.KonuSonuc.mesaj ="Kayıt Olunda";
      
    });
  }
  else {} 
}
}