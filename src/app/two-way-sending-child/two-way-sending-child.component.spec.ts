import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaySendingChildComponent } from './two-way-sending-child.component';

describe('TwoWaySendingChildComponent', () => {
  let component: TwoWaySendingChildComponent;
  let fixture: ComponentFixture<TwoWaySendingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWaySendingChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWaySendingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
