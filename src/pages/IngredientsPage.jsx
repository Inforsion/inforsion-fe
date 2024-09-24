import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import InputButton from '../components/InputButton';
import IngredientsList from '../components/List/IngredientsList';
import camera from '../assets/image/camera.svg?react';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin-bottom: 100px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    align-self: flex-end;
    margin-right: 7%;

`;

const MenuBtn = styled.button`
    margin-top: 20px;
    width: 124px;
    height: 28px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    background-color: #2897FF;
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
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #F2F2F2;
    margin-left: 36%;
    margin-top: 20px;
    margin-bottom: 10px;

`
const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`

const Context = styled.div`
    align-content: center;
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
    width: 86%;
    height: 560px;
    border: 1px solid #BDBDBD;
    border-radius: 9px;
    margin: auto;
    margin-top: 30px;
    flex-wrap: wrap;
    overflow: auto;

`

const ListName = styled.div`
    padding: 20px;
    color: #343434;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 20px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 12px;
    padding-right: 12px;
`

const ListHeader = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 16px;
    padding-left: 8px;
    color: #343434;

`
function Icons({ icon: Icon }) {
    return <Icon width={24} height={20} fill="none" />;
  }

export default function IngredientsPage() {
  return (
    <>
      <MainHeader />
      <Container>
        <StyledLink to ="/menu"><MenuBtn>메뉴등록하러가기 {">"}</MenuBtn></StyledLink>
        <Box_One>
            <Image><Icons icon={camera}/></Image>
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
        <ListName>재고 목록</ListName>
        <HeaderContainer>
            <ListHeader>NO.</ListHeader>
            <ListHeader>사진</ListHeader>
            <ListHeader>상품명</ListHeader>
            <ListHeader>가격</ListHeader>
            <ListHeader>남은 재고</ListHeader>
        </HeaderContainer>
            <IngredientsList/>
            <IngredientsList/>
            <IngredientsList/>
            <IngredientsList/>
            <IngredientsList/>
            <IngredientsList/>
        </Box_two>
      </Container>


    </>
  );
}
