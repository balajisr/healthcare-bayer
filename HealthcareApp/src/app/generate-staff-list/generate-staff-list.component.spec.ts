import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateStaffListComponent } from './generate-staff-list.component';

describe('GenerateStaffListComponent', () => {
  let component: GenerateStaffListComponent;
  let fixture: ComponentFixture<GenerateStaffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateStaffListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateStaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
