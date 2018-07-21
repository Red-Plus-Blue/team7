import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWrittenAppealComponent } from './section-written-appeal.component';

describe('SectionWrittenAppealComponent', () => {
  let component: SectionWrittenAppealComponent;
  let fixture: ComponentFixture<SectionWrittenAppealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWrittenAppealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWrittenAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
