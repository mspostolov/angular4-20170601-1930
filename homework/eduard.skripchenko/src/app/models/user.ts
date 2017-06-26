export class User {
    constructor(public id: number, public name: string, public gender: string,
        public birthDate: Date, public address: string, public email: string,
        public canActivate: boolean = true) {}
}
