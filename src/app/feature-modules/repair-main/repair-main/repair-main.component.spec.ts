import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairMainComponent } from './repair-main.component';

describe('RepairMainComponent', () => {
  let component: RepairMainComponent;
  let fixture: ComponentFixture<RepairMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
