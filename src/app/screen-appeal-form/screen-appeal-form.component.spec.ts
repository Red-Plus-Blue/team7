import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAppealFormComponent } from './screen-appeal-form.component';

describe('ScreenAppealFormComponent', () => {
  let component: ScreenAppealFormComponent;
  let fixture: ComponentFixture<ScreenAppealFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenAppealFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAppealFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
