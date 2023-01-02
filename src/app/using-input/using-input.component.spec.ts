import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingInputComponent } from './using-input.component';

describe('UsingInputComponent', () => {
  let component: UsingInputComponent;
  let fixture: ComponentFixture<UsingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
