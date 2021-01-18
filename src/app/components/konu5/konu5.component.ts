import { Router } from '@angular/router';
import { Konu5Sonuc } from './../../models/konu5sonuc';
import { Konu5 } from './../../models/konu5';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-konu5',
  templateUrl: './konu5.component.html',
  styleUrls: ['./konu5.component.scss']
})
export class Konu5Component implements OnInit {
  konular5: any;
  secKonu5: Konu5 = new Konu5;
  Konu5Sonuc: Konu5Sonuc = new Konu5Sonuc;

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.Konu5Listele();
    this.secKonu5.key = null;
  }
  Konu5Listele(){
    this.fbServis.Konu5Listele().snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(data => {
            this.konular5 = data;
          });
   
  }
  konu5Kaydet(){
    if(this.secKonu5.key== null) {
      this.fbServis.Konu5Ekle(this.secKonu5).then(() =>{
        this.Konu5Sonuc.islem = true;
        this.Konu5Sonuc.mesaj ="Konu Eklendi";
      });
    }
    else {
        this.fbServis.Konu5Duzenle(this.secKonu5).then(() =>{
          this.Konu5Sonuc.islem = true;
          this.Konu5Sonuc.mesaj ="Konu Düzenledi";
        });
    }
    
  }
konu5Duzenle(konu5: Konu5){
  Object.assign(this.secKonu5,konu5);

}
konu5Sil(konu5: Konu5){
  this.fbServis.Konu5Sil(konu5.key).then(() => {
    this.Konu5Sonuc.islem = true;
    this.Konu5Sonuc.mesaj ="Konu Silindi";
  })

}
OturumuKapat(){
  this.fbServis.OturumKapat().then(()=> {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}
}