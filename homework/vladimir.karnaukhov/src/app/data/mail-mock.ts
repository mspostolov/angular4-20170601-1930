import { Email } from './mail';

export const DefaultEmails: Email[] = [
    <Email>{
        id: 1,
        receivingDate: new Date('2017-06-09T10:00:00'),
        from: "Почтальон Печкин",
        title: "Вам письмо",
        text: "Придите за письмом на почту",
        createDate: null,
        to: ''
    },
    <Email>{
        id: 2,
        receivingDate: new Date('2017-06-10T10:00:00'),
        from: "Почтальон Печкин",
        title: "Re: Вам письмо",
        text: "Вы не забыли про пришедшее письмо?",
        createDate: null,
        to: ''
    },
    <Email>{
        id: 3,
        receivingDate: new Date('2017-06-11T10:00:00'),
        from: "Почтальон Печкин",
        title: "Re: Re: Вам письмо",
        text: "Вас письмо лежит дожидается уже третий день. Не хотите получить?",
        createDate: null,
        to: ''
    }
];