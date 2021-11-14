export class User {
    firstname: string;
    surname: string;
    username: string;

    constructor(firstname: string, surname: string, username: string) {
        this.firstname = firstname
        this.surname = surname
        this.username = username
    }
}


export class LoginUser {
    username: string
    password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }
}