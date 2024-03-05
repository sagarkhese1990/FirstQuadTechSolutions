import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSolutionsComponent } from './it-solutions.component';

describe('ItSolutionsComponent', () => {
  let component: ItSolutionsComponent;
  let fixture: ComponentFixture<ItSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
