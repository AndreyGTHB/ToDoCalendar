import React, { ChangeEvent, FormEvent } from 'react'
import { LoginUser } from '../../models/auth/user'
import cssClasses from './AuthForm.module.scss'

interface LoginFormState {
    email: string,
    password: string
}

export default class LoginForm extends React.Component<any, LoginFormState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name
        const value = event.target.value
        this.setState ({
            ...this.state,
            [name]: value
        })
    }
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(new LoginUser(this.state.email, this.state.password))
    }

    render() {
        return (
            <div className={cssClasses.formContainer}>
                <h2>Login</h2>
                <form onSubmit={(e: FormEvent<HTMLFormElement>) => this.handleSubmit(e)}>
                    <label>
                        <strong>Email:</strong> <br />
                        <input
                        name="email"
                        placeholder="Enter email"
                        type="text"
                        value={this.state.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleInputChange(e)} />
                    </label>
                    <br />
                    <label>
                        <strong>Password</strong> <br />
                        <input
                        name="password"
                        placeholder="Enter password"
                        type="password"
                        value={this.state.password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleInputChange(e)} />
                    </label>
                    <br />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}