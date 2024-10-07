import React from "react";
import styled from "styled-components";

const InputForm = styled.input`
  width: 86%;
  height: 55px;
  margin: auto;
  margin-top: 15px;
  outline: none;
  border-radius: 15px;
  border: 1px solid lightgray;
  padding-left: 20px;
  font-size: 16px;
  &:focus {
    border: 1px solid #006ffd;
  }
`;

function Input({ label, type, placeholder, onChange }) {
  return (
    <>
      <InputForm
        label={label}
        name={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
