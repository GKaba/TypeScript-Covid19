import { Component,OnInit, Input, ViewChild, Output } from '@angular/core';
import { PANIERS } from './mock-produits';
import { ProduitsService } from './produits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Covid19';
public compteur:number;
 
constructor(private service:ProduitsService){}

ngOnInit(){
  this.updateCartTotal();
}
//passer le valeur de compteur.
MonCompteur(event){
    this.compteur=event.value;
}
//message pour click envoyer message .
  messageNousJoindre()
  {
    (<HTMLFormElement>document.getElementById("contact-form")).reset();
    alert('Merci... Notre équipe vous contactera dans les plus brefs délais..');
    window.scrollTo(0,0);
  }

  //mise à jour le total dans le panier.
  updateCartTotal() {
    let panier = PANIERS;
    let total:number=0;
    this.compteur;
    for(let i = 0;i<panier.length;i++){
      total+= ((+panier[i].Prix)*panier[i].qty);
    }
    total = Math.round(total * 100) / 100;
    if (total<=0) {
      total=0;
      this.compteur=0;
    }
  return total;
  }

   //traiter paiment
     checkOut() {
      this.service.clearPanier();
      alert("Merci Pour Votre Achat...")
      window.location.reload();
      window.scrollTo(0,0);
  }


}
