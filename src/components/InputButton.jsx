import React from "react";
import styled from "styled-components";

const InputBtn = styled.button`
  margin: auto;
  margin-top: 30px;
  margin-left: 7%;
  width: 86%;
  height: 55px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: #2897ff;
`;

function InputButton({ text, onClick }) {
  return (
    <>
      <InputBtn onClick={onClick}>{text}</InputBtn>
    </>
  );
}

export default InputButton;
