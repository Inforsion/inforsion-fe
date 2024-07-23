import React from "react";
import styled from "styled-components";
import tab from "../assets/image/tab.svg?react";
import profile from "../assets/image/Profile.svg?react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`

const LogoText = styled.div`
    padding-left:30px;
    font-size: 20px;
    font-weight: 600;
    color: #343C6A;
`

function Icons({ icon: Icon, width, height }) {
    return (
        <Icon width={width} height={height} fill="none" />
    );
}

function MainPage() {
    return (
    <>
        <Container>
            <Icons icon={tab} width={15} height={18} />
            <LogoText>Inforsion</LogoText>
            <Icons icon={profile} width={40} height={40} />
        </Container>
    </>
  );
}

export default MainPage;
