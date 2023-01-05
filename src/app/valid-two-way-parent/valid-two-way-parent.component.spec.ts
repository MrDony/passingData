import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidTwoWayParentComponent } from './valid-two-way-parent.component';

describe('ValidTwoWayParentComponent', () => {
  let component: ValidTwoWayParentComponent;
  let fixture: ComponentFixture<ValidTwoWayParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidTwoWayParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidTwoWayParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
