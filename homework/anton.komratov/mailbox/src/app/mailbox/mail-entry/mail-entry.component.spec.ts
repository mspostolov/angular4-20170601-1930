import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailEntryComponent } from './mail-entry.component';

describe('MailEntryComponent', () => {
  let component: MailEntryComponent;
  let fixture: ComponentFixture<MailEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
