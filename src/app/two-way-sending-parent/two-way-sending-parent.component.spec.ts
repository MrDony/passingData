import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaySendingParentComponent } from './two-way-sending-parent.component';

describe('TwoWaySendingParentComponent', () => {
  let component: TwoWaySendingParentComponent;
  let fixture: ComponentFixture<TwoWaySendingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWaySendingParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWaySendingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
