import React, { useState } from "react";
import styled from "styled-components";
import Bluelogo from "../assets/image/Bluelogo.png";
import Input from "../components/Input";
import InputButton from "../components/InputButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const Logo = styled.div`
  margin-top: 132px;
  margin: auto;
  padding-top: 130px;
`;

const Context = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 700;
  margin: auto;
`;
const Login = styled.div`
  padding-top: 100px;
  padding-left: 8%;
  font-size: 18px;
  font-weight: 700;
`;

const LostPW = styled.div`
  padding-top: 18px;
  padding-left: 8%;
  font-size: 12px;
  font-weight: 600;
  color: #006ffd;
  cursor: pointer;
`;

const JoinContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 18px;
`;

const JoinText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: Darkgray;
`;

const JoinLink = styled.div`
  padding-left: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #006ffd;
  cursor: pointer;
`;

function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("token", response.data.accessToken);
      console.log(localStorage.getItem("token"));

      if (response.data.accessToken) {
        navigate("/createstore");
      }
    } catch {
      console.log("로그인 오류");
    }
  };

  const validation = {};

  return (
    <>
      <Container>
        <Logo>
          <img src={Bluelogo} width="185px" />
        </Logo>
        <Context>더욱 쉽고 간편한 가게관리</Context>
        <Login>로그인</Login>
        <Input
          label="이메일"
          name="email"
          placeholder="아이디"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LostPW>비밀번호를 잃어버리셨나요?</LostPW>
        <InputButton text="Login" onClick={onSubmitHandler} />
        <JoinContainer>
          <JoinText>회원이 아니신가요?</JoinText>
          <Link to="/signup">
            <JoinLink>회원가입하기</JoinLink>
          </Link>
        </JoinContainer>
      </Container>
    </>
  );
}

export default LoginPage;
