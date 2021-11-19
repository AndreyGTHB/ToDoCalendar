import React, {ChangeEvent, FormEvent, ReactNode} from 'react'
import {LoginUser} from '../../models/auth/user'
import FormComponent from "../UI/Form";
import FormService from "../../services/FormService";
import serviceStore from "../../services/data/serviceStore";

interface LoginFormState {
    username: string
    password: string
}

export default class LoginForm extends React.Component<{}, LoginFormState> {
    private defaultState = {
        username: "",
        password: ""
    }
    state: LoginFormState = JSON.parse(JSON.stringify(this.defaultState))
    private userService = serviceStore.userService

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const changed = FormService.processInputChange(event)
        this.setState({
            ...this.state,
            ...changed
        })
    }
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const user = LoginUser.fromMap(this.state)
        this.userService.user = user
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