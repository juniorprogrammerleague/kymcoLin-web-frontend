import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairItemListComponent } from './repair-item-list.component';

describe('RepairItemListComponent', () => {
  let component: RepairItemListComponent;
  let fixture: ComponentFixture<RepairItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
