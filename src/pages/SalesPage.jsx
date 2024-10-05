import {React, useState} from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import Navigation from '../components/Navigation';
import MainSalesChart from '../components/Main/MainSalesChart';
import Sales from "../assets/image/sales.svg?react";
import ChartButton from '../components/Main/ChartButton';
import { Link } from 'react-router-dom';
import { salesData } from "../SalesData";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 100px;
  padding: 5%;
`;

const Box = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 168px;
  border: 1px solid #bdbdbd;
  border-radius: 9px;
  margin: auto;
  margin-top: 30px;
  padding: 16px;
`;

const ValueContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`

const SalesText = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #343434;
`

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const SalesValue = styled.div`
  display: flex;
  font-size: 28px;
  font-weight: 500;
  color: ${(props) => (props.isrefund ? '#FF7173' : 'black')};
`

const ValueText = styled.div`
  display: flex;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #343434;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding-top: 20px;
`

const Btn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  height: 88px;
  border-radius: 9px;
  font-size: 8px;
  font-weight: 400;
  color: #ffffff;
  background-color: #2897ff;
  padding: 10px;
`;

const BtnContext = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 4px;
`
const BtnP = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
`

const SalesHeader = styled.div`
  display: flex ;
  flex-direction: row;
  margin-top: 30px;
  padding-bottom: 30px;
  margin-left: 20px;
  ;
`

const ChartText = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 5px;
`

export default function SalesPage() {
  const [activeTab, setActiveTab] = useState("day");

  return (
    <>      
    <MainHeader />
    <Container>
      <Box>
        <ValueContainer1>
          <SalesText>현 매출</SalesText>
          <ValueContainer>
            <SalesValue>289,980</SalesValue>
            <ValueText>원</ValueText>
          </ValueContainer>
        </ValueContainer1>
        <div style={{padding: 32}}></div>        
        <ValueContainer1>
          <SalesText>순이익</SalesText>
          <ValueContainer>
            <SalesValue>115,890</SalesValue>
            <ValueText>원</ValueText>
          </ValueContainer>
        </ValueContainer1>
        <ValueContainer1>
          <SalesText>환불금액</SalesText>
          <ValueContainer>
            <SalesValue isrefund={true}>-23,400</SalesValue>
            <ValueText>원</ValueText>
          </ValueContainer>
        </ValueContainer1>
      </Box>

      <BtnContainer>
        <Link to ="/writesales">
          <Btn>
            <BtnContext>매출 작성하러 가기 {">"}</BtnContext>
            <BtnP>
              오늘의 매출을 어디서든 기록하고 <br />
              수정할 수 있습니다.
            </BtnP>
          </Btn>
        </Link>
        <Btn>
          <BtnContext>영수증 촬영하러 가기 {">"}</BtnContext>
          <BtnP>
            영수증 촬영으로 간편한 매출/재고 <br />
            관리를 할 수 있습니다.
          </BtnP>
        </Btn>
      </BtnContainer>

      <SalesHeader>
        <Sales />
        <ChartText>매출 그래프</ChartText>
      </SalesHeader>
      <ChartButton activeTab={activeTab} setActiveTab={setActiveTab} />
          <MainSalesChart data={salesData[activeTab]} />
      <Navigation />
    </Container>
    </>

  );
}
