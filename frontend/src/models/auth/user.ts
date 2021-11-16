export class SafeUser {
    firstname
    surname
    email
    accessToken
    refreshToken

    constructor(firstname: string, surname: string, email: string, accessToken: string, refreshToken: string) {
        this.firstname = firstname
        this.surname = surname
        this.email = email
        this.accessToken = accessToken
        this.refreshToken = refreshToken
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