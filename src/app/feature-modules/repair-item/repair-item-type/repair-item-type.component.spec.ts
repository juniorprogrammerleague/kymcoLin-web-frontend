import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairItemTypeComponent } from './repair-item-type.component';

describe('RepairItemTypeComponent', () => {
  let component: RepairItemTypeComponent;
  let fixture: ComponentFixture<RepairItemTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairItemTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairItemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
