import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractStaffingComponent } from './contract-staffing.component';

describe('ContractStaffingComponent', () => {
  let component: ContractStaffingComponent;
  let fixture: ComponentFixture<ContractStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractStaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
