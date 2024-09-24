import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import InputButton from "../components/InputButton";
import MenuList from "../components/List/MenuList";
import camera from '../assets/image/camera.svg?react';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 100px;

`;
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
  background-color: #2897ff;
`;

const Box_One = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  width: 86%;
  height: 300px;
  border: 1px solid #bdbdbd;
  border-radius: 9px;
  margin: auto;
  margin-top: 30px;
`;

const Image = styled.div`
display: flex;
    justify-content: center;
    align-items: center; 
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: #f2f2f2;
  margin-left: 36%;
  margin-top: 20px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

const Context = styled.div`
  align-content: center;
  font-size: 12px;
  font-weight: 700;
  margin-left: 20px;
`;

const Input = styled.input`
  width: 150px;
  height: 15px;
  font-size: 12px;
  border: none;
  margin-right: 20%;
`;

const IngredientBtn = styled.button`
  width: 65px;
  height: 16px;
  margin-right: 44%;
  border-radius: 5px;
  font-size: 8px;
  font-weight: 400;
  color: #ffffff;
  background-color: #2897ff;
`;
const Box_two = styled.div`
  width: 86%;
  height: 560px;
  border: 1px solid #bdbdbd;
  border-radius: 9px;
  margin: auto;
  margin-top: 30px;
  overflow: auto;
`;

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
    padding-left: 8px;
`

const ListHeader = styled.div`
    display: flex;
    font-weight: 500;
    font-size: 16px;
    color: #343434;
    padding-left: 12px;
    padding-right: 28px;

`

function Icons({ icon: Icon }) {
    return <Icon width={24} height={20} fill="none" />;
  }

export default function MenuPage() {
  return (
    <>
      <MainHeader />
      <Container>
        <StyledLink to="/main">
          <MenuBtn>인포전 홈 {">"}</MenuBtn>
        </StyledLink>
        <Box_One>
        <Image><Icons icon={camera}/></Image>
        <InputContainer>
            <Context>상품명</Context>
            <Input placeholder="상품이름을 입력해주세요" />
          </InputContainer>
          <InputContainer>
            <Context>판매 가격</Context>
            <Input placeholder="가격을 입력해주세요" />
          </InputContainer>
          <InputContainer>
            <Context>1개당 재고용량</Context>
            <IngredientBtn>재료 추가하기</IngredientBtn>
          </InputContainer>
        </Box_One>
        <InputButton text="저장" />
        <Box_two>
        <ListName>메뉴 목록</ListName>
        <HeaderContainer>
            <ListHeader>NO.</ListHeader>
            <ListHeader>사진</ListHeader>
            <ListHeader>상품명</ListHeader>
            <ListHeader>가격</ListHeader>
        </HeaderContainer>
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
          <MenuList />
        </Box_two>
      </Container>
    </>
  );
}
