import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleTechniqueComponent } from './controle-technique.component';

describe('ControleTechniqueComponent', () => {
  let component: ControleTechniqueComponent;
  let fixture: ComponentFixture<ControleTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleTechniqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
