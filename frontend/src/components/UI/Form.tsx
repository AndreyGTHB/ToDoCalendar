import React, {FormEvent} from 'react';
import {ParentProps} from "../../models/props";
import cssClasses from './Form.module.scss'


interface FormComponentProps extends ParentProps {
    header: string
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export default function FormComponent({children, header, onSubmit}: FormComponentProps) {
    return (
        <div className={cssClasses.formContainer}>
            <h1>{header}</h1>
            <form onSubmit={onSubmit}>{children}</form>
        </div>
    )
}
