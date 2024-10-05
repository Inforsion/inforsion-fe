import React from 'react';
import styled from 'styled-components';
import SidebarList from './Main/SidebarList';
import Sales from "../assets/image/IconB/salesB.svg?react";
import Goods from "../assets/image/IconB/goodsB.svg?react";
import Operate from "../assets/image/IconB/operateB.svg?react";
import Menu from "../assets/image/IconB/menuB.svg?react";
import Logout from "../assets/image/IconB/logoutB.svg?react";
import SearchIcon from "../assets/image/search.svg?react";
import InputButton from "../components/InputButton";

const Container = styled.div`
  background-color: white;
  width: 60%;
  height: 56%;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
`;

const Search = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 16px;
  border: none;
  background-color: #F5F5F5;
  padding-left: 50px;
  outline: none;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export default function Sidebar() {
  return (
    <Container>
      <SearchWrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <Search placeholder='Search...' />
      </SearchWrapper>
      <SidebarList icon={Sales} text="매출" />
      <SidebarList icon={Goods} text="재고" />
      <SidebarList icon={Operate} text="운영" />
      <SidebarList icon={Menu} text="우리 가게 메뉴" />
      <div style={{ margin: '40px' }}></div>
      <InputButton text="메뉴등록하러가기 >"/>
      <SidebarList icon={Logout} text="Logout" />
    </Container>
  );
}
