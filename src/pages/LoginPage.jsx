import React from "react";
import styled from "styled-components";
import Bluelogo from "../assets/image/Bluelogo.png"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    `

const Logo = styled.div`
    margin-top: 132px;
    margin: auto;
    padding-top: 130px;
`

const Context = styled.div`
    margin-top: 5px;
    font-size: 12px;
    font-weight: 700;
    margin: auto;

`
const Login = styled.div`
    padding-top: 100px;
    padding-left: 8%;
    font-size: 18px;
    font-weight: 700;

`

const Input = styled.input`
    width: 86%;
    height: 55px;
    margin: auto;
    margin-top: 15px;
    outline: none;
    border-radius: 15px;
    border: 1px solid lightgray;
    padding-left: 20px;
    font-size: 16px;
`

const LostPW = styled.div`
    padding-top: 18px;
    padding-left: 8%;
    font-size: 12px;
    font-weight: 600;
    color: #006FFD;
    cursor: pointer;
`

const LoginButton = styled.button`
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
const JoinContainer = styled.div`
    display: flex; 
    flex-direction: row;
    margin: auto;
    margin-top: 18px;
`

const JoinText = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: Darkgray;
`

const JoinLink = styled.div`
    padding-left: 5px;
    font-size: 14px;
    font-weight: 600;
    color: #006FFD;
    cursor: pointer;
`

function LoginPage(){
    return(
        <>
        <Container>
            <Logo><img src={Bluelogo} width="185px"/></Logo>
            <Context>더욱 쉽고 간편한 가게관리</Context>
            <Login>로그인</Login>
            <Input label="이메일" name="email" placeholder="아이디"/>
            <Input label="비밀번호" name="password" placeholder="비밀번호"/>   
            <LostPW>비밀번호를 잃어버리셨나요?</LostPW>    
            <LoginButton>Login</LoginButton> 
            <JoinContainer>
                <JoinText>회원이 아니신가요?</JoinText>
                <JoinLink>회원가입하기</JoinLink>
            </JoinContainer>
        </Container>
        </>
    );
}

export default LoginPage;