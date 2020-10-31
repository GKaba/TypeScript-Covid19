import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadProduitsComponent } from './load-produits.component';

describe('LoadProduitsComponent', () => {
  let component: LoadProduitsComponent;
  let fixture: ComponentFixture<LoadProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
