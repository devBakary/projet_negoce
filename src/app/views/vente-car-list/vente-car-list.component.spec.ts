import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteCarListComponent } from './vente-car-list.component';

describe('VenteCarListComponent', () => {
  let component: VenteCarListComponent;
  let fixture: ComponentFixture<VenteCarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenteCarListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenteCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
