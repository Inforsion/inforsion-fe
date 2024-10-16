import React, { useState } from "react";
import styled from "styled-components";
import Bluelogo from "../assets/image/Bluelogo.png";
import Input from "../components/Input";
import InputButton from "../components/InputButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

const Logo = styled.div`
  margin-top: 132px;
  margin: auto;
  padding-top: 130px;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 700;
  margin: auto;
`;
const Context = styled.div`
  padding-top: 100px;
  padding-left: 8%;
  font-size: 18px;
  font-weight: 700;
`;

const LostPW = styled.div`
  padding-top: 18px;
  padding-left: 8%;
  font-size: 12px;
  font-weight: 600;
  color: #006ffd;
  cursor: pointer;
`;

const JoinContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 18px;
`;

const JoinText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: Darkgray;
`;

const JoinLink = styled.div`
  padding-left: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #006ffd;
  cursor: pointer;
`;

function CreateStorePage() {
  const [storeName, setStoreName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(storeName, location);
    const res = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/store/create`,
      {
        name: storeName,
        location: location,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    localStorage.setItem("store", res.data.storeInfo);
    console.log(localStorage.getItem("store"));
  };

  return (
    <>
      <Container>
        <Logo>
          <img src={Bluelogo} width="185px" />
        </Logo>
        <Title>더욱 쉽고 간편한 가게관리</Title>
        <Context>가게 정보 입력</Context>
        <Input
          name="storeName"
          placeholder="가게 이름"
          onChange={(e) => setStoreName(e.target.value)}
        />
        <Input
          name="location"
          placeholder="위치"
          onChange={(e) => setLocation(e.target.value)}
        />
        <InputButton text="가게 생성 하기" onClick={onSubmitHandler} />
      </Container>
    </>
  );
}

export default CreateStorePage;
