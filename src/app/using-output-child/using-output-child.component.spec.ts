import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingOutputChildComponent } from './using-output-child.component';

describe('UsingOutputChildComponent', () => {
  let component: UsingOutputChildComponent;
  let fixture: ComponentFixture<UsingOutputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingOutputChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingOutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
