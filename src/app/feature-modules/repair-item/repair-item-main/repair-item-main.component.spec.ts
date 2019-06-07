import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairItemMainComponent } from './repair-item-main.component';

describe('RepairItemMainComponent', () => {
  let component: RepairItemMainComponent;
  let fixture: ComponentFixture<RepairItemMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairItemMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairItemMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
