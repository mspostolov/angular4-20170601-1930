import { Component, OnDestroy } from '@angular/core';
import { MailData } from 'app/models/mail-data';

@Component({
    selector: 'app-mail-box',
    templateUrl: './mail-box.component.html',
    styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnDestroy {
    private addEmailInterval: any;
    private mailId: number;

    private getDateMinusMinutes(minutes: number): Date {
        const date = new Date();
        date.setMinutes(date.getMinutes() - minutes);

        return date;
    }

    mailDataItems: Array<MailData> = [
        new MailData(1, 'Sherlock Holmes', 'The Hound of the Baskervilles', new Date()),
        new MailData(2, 'John Watson', 'The Sign of the Four', this.getDateMinusMinutes(5)),
        new MailData(3, 'James Moriarty', 'The Valley of Fear', this.getDateMinusMinutes(120)),
        new MailData(4, 'Mrs. Hudson', 'A Scandal in Bohemia', this.getDateMinusMinutes(4320))
    ];

    deleteEmail(emailId: number) {
        let index = this.mailDataItems.findIndex(item => { return item.id === emailId; });
        this.mailDataItems.splice(index, 1);
    }

    constructor() {
        this.mailId = this.mailDataItems.length;

        this.addEmailInterval = setInterval(() => {
            this.mailId++;
            this.mailDataItems.push(new MailData(this.mailId, 'James Moriarty', 'Hello!', new Date()));
        }, 3000);
    }

    ngOnDestroy(): void {
        clearInterval(this.addEmailInterval);
    }
}
