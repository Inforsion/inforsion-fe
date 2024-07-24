import React from "react";
import styled from "styled-components";
import Home from "../assets/image/home.svg?react";
import Goods from "../assets/image/goods.svg?react";
import Operate from "../assets/image/operate.svg?react";
import Sales from "../assets/image/sales.svg?react";

const Container = styled.div`
    text-align: center;
    overflow: hidden;
    position: fixed;
    width: 100%;
    max-width: 430px;
    bottom: 0;

`

const Tab = styled.div`
    text-align: center;
    float: left;
    height: 80px;
    width: 25%;
    cursor: pointer;
    padding-top: 20px;

`

function Navigation() {
    return (
    <>
        <Container>
            <Tab><Home/></Tab>
            <Tab><Sales/></Tab>
            <Tab><Goods/></Tab>
            <Tab><Operate/></Tab>
        </Container>
        
    </>
  );
}

export default Navigation;
