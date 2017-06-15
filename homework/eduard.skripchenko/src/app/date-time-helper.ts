export class DateTimeHelper {
    static diffSeconds(date1: Date, date2: Date): number {
        return Math.abs(Math.round(((date1.getTime() - date2.getTime()) / 1000)));
    }

    static diffMinutes(date1: Date, date2: Date): number {
        return (this.diffSeconds(date1, date2) / 60);
    }

    static strDiffMinutes(date1: Date, date2: Date): string {
        const dm = this.diffMinutes(date1, date2);

        if (dm < 1.0) { return 'Less than one minute'; }
        if (dm > 1.0 && dm < 60) { return `${dm} minute(s)`; }
        if (dm > 60 && dm < (60 * 24)) {
            const hours = Math.round(dm / 60);
            return `${hours} hour(s)`;
        }
        if (dm > (60 * 24)) {
            const days = Math.round(dm / (60 * 24));
            return `${days} day(s)`;
        }
    }
}
