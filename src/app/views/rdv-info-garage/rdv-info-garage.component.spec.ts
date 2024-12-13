import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvInfoGarageComponent } from './rdv-info-garage.component';

describe('RdvInfoGarageComponent', () => {
  let component: RdvInfoGarageComponent;
  let fixture: ComponentFixture<RdvInfoGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdvInfoGarageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvInfoGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
