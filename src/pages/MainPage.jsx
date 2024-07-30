import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import MainSalesValue from "../components/MainSalesValue";
import MainSalesChart from "../components/MainSalesChart";
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
        </MainContainer>
        <Navigation/>
    </>
  );
}

export default MainPage;
