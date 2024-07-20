import React from "react";
import styled from "styled-components";

const InputBtn = styled.button`
    margin: auto;
    margin-top: 30px;
    width: 86%;
    height: 55px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    background-color: #006FFD;
`

function InputButton({text}){
    return(
        <>
        <InputBtn>{text}</InputBtn>
        </>
    );
}

export default InputButton;