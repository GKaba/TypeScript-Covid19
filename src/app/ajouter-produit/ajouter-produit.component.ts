import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Produit } from '../produit';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  constructor(private produits :ProduitsService) {

  }

  ngOnInit(): void {
  }

  produitarr:Produit[];
  name :string;
  price :string;
  url: any;
  
//prendre le nom de produit .
  onKeyname(event: any) {
   this.name = event.target.value ;
 }
 //prendre le prix de produit 
 onKeyprix(event: any) {
   this.price = event.target.value;
 }

 //événement pour le changement d'image 

 filechange(event:any) {
   this.readurl_file(event);
 }

 //Lire le url d'image.

 readurl_file(event:any) {
   if (event.target.files && event.target.files[0]) {
     const reader = new FileReader();
     reader.onload = (eve: any) => {
       this.url = eve.target.result;
     };
     reader.readAsDataURL(event.target.files[0]);
   }
 }

 //Ajouter produit a la liste.
 ajoutetoliste(){
   let customObj = new Produit();
   customObj.id = this.name;
   customObj.Prix = this.price;
   customObj.img = this.url;
   this.produits.rajouterProduit(customObj).subscribe(produits=>this.produitarr=produits);

   (<HTMLFormElement>document.getElementById("add-product")).reset();
    window.location.reload();//Fonctionne mais c'est toute la page qui reload.
    window.scrollTo(1000,1000);



 }

}
