import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVehiculeComponent } from './list-vehicule.component';

describe('ListVehiculeComponent', () => {
  let component: ListVehiculeComponent;
  let fixture: ComponentFixture<ListVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVehiculeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
