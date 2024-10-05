import React from "react";
import styled from "styled-components";

const SalesText = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SalesValue = styled.div`
  display: flex;
  font-size: 28px;
  font-weight: 500;
  color: #2897FF;
`

const ValueText = styled.div`
  display: flex;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #343434;
`

const DateSales = styled.div`
  font-size: 11px;
  font-weight: 400;
  color: #343434;
  margin-top: 10px;

`

function MainSalesValue(){
  const today = new Date();
  const TodayDate = `${today.getFullYear()}. ${today.getMonth() + 1}. ${today.getDate()} 매출현황 입니다.`;
  return(
    <>
      <SalesText>사장님의 매출</SalesText>
        <ValueContainer>
          <SalesValue>289980</SalesValue>
          <ValueText>원</ValueText>
        </ValueContainer>
        <DateSales>{TodayDate}</DateSales>
    </>
  );
}

export default MainSalesValue;