import React, {ChangeEvent, FormEvent, ReactNode} from 'react'
import FormComponent from "../UI/Form";
import FormService from "../../services/FormService";
import {RegisterUser} from "../../models/auth/user";

interface RegisterFormState {
    firstname: string
    surname: string
    username: string
    email: string
    password: string
}

export default class RegisterForm extends React.Component<{}, RegisterFormState> {
    state = {
        firstname: "",
        surname: "",
        username: "",
        email: "",
        password: ""
    }

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const changed = FormService.processInputChange(event)
        this.setState({
            ...this.state,
            ...changed
        })
    }
    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(RegisterUser.fromMap(this.state))
    }

    render(): ReactNode {
        return (
            <FormComponent header="Please Sign Up" onSubmit={e => this.handleSubmit(e)}>
                <label>
                    <strong>Name</strong>
                    <input
                        name="firstname"
                        placeholder="firstname"
                        value={this.state.firstname}
                        onChange={e => this.handleInputChange(e)}
                    />
                </label>
            </FormComponent>
        )
    }
}