import { Uye } from './../models/uye';
import { Kayit001 } from './../models/kayit001';
import { Konu6 } from './../models/konu6';
import { Konu5 } from './../models/konu5';
import { Konu4 } from './../models/konu4';
import { Konu3 } from './../models/konu3';
import { Konu2 } from './../models/konu2';
import { Konu1 } from './../models/konu1';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kayit } from '../models/kayit';
import { Konu } from '../models/konu';
import {AngularFireAuth} from '@angular/fire/auth'
import { Key } from 'protractor';
import { Ogr1 } from '../models/ogr1';
@Injectable({
  providedIn: 'root'
})
export class FbServisService {

  private dbKayit = '/Dersler';
  private dbKonu = '/Konular';
  private dbKonu1 = '/Konu1';
  private dbKonu2 = '/Konu2';
  private dbKonu3 = '/Konu3';
  private dbKonu4 = '/Konu4';
  private dbKonu5 = '/Konu5';
  private dbKonu6 = '/Konu6';
  private dbKayit001 = '/kayit001';
  private dbUye= '/Uye';
  private dbOgr1='/Ogr1';

ogr1Ref: AngularFireList<Ogr1>
  kayitRef: AngularFireList<Kayit>;
  konuRef: AngularFireList<Konu>;
  konu1Ref: AngularFireList<Konu1>;
  konu2Ref: AngularFireList<Konu2>;
  konu3Ref: AngularFireList<Konu3>;
  konu4Ref: AngularFireList<Konu4>;
  konu5Ref: AngularFireList<Konu5>;
  konu6Ref: AngularFireList<Konu6>;
  detayRef: AngularFireList<Konu>;
  kayit001Ref: AngularFireList<Kayit001>;
  uyeRef: AngularFireList<Uye>;
  constructor(
      public db: AngularFireDatabase,
      public afAuth: AngularFireAuth

    ) 
  {
      this.kayitRef = db.list(this.dbKayit);
      this.konuRef = db.list(this.dbKonu);
      this.konu1Ref = db.list(this.dbKonu1);
      this.konu2Ref = db.list(this.dbKonu2);
      this.konu3Ref = db.list(this.dbKonu3);
      this.konu4Ref = db.list(this.dbKonu4);
      this.konu5Ref = db.list(this.dbKonu5);
      this.konu6Ref = db.list(this.dbKonu6);
      this.kayit001Ref=db.list(this.dbKayit001);
      this.uyeRef=db.list(this.dbUye);
      this.ogr1Ref=db.list(this.dbOgr1);
    }
  Detay1(key: string){
    return this.db.object("/detay/" + key);
  }
  Detay11(bitisTar: string){
    return this.db.object("/detay/" + bitisTar);
  }
  Ogr1Listele(){
    return this.ogr1Ref;
  }
  Ogr1Ekle(ogr1: Ogr1){
    return this.ogr1Ref.push(ogr1)
  }

  OturumAc(mail:string,parola:string){
    return this.afAuth.signInWithEmailAndPassword(mail,parola);
  
  }
  OturumKapat(){
    return this.afAuth.signOut();
    
  }
  OturumKontrol(){
    if(localStorage.getItem("user")){
      return true;
    }else{
      return false;
    }
  }
  UyeOl(uye:Uye){
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }
  UyeEkle(uye:Uye){
    return this.uyeRef.push(uye);
  }
Konu1Listele(){
  return this.konu1Ref;
}
Konu1Ekle(konu1: Konu1) {
  return this.konu1Ref.push(konu1);
}
Konu1Duzenle(konu1: Konu1) {
    return this.konu1Ref.update(konu1.key, konu1);
}
Konu1Sil(key: string){
  return this.konu1Ref.remove(key);
}



Konu2Listele(){
  return this.konu2Ref;
}
Konu2Ekle(konu2: Konu2) {
  return this.konu2Ref.push(konu2);
}
Konu2Duzenle(konu2: Konu2) {
    return this.konu2Ref.update(konu2.key, konu2);
}
Konu2Sil(key: string){
  return this.konu2Ref.remove(key);
}



Konu3Listele(){
  return this.konu3Ref;
}
Konu3Ekle(konu3: Konu3) {
  return this.konu3Ref.push(konu3);
}
Konu3Duzenle(konu3: Konu3) {
    return this.konu3Ref.update(konu3.key, konu3);
}
Konu3Sil(key: string){
  return this.konu3Ref.remove(key);
}



Konu4Listele(){
  return this.konu4Ref;
}
Konu4Ekle(konu4: Konu4) {
  return this.konu4Ref.push(konu4);
}
Konu4Duzenle(konu4: Konu4) {
    return this.konu4Ref.update(konu4.key, konu4);
}
Konu4Sil(key: string){
  return this.konu4Ref.remove(key);
}



Konu5Listele(){
  return this.konu5Ref;
}
Konu5Ekle(konu5: Konu5) {
  return this.konu5Ref.push(konu5);
}
Konu5Duzenle(konu5: Konu5) {
    return this.konu5Ref.update(konu5.key, konu5);
}
Konu5Sil(key: string){
  return this.konu5Ref.remove(key);
}



Konu6Listele(){
  return this.konu6Ref;
}
Konu6Ekle(konu6: Konu6) {
  return this.konu6Ref.push(konu6);
}
Konu6Duzenle(konu6: Konu6) {
    return this.konu6Ref.update(konu6.key, konu6);
}
Konu6Sil(key: string){
  return this.konu6Ref.remove(key);
}



KonuListele(){
  return this.konuRef;
}
KonuEkle(konu: Konu) {
  return this.konuRef.push(konu);
}
KonuDuzenle(konu: Konu) {
  return this.konuRef.update(konu.key, konu);
}
KonuSil(key: string) {
  return this.konuRef.remove(key);
}


KayitListele(){
  return this.kayitRef;
}  
KayitEkle(kayit: Kayit) {
  return this.kayitRef.push(kayit);
}
KayitDuzenle(kayit: Kayit) {
  return this.kayitRef.update(kayit.key, kayit);
}
KayitSil(key: string) {
  return this.kayitRef.remove(key);
}
KayitByKey(key: string) {
  return this.db.object("/Kayitlar/" + key);
}




Kayit001Listele(){
  return this.kayit001Ref;
}
Kayit001Ekle(kayit001: Kayit001){
  return this.kayit001Ref.push(kayit001);
}
Kayit001Duzenle(kayit001: Kayit001){
  return this.kayit001Ref.update(kayit001.key, kayit001);
}
Kayit001Sil(key:string){
  return this.kayit001Ref.remove(key);
}

}
