import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import InputButton from "../components/InputButton";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-bottom: 50px;
`;

const SignupText = styled.div`
  padding-top: 20%;
  padding-left: 8%;
  font-size: 18px;
  font-weight: 600;
`;

const Context = styled.div`
  padding-top: 10px;
  padding-left: 8%;
  font-size: 12px;
  font-weight: 400;
  color: #71727a;
`;

const ItemText = styled.div`
  padding-top: 50px;
  padding-left: 8%;
  font-size: 14px;
  font-weight: 500;
`;

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");

  const onSubmitHandler = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/auth/signup`,
      {
        username: username,
        email: email,
        password: password,
      }
    );
    console.log(response);
  };

  return (
    <>
      <Container>
        <SignupText>회원가입</SignupText>
        <Context>회원가입으로 더 많은 서비스를 이용하세요</Context>
        <ItemText>아이디</ItemText>
        <Input
          label="아이디"
          name="id"
          value={username}
          placeholder="아이디"
          onChange={(e) => setUsername(e.target.value)}
        />
        <ItemText>이메일</ItemText>
        <Input
          label="이메일"
          name="email"
          value={email}
          placeholder="name@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <ItemText>비밀번호</ItemText>
        <Input
          label="비밀번호"
          name="password"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="비밀번호확인"
          name="passwordcheck"
          value={passwordcheck}
          placeholder="비밀번호 확인"
          onChange={(e) => setPasswordcheck(e.target.value)}
        />
        <InputButton text="Sign up" onClick={onSubmitHandler} />
      </Container>
    </>
  );
}

export default SignupPage;
