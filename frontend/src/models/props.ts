import {ReactChild, ReactChildren} from "react";

export interface ParentProps {
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}