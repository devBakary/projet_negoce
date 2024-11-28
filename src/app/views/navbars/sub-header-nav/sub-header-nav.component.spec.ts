import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderNavComponent } from './sub-header-nav.component';

describe('SubHeaderNavComponent', () => {
  let component: SubHeaderNavComponent;
  let fixture: ComponentFixture<SubHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubHeaderNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
