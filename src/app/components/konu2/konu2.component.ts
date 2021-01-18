import { Router } from '@angular/router';
import { Konu2Sonuc } from './../../models/konu2sonuc';
import { Konu2 } from './../../models/konu2';
import { konu1sonuc } from './../../models/konu1sonuc';
import { Konu1 } from './../../models/konu1';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-konular2',
  templateUrl: './konu2.component.html',
  styleUrls: ['./konu2.component.scss']
})
export class Konu2Component implements OnInit {
  konular2: any;
  secKonu2: Konu2 = new Konu2;
  Konu2Sonuc: Konu2Sonuc = new Konu2Sonuc;
  detay: boolean = false;
  detay1: boolean = false;
  detay2: boolean = false;
  detay3: boolean = false;

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.Konu2Listele();
    this.secKonu2.key = null;
  }
  Konu2Listele(){
    this.fbServis.Konu2Listele().snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(data => {
            this.konular2 = data;
          });
   
  }
  konu2Kaydet(){
    if(this.secKonu2.key== null) {
      this.fbServis.Konu2Ekle(this.secKonu2).then(() =>{
        this.Konu2Sonuc.islem = true;
        this.Konu2Sonuc.mesaj ="Konu Eklendi";
      });
    }
    else {
        this.fbServis.Konu2Duzenle(this.secKonu2).then(() =>{
          this.Konu2Sonuc.islem = true;
          this.Konu2Sonuc.mesaj ="Konu Düzenledi";
        });
    }
    
  }
konu2Duzenle(konu2: Konu2){
  Object.assign(this.secKonu2,konu2);

}
konu2Sil(konu2: Konu2){
  this.fbServis.Konu2Sil(konu2.key).then(() => {
    this.Konu2Sonuc.islem = true;
    this.Konu2Sonuc.mesaj ="Konu Silindi";
  })

}
OturumuKapat(){
  this.fbServis.OturumKapat().then(()=> {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}
}