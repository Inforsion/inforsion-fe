import React, { useCallback, useState } from "react";
import styled from "styled-components";
import tab from "../assets/image/tab.svg?react";
import profile from "../assets/image/Profile.svg?react";
import Sidebar from "./Sidebar";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    padding: 20px;
    z-index: 2;
    position: relative;
    `


const LogoText = styled.div`
    padding-left:30px;
    font-size: 20px;
    font-weight: 600;
    color: #343C6A;
`

const IconWrapper = styled.div`
        cursor: pointer;

`


const SidebarWrapper = styled.div`
    position: absolute;
    left: ${(props) => (props.isOpen ? '0' : '-300px')};
    top: 0;
    height: 100%;
    width: 400px;
    transition: left 0.3s ease;
    z-index: 1; /* 사이드바가 헤더 아래에 있도록 설정 */
`


function Icons({ icon: Icon, width, height }) {
    return (
        <Icon width={width} height={height} fill="none" />
    );
}

function MainHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
    <>
        <Container>
            <IconWrapper onClick={toggleSidebar}>
                <Icons icon={tab} width={15} height={18}/>
            </IconWrapper>        
            <LogoText>Inforsion</LogoText>
            <Icons icon={profile} width={40} height={40} />
        </Container>
        <SidebarWrapper isOpen={isSidebarOpen}>
                <Sidebar />
        </SidebarWrapper>

    </>
  );
}

export default MainHeader;
