import { Konu } from './../../models/konu';
import { Kayit } from './../../models/kayit';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detay1',
  templateUrl: './detay1.component.html',
  styleUrls: ['./detay1.component.scss']
})
export class Detay1Component implements OnInit {

  key:string;
  bitisTar:string;
  konuAdi:string;
  secKayit:Kayit= new Kayit();
  
  constructor(
    public route: ActivatedRoute,
    public fbServis:FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.DetayGetir();
      
    });
  }
  DetayGetir(){
    this.fbServis.Detay1(this.key ).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secKayit = (y as Kayit)
      console.log(this.secKayit);
    })
  }

}
