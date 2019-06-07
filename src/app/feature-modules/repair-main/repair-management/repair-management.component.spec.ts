import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairManagementComponent } from './repair-management.component';

describe('RepairManagementComponent', () => {
  let component: RepairManagementComponent;
  let fixture: ComponentFixture<RepairManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
