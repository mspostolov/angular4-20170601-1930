import { Injectable } from '@angular/core';


@Injectable()
export class MailHelper {
  constructor() { }
  
  
  

   randomInt(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }


 calculateLifetime (startDate: Date, endDate: Date)
  {
  return (endDate.getTime() -  startDate.getTime());

  }
  
  
}