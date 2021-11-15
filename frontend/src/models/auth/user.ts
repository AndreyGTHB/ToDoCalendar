export class User {
    firstname: string;
    surname: string;
    email: string;

    constructor(firstname: string, surname: string, email: string) {
        this.firstname = firstname
        this.surname = surname
        this.email = email
    }
}


export class LoginUser {
    email: string
    password: string

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}