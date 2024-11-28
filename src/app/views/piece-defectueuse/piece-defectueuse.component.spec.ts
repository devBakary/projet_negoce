import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceDefectueuseComponent } from './piece-defectueuse.component';

describe('PieceDefectueuseComponent', () => {
  let component: PieceDefectueuseComponent;
  let fixture: ComponentFixture<PieceDefectueuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieceDefectueuseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceDefectueuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
