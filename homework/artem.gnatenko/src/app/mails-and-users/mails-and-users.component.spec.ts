import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsAndUsersComponent } from './mails-and-users.component';

describe('MailsAndUsersComponent', () => {
  let component: MailsAndUsersComponent;
  let fixture: ComponentFixture<MailsAndUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailsAndUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsAndUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
