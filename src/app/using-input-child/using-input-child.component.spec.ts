import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingInputChildComponent } from './using-input-child.component';

describe('UsingInputChildComponent', () => {
  let component: UsingInputChildComponent;
  let fixture: ComponentFixture<UsingInputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingInputChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingInputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
