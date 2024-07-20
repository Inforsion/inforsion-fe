import React from "react";
import styled from "styled-components";
import Input from "../components/Input";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding-bottom: 50px;
`

const SignupText = styled.div`
    padding-top: 20%;
    padding-left: 8%;
    font-size: 18px;
    font-weight: 600;
`

const Context = styled.div`
    padding-top: 10px;
    padding-left: 8%;
    font-size: 12px;
    font-weight: 400;
    color: #71727A;
`

const ItemText = styled.div`
    padding-top: 50px;
    padding-left: 8%;
    font-size: 14px;
    font-weight: 500;
`

const SignUpButton = styled.button`
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

function SignupPage(){
    return(
        <>
        <Container>
            <SignupText>회원가입</SignupText>
            <Context>회원가입으로 더 많은 서비스를 이용하세요</Context>
            <ItemText>아이디</ItemText>
            <Input label="아이디" name="id" placeholder="아이디"/>
            <ItemText>이메일</ItemText>
            <Input label="이메일" name="email" placeholder="name@email.com"/>
            <ItemText>비밀번호</ItemText>
            <Input label="비밀번호" name="password" placeholder="비밀번호"/>
            <Input label="비밀번호확인" name="passwordcheck" placeholder="비밀번호 확인"/>
            <SignUpButton>Sign Up</SignUpButton>
        </Container>
        </>
    );
}

export default SignupPage;