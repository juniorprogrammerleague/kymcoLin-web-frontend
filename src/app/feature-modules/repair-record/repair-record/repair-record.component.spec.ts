import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairRecordComponent } from './repair-record.component';

describe('RepairRecordComponent', () => {
  let component: RepairRecordComponent;
  let fixture: ComponentFixture<RepairRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
