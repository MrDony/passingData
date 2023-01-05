import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidTwoWayComponent } from './valid-two-way.component';

describe('ValidTwoWayComponent', () => {
  let component: ValidTwoWayComponent;
  let fixture: ComponentFixture<ValidTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidTwoWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
