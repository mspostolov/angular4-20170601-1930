import { Mail } from './mail';

export const initialMails: Mail[] = [
  {
    id: 1,
    title: 'Шеф, усе пропало!',
    receivedDate: new Date("2017-06-12 14:00:00")
  
  },
  {
    id: 2,
    title: 'У вас ус отклеился',
    receivedDate: new Date("2017-06-11 17:00:00")
   
  },
  {
    id: 3,
    title: 'Совещание по регламенту',
    receivedDate: new Date("2017-06-10 14:00:00")
   
  },
];