import React, {ChangeEvent, CSSProperties, FormEvent, ReactNode} from 'react'
import FormComponent from "../UI/Form";
import FormService from "../../services/FormService";
import {RegisterUser} from "../../models/auth/user";

interface RegisterFormState {
    firstname: string
    surname: string
    username: string
    email: string
    password: string
    repeatedPassword: string
    passwordsMismatch: boolean
    passwordStyle: CSSProperties
}

export default class RegisterForm extends React.Component<{}, RegisterFormState> {
    private defaultState: RegisterFormState = {
        firstname: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        repeatedPassword: "",
        passwordsMismatch: false,
        passwordStyle: { borderColor: "#ccc" }
    }
    state: RegisterFormState = JSON.parse(JSON.stringify(this.defaultState))

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const changed = FormService.processInputChange(event)
        this.setState({
            ...this.state,
            ...changed
        })
    }
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (this.state.password === this.state.repeatedPassword) {
            console.log(RegisterUser.fromMap(this.state))
            this.setState(JSON.parse(JSON.stringify(this.defaultState)))
        }
        else {
            this.setState({
                ...this.state,
                passwordsMismatch: true,
                passwordStyle: { borderColor: "#F60018" }
            })
        }
    }

    render(): ReactNode {
        return (
            <FormComponent header="Please Sign Up" onSubmit={e => this.handleSubmit(e)}>
                <label>
                    <strong>Name:</strong>
                    <input
                        name="firstname"
                        placeholder="Enter firstname"
                        value={this.state.firstname}
                        onChange={e => this.handleInputChange(e)}
                    />
                    <input
                        name="surname"
                        placeholder="Enter surname"
                        value={this.state.surname}
                        onChange={e => this.handleInputChange(e)}
                    />
                    <input
                        name="username"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={e => this.handleInputChange(e)}
                    />
                </label>
                <label>
                    <strong>Email:</strong>
                    <input
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        value={this.state.email}
                        onChange={e => this.handleInputChange(e)}
                    />
                </label>
                <label>
                    <strong>Password:</strong>
                    <input
                        style={this.state.passwordStyle}
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={e => this.handleInputChange(e)}
                    />
                    <input
                    style={this.state.passwordStyle}
                        name="repeatedPassword"
                        type="password"
                        placeholder="Repeat password"
                        value={this.state.repeatedPassword}
                        onChange={e => this.handleInputChange(e)}
                    />
                    {this.state.passwordsMismatch &&
                        <span style={{ color: "#F60018" }}>Passwords mismatch</span>
                    }
                </label>
                <button>Create an account</button>
            </FormComponent>
        )
    }
}