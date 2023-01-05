import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidTwoWayChildComponent } from './valid-two-way-child.component';

describe('ValidTwoWayChildComponent', () => {
  let component: ValidTwoWayChildComponent;
  let fixture: ComponentFixture<ValidTwoWayChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidTwoWayChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidTwoWayChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
