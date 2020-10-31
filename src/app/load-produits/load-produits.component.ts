import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-load-produits',
  templateUrl: './load-produits.component.html',
  styleUrls: ['./load-produits.component.css']
})
export class LoadProduitsComponent implements OnInit {

  achat:Produit[];
  produits:Produit[];
  @Input() compteur:number=0;
  @Output() prodHT= new EventEmitter();
  constructor(private servico:ProduitsService){}

//INITIATION DES PRODUITS
 loadProduit():void
  {
  this.servico.getProduits()
  .subscribe(produits=>this.produits=produits, (data)=>{this.ngOnInit();});
  this.servico.getPAnier()
  .subscribe(produits=>this.achat=produits);
  }

  ngOnInit(){
    this.loadProduit();
    this.miseAJourCompteur();
  }

//MISE A JOUR DU COMPTEUR
miseAJourCompteur(){
  this.servico.getPAnier().subscribe(produit=>this.compteur=produit.length);
  this.prodHT.emit({
    value:this.compteur
  }
  )
}

  //SELECTION DE PRODUIT POUR ACHAT
  achterclick(event:any)
  {
    let p = new Produit();
    var button = event.target
    var shopItem = button.parentElement.parentElement
     p.id = shopItem.getElementsByClassName('title')[0].innerText;
     p.Prix = shopItem.getElementsByClassName('price')[0].innerText;
     p.img = shopItem.getElementsByClassName('pic-1')[0].src;
    p.qty=1;
    this.servico.getPanierProduit(p)
    .subscribe(produits=>this.achat=produits);
    this.miseAJourCompteur();
  }


}
