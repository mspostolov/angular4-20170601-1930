import {Mail} from "./mail.model";

export const MAILS: Mail[] = [
  {
    from: 'ex1@mail.com',
    to: 'my@mail.com',
    subject: 'First mail',
    receivedAt: '2017-06-11T20:18:06.905Z',
    content: 'First mail content'
  },
  {
    from: 'ex2@mail.com',
    to: 'my@mail.com',
    subject: 'Second one',
    receivedAt: '2017-06-11T20:18:06.905Z',
    content: 'Second email content'
  },
  {
    from: 'ex3@mail.com',
    to: 'my@mail.com',
    subject: 'Third letter',
    receivedAt: '2017-06-11T20:18:06.905Z',
    content: 'Third letter content'
  },
  {
    from: 'ex4@mail.com',
    to: 'my@mail.com',
    subject: 'Fourth mail',
    receivedAt: 1497212286905,
    content: 'Fourth mail content'
  },
  {
    from: 'ex5@mail.com',
    to: 'my@mail.com',
    subject: 'Fifth mail',
    receivedAt: 1497212286905,
    content: 'Fifth mail content'
  }
];
