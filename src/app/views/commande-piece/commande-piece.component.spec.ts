import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePieceComponent } from './commande-piece.component';

describe('CommandePieceComponent', () => {
  let component: CommandePieceComponent;
  let fixture: ComponentFixture<CommandePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandePieceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
