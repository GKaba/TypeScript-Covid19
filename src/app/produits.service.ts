import { Injectable } from '@angular/core';
import {Produit} from './produit';
import {PANIERS} from './mock-produits';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  constructor(private http:HttpClient) { }
  private URL = "http://localhost:3000/produits";

  getProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.URL)
  }

  //Ajouter nouveau produit
  rajouterProduit(p:Produit): Observable<Produit[]>{
    let P:Produit[];
    this.http.post<Produit>(`${this.URL}`,p).subscribe(l=>l=p);
    return this.http.get<Produit[]>(this.URL);
  }

  //RAJOUT D'UN NOUVEAU PORDUIT DANS LE PANIER
  getPanierProduit(p:Produit):Observable<Produit[]>{

    let counter:number=0;
    if(PANIERS.length == 0){
      PANIERS.push(p);
    }else if(PANIERS.length >= 0) {
        PANIERS.forEach(function (value,index) {
            if (value.id == p.id) {
              PANIERS[index].qty++;
              alert("Ce Produit est deja present dans le panier,("+PANIERS[index].id+", Quantité:"+PANIERS[index].qty+")");
          }else if(value.id != p.id){
            counter++;
          }
          if(counter >= PANIERS.length){
            PANIERS.push(p);
          }
        }
      )
    }
    return of(PANIERS);
  }

//SAISIE DU PANIER
  getPAnier():Observable<Produit[]>{
    return of(PANIERS);
  }
  //RETIRER PRODUIT DU PANIER
  RemoveProduit(p:Produit):Observable<Produit[]>{
    PANIERS.forEach(function (value,index) {
        if (value.id == p.id) {
          PANIERS.splice(index,1);
        }
    })
    return of(PANIERS);
  }
  clearPanier(){
    PANIERS.splice(0);
  }


}
