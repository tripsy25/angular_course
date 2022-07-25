import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleEmployeeComponent } from './apple-employee.component';

describe('AppleEmployeeComponent', () => {
  let component: AppleEmployeeComponent;
  let fixture: ComponentFixture<AppleEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
