import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEmployeeInformationComponent } from './section-employee-information.component';

describe('SectionEmployeeInformationComponent', () => {
  let component: SectionEmployeeInformationComponent;
  let fixture: ComponentFixture<SectionEmployeeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEmployeeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEmployeeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
