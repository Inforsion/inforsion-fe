import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
    width: 95%;
    height: 80px;
    border-Bottom: 1px solid #D3D3D3;
    margin: 10px auto;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Image = styled.div`
    width: 50px;
    height: 50px;
    background-color: #D0D0D0;
    display: flex;
    border-radius: 8px;

`

const Num = styled.div`
    display: flex;
    font-weight: 400;
    padding: 5px;
    font-size: 16px;
    color: #272525;
`

const Content = styled.div`
    display: flex;
    padding-left: 5px;
    margin-top: 2px;
    font-size: 16px;
    color: #272525;

`


function MenuList(){
    return(
        <>
        <ListContainer>
            <Num>01</Num>
            <Image/>
            <Content>아메리카노</Content>
            <Content>2800</Content>
        </ListContainer>
        </>
    );
}

export default MenuList;