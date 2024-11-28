import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationProComponent } from './authentification-pro.component';

describe('AuthentificationProComponent', () => {
  let component: AuthentificationProComponent;
  let fixture: ComponentFixture<AuthentificationProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthentificationProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentificationProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
