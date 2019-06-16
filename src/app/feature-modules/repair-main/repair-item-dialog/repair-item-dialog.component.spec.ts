import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairItemDialogComponent } from './repair-item-dialog.component';

describe('RepairItemDialogComponent', () => {
  let component: RepairItemDialogComponent;
  let fixture: ComponentFixture<RepairItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
