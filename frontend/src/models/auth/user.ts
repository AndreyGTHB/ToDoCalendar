export class SafeUser {
    firstname
    surname
    username
    email
    accessToken
    refreshToken

    constructor(firstname: string, surname: string, username: string,
                email: string,
                accessToken: string, refreshToken: string
    ) {
        this.firstname = firstname
        this.surname = surname
        this.username = username
        this.email = email
        this.accessToken = accessToken
        this.refreshToken = refreshToken
    }
}

export class RegisterUser {
    firstname
    surname
    username
    email
    password

    constructor(firstname: string, surname: string, username: string,
                email: string,
                password: string) {
        this.firstname = firstname
        this.surname = surname
        this.username = username
        this.email = email
        this.password = password
    }

    public static fromMap({ firstname, surname, username, email, password }: RegisterUser): RegisterUser {
        return new RegisterUser(firstname, surname, username, email, password)
    }
}

export class LoginUser {
    username
    password

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    public static fromMap({ username, password }: LoginUser): LoginUser {
        return new LoginUser(username, password)
    }
}