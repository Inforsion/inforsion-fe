import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
import axios from "axios";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import MainSalesValue from "../components/Main/MainSalesValue";
import MainSalesChart from "../components/Main/MainSalesChart";
import ChartButton from "../components/Main/ChartButton";
import Sales from "../assets/image/sales.svg?react";
import { salesData } from "../SalesData";

const MainContainer = styled.div`
  padding: 5%;
`;

const SalesContainer = styled.div`
  margin-top: 10px;
`;
const SalesHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;
const ChartText = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 5px;
`;

const ShotBtn = styled.button`
  width: 160px;
  height: 25px;
  border-radius: 15px;
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  background-color: #2897ff;
  margin-top: 30px;
  margin-left: 29%;
`;

function MainPage() {
  const [activeTab, setActiveTab] = useState("day");
  const { storeId: paramStoreId } = useParams();
  const { storeId, setStoreId } = useStoreContext();
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    if (paramStoreId && paramStoreId !== storeId) {
      setStoreId(paramStoreId);
    }
  }, [paramStoreId, storeId, setStoreId]);

  useEffect(() => {
    if (!storeId) return;
    const fetchStoreData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/store/${storeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStoreData(res.data);
      } catch (error) {
        console.error("스토어 데이터를 가져오지 못했습니다", error);
      }
    };

    fetchStoreData();
  }, [storeId]);

  if (!storeData) return <p>스토어 정보를 불러오는 중입니다...</p>;

  return (
    <>
      <MainHeader />
      <MainContainer>
        <MainSalesValue />
        <SalesContainer>
          <SalesHeader>
            <Sales />
            <ChartText>매출</ChartText>
          </SalesHeader>
          <ChartButton activeTab={activeTab} setActiveTab={setActiveTab} />
          <MainSalesChart data={salesData[activeTab]} />
        </SalesContainer>
        <ShotBtn>영수증 촬영하러 가기 {">"} </ShotBtn>
      </MainContainer>
      <Navigation />
    </>
  );
}

export default MainPage;
