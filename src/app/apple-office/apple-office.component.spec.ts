import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleOfficeComponent } from './apple-office.component';

describe('AppleOfficeComponent', () => {
  let component: AppleOfficeComponent;
  let fixture: ComponentFixture<AppleOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
