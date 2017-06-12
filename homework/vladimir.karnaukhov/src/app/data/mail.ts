export class Email {
    id: number;
    from?: string;
    to?: string;
    createDate?: Date;
    receivingDate?: Date;
    text: string;
    title: string;
}