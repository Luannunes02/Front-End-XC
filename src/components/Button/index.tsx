import React from "react";
import { ButtonContainer } from "./ButtonStyle";

interface ButtonProps {
    text: string,
    className: string,
    onClick?: any,
    typeHTML?: string
}

export default function Button(props: ButtonProps) {
    return (
        <ButtonContainer type="submit" onClick={props.onClick} className={`${props.className}`}>
            {props.text}
        </ButtonContainer>
    )
}