import React, { ChangeEvent, FormEvent } from 'react'
import { LoginUser } from '../../../models/auth/user'


export default class LoginComponent extends React.Component<any, {username: string, password: string}> {
    constructor(props: {}) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState ({
            ...this.state,
            username: event.target.value
        })
    }
    handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState ({
            ...this.state,
            password: event.target.value
        })
    }
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        console.log(new LoginUser(this.state.username, this.state.password))
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    </label>
                    <label>
                        Password:
                        <input name="username" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}