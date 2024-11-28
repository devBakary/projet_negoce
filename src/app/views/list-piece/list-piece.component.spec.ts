import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPieceComponent } from './list-piece.component';

describe('ListPieceComponent', () => {
  let component: ListPieceComponent;
  let fixture: ComponentFixture<ListPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPieceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
