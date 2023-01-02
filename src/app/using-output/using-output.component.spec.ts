import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingOutputComponent } from './using-output.component';

describe('UsingOutputComponent', () => {
  let component: UsingOutputComponent;
  let fixture: ComponentFixture<UsingOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
