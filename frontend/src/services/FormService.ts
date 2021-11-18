import { ChangeEvent } from "react";

export default class FormService {
    public static processInputChange(event: ChangeEvent<HTMLInputElement>): { [key: string]: string } {
        const name = event.target.name
        const value = event.target.value
        return { [name]: value }
    }
}