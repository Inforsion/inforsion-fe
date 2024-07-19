import React from "react";
import styled from "styled-components";
import Whitelogo from '../assets/image/whitelogo.png'

const Background = styled.div`
    height: 100vh;
    background-color: #3653A4;
`

const Context = styled.div`
    white-space: pre-wrap;
    color: white;
    font-weight: 700;
    font-size: 36px;
    line-height: 130%;
    padding-top: 30px;
    margin-left: 30px;
`

const Title = styled.div`
    color: white;
    font-weight: 600;
    font-size: 24px;
    padding-top: 20px;
    margin-left: 30px;
`

const Logo = styled.div`
    position: absolute;
    bottom: 30px;
    right: 70px;
    width: 100px; /* Adjust size as needed */
    height: auto;
    `

function SplashPage(){
    return(
        <>
        <Background>
            <Context>
                <br/>언제 <br/>어디서나 <br/>쉽고 간편한 <br/>가게관리
            </Context>
            <Title>
                Inforsion
            </Title>
            <Logo>
                <img src={Whitelogo} width='152px'/> 
            </Logo>       
            </Background>
        </>
    );
}

export default SplashPage;