export class SafeUser {
    firstname
    surname
    email

    constructor(firstname: string, surname: string, email: string) {
        this.firstname = firstname
        this.surname = surname
        this.email = email
    }
}

export class RegisterUser {
    firstname
    surname
    email
    password

    constructor(firstname: string, surname: string, email: string, password: string) {
        this.firstname = firstname
        this.surname = surname
        this.email = email
        this.password = password
    }
}

export class LoginUser {
    email
    password

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}