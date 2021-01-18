import { Router } from '@angular/router';
import { Konu6Sonuc } from './../../models/konu6sonuc';
import { Konu6 } from './../../models/konu6';
import { Konu5Sonuc } from './../../models/konu5sonuc';
import { Konu5 } from './../../models/konu5';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-konu6',
  templateUrl: './konu6.component.html',
  styleUrls: ['./konu6.component.scss']
})
export class Konu6Component implements OnInit {
  konular6: any;
  secKonu6: Konu6 = new Konu6;
  Konu6Sonuc: Konu6Sonuc = new Konu6Sonuc;

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.Konu6Listele();
    this.secKonu6.key = null;
  }
  Konu6Listele(){
    this.fbServis.Konu6Listele().snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(data => {
            this.konular6 = data;
          });
   
  }
  konu6Kaydet(){
    if(this.secKonu6.key== null) {
      this.fbServis.Konu6Ekle(this.secKonu6).then(() =>{
        this.Konu6Sonuc.islem = true;
        this.Konu6Sonuc.mesaj ="Konu Eklendi";
      });
    }
    else {
        this.fbServis.Konu6Duzenle(this.secKonu6).then(() =>{
          this.Konu6Sonuc.islem = true;
          this.Konu6Sonuc.mesaj ="Konu Düzenledi";
        });
    }
    
  }
konu6Duzenle(konu6: Konu6){
  Object.assign(this.secKonu6,konu6);

}
konu6Sil(konu6: Konu6){
  this.fbServis.Konu6Sil(konu6.key).then(() => {
    this.Konu6Sonuc.islem = true;
    this.Konu6Sonuc.mesaj ="Konu Silindi";
  })

}
OturumuKapat(){
  this.fbServis.OturumKapat().then(()=> {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}
}