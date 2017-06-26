import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailPageComponent } from './mail-page.component';

describe('MailPageComponent', () => {
  let component: MailPageComponent;
  let fixture: ComponentFixture<MailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
