import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import MainSalesChart from "../components/MainSalesChart";
import Sales from "../assets/image/sales.svg?react";

const SalesContainer = styled.div`
  padding : 3%;
  margin-top: 10px;
  ;
`
const SalesHeader = styled.div`
  display: flex ;
  flex-direction: row;
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
        <SalesContainer>
          <SalesHeader>
            <Sales/>
            <ChartText>매출</ChartText>
          </SalesHeader>
          <MainSalesChart/>
        </SalesContainer>
        <Navigation/>
        
    </>
  );
}

export default MainPage;
