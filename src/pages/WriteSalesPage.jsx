import React from 'react'
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import Navigation from '../components/Navigation';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 100px;

`;

const Box = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  padding: 6px;
`;

const Context = styled.div`
  align-content: center;
  font-size: 14px;
  font-weight: 700;
  margin-left: 20px;
`;

const Input = styled.p`
  text-align: right;
  width: 150px;
  height: 15px;
  font-size: 14px;
  border: none;
  margin-right: 20px;
`;

export default function WriteSalesPage() {
  return (
    <Container>
        <MainHeader/>
        <Box>
        <ValueContainer1>
          <SalesText>현 매출</SalesText>
          <ValueContainer>
            <SalesValue>289,980</SalesValue>
            <ValueText>원</ValueText>
          </ValueContainer>
        </ValueContainer1>
        <div style={{padding: 20}}></div>        
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

      <InputContainer>
        <Context>판매 가격</Context>
        <Input>289,980원</Input>
      </InputContainer>
      <InputContainer>
        <Context>카드</Context>
        <Input>282,000원</Input>
      </InputContainer>
      <InputContainer>
        <Context>현금</Context>
        <Input>5000원</Input>
      </InputContainer>
      <InputContainer>
        <Context>기타</Context>
        <Input>입력하기</Input>
      </InputContainer>
      <div style={{margin: 20}}></div>        
      <InputContainer>
        <Context>원가</Context>
        <Input>186,912원</Input>
      </InputContainer>
      <InputContainer>
        <Context>재료비</Context>
        <Input>186,912원</Input>
      </InputContainer>
      <InputContainer>
        <Context>고정비</Context>
        <Input>입력하기</Input>
      </InputContainer>
      <InputContainer>
        <Context>기타</Context>
        <Input>입력하기</Input>
      </InputContainer>
      <div style={{margin: 20}}></div>        
      <InputContainer>
        <Context>세금</Context>
        <Input>29,980원</Input>
      </InputContainer>
      <InputContainer>
        <Context>부가세</Context>
        <Input>29,980원</Input>
      </InputContainer>
        <Navigation/>
    </Container>
  )
}
