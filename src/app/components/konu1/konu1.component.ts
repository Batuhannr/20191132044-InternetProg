import { Router } from '@angular/router';
import { konu1sonuc } from './../../models/konu1sonuc';
import { Konu1 } from './../../models/konu1';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-konular',
  templateUrl: './konu1.component.html',
  styleUrls: ['./konu1.component.scss']
})
export class Konu1Component implements OnInit {
  konular1: any;
  secKonu1: Konu1 = new Konu1;
  Konu1Sonuc: konu1sonuc = new konu1sonuc;
  detay: boolean = false;
  detay1: boolean = false;
  detay2: boolean = false;
  detay3: boolean = false;

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.Konu1Listele();
    this.secKonu1.key = null;
  }
  Konu1Listele(){
    this.fbServis.Konu1Listele().snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(data => {
            this.konular1 = data;
          });
   
  }
  konu1Kaydet(){
    if(this.secKonu1.key== null) {
      this.fbServis.Konu1Ekle(this.secKonu1).then(() =>{
        this.Konu1Sonuc.islem = true;
        this.Konu1Sonuc.mesaj ="Konu Eklendi";
      });
    }
    else {
        this.fbServis.Konu1Duzenle(this.secKonu1).then(() =>{
          this.Konu1Sonuc.islem = true;
          this.Konu1Sonuc.mesaj ="Konu Düzenledi";
        });
    }
    
  }
konu1Duzenle(konu1: Konu1){
  Object.assign(this.secKonu1,konu1);

}
konu1Sil(konu1: Konu1){
  this.fbServis.Konu1Sil(konu1.key).then(() => {
    this.Konu1Sonuc.islem = true;
    this.Konu1Sonuc.mesaj ="Konu Silindi";
  })

}
OturumuKapat(){
  this.fbServis.OturumKapat().then(()=> {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}
}