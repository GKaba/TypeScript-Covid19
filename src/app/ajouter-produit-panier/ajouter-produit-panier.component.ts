import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../produit';
import { ProduitsService } from '../produits.service';
import {PANIERS} from '../mock-produits';
@Component({
  selector: 'app-ajouter-produit-panier',
  templateUrl: './ajouter-produit-panier.component.html',
  styleUrls: ['./ajouter-produit-panier.component.css']
})
export class AjouterProduitPanierComponent implements OnInit {

 produit:Produit;
 achat:Produit[]=PANIERS;
 @Input() compteur:number=0;
 @Output() prodHT= new EventEmitter();

 constructor(private produitsService:ProduitsService) { }

//decrementation de compteur.
decrement(){
 this.produitsService.getPAnier().subscribe(produit=>this.compteur=produit.length);
  this.prodHT.emit({
    value:this.compteur
  })
}

  
  //enlever produit.
  rmproduit(event:Produit){
    this.produitsService.RemoveProduit(event)
    .subscribe(produits=>this.achat= produits);
    this.decrement()
  }
  ngOnInit(): void {
    this.getProdHT;
  }
  
//RECOLTE DU PANIER
  getProdHT(){
    this.produitsService.getPAnier()
    .subscribe(produits=>this.achat= produits);
  }



}
