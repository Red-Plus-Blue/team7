import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEvaluationPayFormComponent } from './screen-evaluation-pay-form.component';

describe('ScreenEvaluationPayFormComponent', () => {
  let component: ScreenEvaluationPayFormComponent;
  let fixture: ComponentFixture<ScreenEvaluationPayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenEvaluationPayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenEvaluationPayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
