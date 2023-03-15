import React from "react";
import { ButtonContainer } from "./ButtonStyle";

interface ButtonProps {
    text: string,
    className: string,
    onClick?: any
}

export default function ButtonCancel(props: ButtonProps) {
    return (
        <ButtonContainer type="button" onClick={props.onClick} className={`${props.className}`}>
            {props.text}
        </ButtonContainer>
    )
}