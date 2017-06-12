import { Directive, HostListener } from '@angular/core';
import { DateTimeHelper } from 'app/date-time-helper';

@Directive({
    selector: '[appElapsedTime]'
})
export class ElapsedTimeDirective {
    @HostListener('click') deleteMailDetection() {
        const elapsedTimeSeconds = DateTimeHelper.diffSeconds(this.createDateTime, new Date());
        console.log(`Elapsed time: ${elapsedTimeSeconds} second(s)`);
    }

    private createDateTime: Date;

    constructor() {
        this.createDateTime = new Date();
    }
}
