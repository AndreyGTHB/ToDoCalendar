import React from 'react';


interface FormComponentProps {
    children: React.ReactChildren
}

export default function FormComponent({children}: FormComponentProps) {
    return (
        <div>
            <form>{children}</form>
        </div>
    )
}
