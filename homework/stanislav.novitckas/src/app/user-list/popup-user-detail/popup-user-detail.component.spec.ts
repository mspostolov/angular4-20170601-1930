import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUserDetailComponent } from './popup-user-detail.component';

describe('PopupUserDetailComponent', () => {
  let component: PopupUserDetailComponent;
  let fixture: ComponentFixture<PopupUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
