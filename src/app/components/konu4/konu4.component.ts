import { Router } from '@angular/router';
import { Konu4Sonuc } from './../../models/konu4sonuc';
import { Konu4 } from './../../models/konu4';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-konular4',
  templateUrl: './konu4.component.html',
  styleUrls: ['./konu4.component.scss']
})
export class Konu4Component implements OnInit {
  konular4: any;
  secKonu4: Konu4 = new Konu4;
  Konu4Sonuc: Konu4Sonuc = new Konu4Sonuc;

  constructor(
    public fbServis: FbServisService,
    public router: Router

  ) { }

  ngOnInit() {
    this.Konu4Listele();
    this.secKonu4.key = null;
  }
  Konu4Listele(){
    this.fbServis.Konu4Listele().snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(data => {
            this.konular4 = data;
          });
   
  }
  konu4Kaydet(){
    if(this.secKonu4.key== null) {
      this.fbServis.Konu4Ekle(this.secKonu4).then(() =>{
        this.Konu4Sonuc.islem = true;
        this.Konu4Sonuc.mesaj ="Konu Eklendi";
      });
    }
    else {
        this.fbServis.Konu4Duzenle(this.secKonu4).then(() =>{
          this.Konu4Sonuc.islem = true;
          this.Konu4Sonuc.mesaj ="Konu Düzenledi";
        });
    }
    
  }
konu4Duzenle(konu4: Konu4){
  Object.assign(this.secKonu4,konu4);

}
konu4Sil(konu4: Konu4){
  this.fbServis.Konu4Sil(konu4.key).then(() => {
    this.Konu4Sonuc.islem = true;
    this.Konu4Sonuc.mesaj ="Konu Silindi";
  })

}
OturumuKapat(){
  this.fbServis.OturumKapat().then(()=> {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}
}