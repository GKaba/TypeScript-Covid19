import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProduitPanierComponent } from './ajouter-produit-panier.component';

describe('AjouterProduitPanierComponent', () => {
  let component: AjouterProduitPanierComponent;
  let fixture: ComponentFixture<AjouterProduitPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterProduitPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProduitPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
