import { Kayit } from './../../models/kayit';
import { Router, RouterModule } from '@angular/router';
import { FbServisService } from '../../services/fbServis.service';
import { Sonuc } from '../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  kayitlar: any;
  secKayit: Kayit = new Kayit();
  sonuc: Sonuc = new Sonuc();

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    this.KayitListele();
    this.secKayit.key=null;
  }

  KayitListele(){
    this.fbServis.KayitListele().snapshotChanges().pipe(
            map(changes =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(data => {
            this.kayitlar = data;
          });
      
  }
  KayitDuzenle(kayit:Kayit){
    Object.assign(this.secKayit, kayit)
  }
  KayitSil(kayit:Kayit){
    this.fbServis.KayitSil(kayit.key).then(() =>{
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Ders Silindi"
    });

  }
  Kaydet(){
    var tarih=new Date();
    
    if(this.secKayit.key==null){
      
      this.fbServis.KayitEkle(this.secKayit).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Ders Eklendi";
      });
    }
    else{
      this.fbServis.KayitDuzenle(this.secKayit).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Ders Düzenlendi";
      });

    }
  }
Vazgec(){
  this.secKayit=new Kayit();
  this.secKayit.key = null;
}
OturumuKapat(){
  this.fbServis.OturumKapat().then(()=> {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  });
}
}
