import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import InputButton from '../components/InputButton';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

`

const Box_One = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    width: 86%;
    height: 360px;
    border: 1px solid #BDBDBD;
    border-radius: 9px;
    margin: auto;
    margin-top: 30px;
`

const Image = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #F2F2F2;
    margin-left: 36%;
    margin-top: 30px;

`
const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`

const Context = styled.div`
    font-size: 12px;
    font-weight: 700;
    margin-left: 20px;
`

const Input = styled.input`
    width: 150px;
    height: 15px;
    font-size: 12px;
    border: none;
    margin-right: 20%;
`

const Box_two = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 86%;
    height: 560px;
    border: 1px solid #BDBDBD;
    border-radius: 9px;
    margin: auto;
    margin-top: 30px;

`


export default function IngredientsPage() {
  return (
    <>
      <MainHeader />
      <Container>
        <Box_One>
            <Image/>
            <InputContainer>
                <Context>재료명</Context>
                <Input placeholder='상품이름을 입력해주세요'/>
            </InputContainer>
            <InputContainer>
                <Context>재고 가격</Context>
                <Input placeholder='가격을 입력해주세요'/>
            </InputContainer>
            <InputContainer>
                <Context>1개당 재고용량</Context>
                <Input placeholder='재고를 입력해주세요'/>
            </InputContainer>
            <InputContainer>
                <Context>재고 수</Context>
                <Input placeholder='재고를 입력해주세요'/>
            </InputContainer>
        </Box_One>
      <InputButton text="저장"/>
        <Box_two>

        </Box_two>
      </Container>


    </>
  );
}
