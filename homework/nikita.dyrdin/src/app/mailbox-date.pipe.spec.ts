import { MailboxDatePipe } from './mailbox-date.pipe';

describe('MailboxDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MailboxDatePipe();
    expect(pipe).toBeTruthy();
  });
});
