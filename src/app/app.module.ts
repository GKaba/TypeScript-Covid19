import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoadProduitsComponent } from './load-produits/load-produits.component';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AjouterProduitPanierComponent } from './ajouter-produit-panier/ajouter-produit-panier.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoadProduitsComponent,
    ScrollUpComponent,
    AjouterProduitComponent,
    AjouterProduitPanierComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule

    //EventEmitter


  ],
  providers: [
    EventEmitter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
