import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingOutputParentComponent } from './using-output-parent.component';

describe('UsingOutputParentComponent', () => {
  let component: UsingOutputParentComponent;
  let fixture: ComponentFixture<UsingOutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingOutputParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingOutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
