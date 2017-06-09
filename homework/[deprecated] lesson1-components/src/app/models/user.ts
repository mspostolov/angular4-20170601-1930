export class User {
    id: number;
    fullName: string;
    birthDate: string;
    gender: string;
    address: string;
    email: string;

    constructor(id: number, fullName: string, birthDate: string, gender: string, address: string, email: string) {
        this.id = id;
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.address = address;
        this.email = email;
    }
}
