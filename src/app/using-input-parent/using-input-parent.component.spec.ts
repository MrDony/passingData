import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingInputParentComponent } from './using-input-parent.component';

describe('UsingInputParentComponent', () => {
  let component: UsingInputParentComponent;
  let fixture: ComponentFixture<UsingInputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingInputParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingInputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
