import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentSolutionsComponent } from './employment-solutions.component';

describe('EmploymentSolutionsComponent', () => {
  let component: EmploymentSolutionsComponent;
  let fixture: ComponentFixture<EmploymentSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
