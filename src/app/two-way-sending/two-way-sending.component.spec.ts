import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaySendingComponent } from './two-way-sending.component';

describe('TwoWaySendingComponent', () => {
  let component: TwoWaySendingComponent;
  let fixture: ComponentFixture<TwoWaySendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWaySendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWaySendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
