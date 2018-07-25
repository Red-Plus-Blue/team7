import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMasterFormComponent } from './screen-master-form.component';

describe('ScreenMasterFormComponent', () => {
  let component: ScreenMasterFormComponent;
  let fixture: ComponentFixture<ScreenMasterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenMasterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
