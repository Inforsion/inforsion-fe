import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import MainSalesValue from "../components/Main/MainSalesValue";
import MainSalesChart from "../components/Main/MainSalesChart";
import Sales from "../assets/image/sales.svg?react";

const MainContainer = styled.div`
  padding : 5%;

`

const SalesContainer = styled.div`
  margin-top: 10px;
  ;
`
const SalesHeader = styled.div`
  display: flex ;
  flex-direction: row;
  margin-top: 40px;
  padding-bottom: 30px;
  ;
`
const ChartText = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 5px;
`

const ShotBtn = styled.button`
  width: 160px;
  height: 25px;
  border-radius: 15px;
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  background-color: #2897FF;
  margin-top: 30px;
  margin-left: 29%;
`

function MainPage() {
    return (
    <>
        <MainHeader/>
        <MainContainer>
          <MainSalesValue/>
          <SalesContainer>
            <SalesHeader>
              <Sales/>
              <ChartText>매출</ChartText>
            </SalesHeader>
            <MainSalesChart/>
          </SalesContainer>
          <ShotBtn>영수증 촬영하러 가기 {">"} </ShotBtn>
        </MainContainer>
        <Navigation/>
    </>
  );
}

export default MainPage;
