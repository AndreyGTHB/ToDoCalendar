import React, { ChangeEvent, FormEvent, ReactNode } from 'react'
import { LoginUser } from '../../models/auth/user'
import FormComponent from "../UI/Form";
import FormService from "../../services/FormService";

interface LoginFormState {
    username: string
    password: string
}

export default class LoginForm extends React.Component<{}, LoginFormState> {
    private defaultState = {
        username: "",
        password: ""
    }
    state = JSON.parse(JSON.stringify(this.defaultState))

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const changed = FormService.processInputChange(event)
        this.setState({
            ...this.state,
            ...changed
        })
    }
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log(new LoginUser(this.state.username, this.state.password))
        this.setState(JSON.parse(JSON.stringify(this.defaultState)))
    }

    render(): ReactNode {
        return (
            <FormComponent onSubmit={e => this.handleSubmit(e)} header="Please sign in:">
                <label>
                    <strong>Username:</strong>
                    <input
                        name="username"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={e => this.handleInputChange(e)} />
                </label>
                <label>
                    <strong>Password:</strong> <br />
                    <input
                        name="password"
                        placeholder="Enter password"
                        type="password"
                        value={this.state.password}
                        onChange={e => this.handleInputChange(e)} />
                </label>
                <button>Login</button>
            </FormComponent>
        )
    }
}