import React, { useEffect, useState } from "react";
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

const StoreList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
`;

const StoreItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: auto;
  margin-left: 7%;
  margin-bottom: 10px;
  width: 86%;
  height: 48px;
  border-radius: 15px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-size: 16px;
  cursor: pointer;
`;

function CreateStorePage() {
  const [storeName, setStoreName] = useState("");
  const [location, setLocation] = useState("");
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadStores = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/store/list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStoreList(res.data.storeList);
      setLoading(false);

      console.log("가게 목록 저장 성공");
      console.log(res.data);
    } catch (error) {
      console.error("가게 목록 가져오기 실패");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStores();
  }, []);

  useEffect(() => {
    console.log("storeList 업데이트됨:", storeList);
  }, [storeList]);

  const onSubmitHandler = async () => {
    try {
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
      console.log(res);
      localStorage.setItem("store", JSON.stringify(res.data.storeInfo.id));
      console.log(localStorage.getItem("store"));
      loadStores();
    } catch (error) {
      console.error("가게 생성 중 오류", error);
      alert("가게 생성에 실패했습니다.");
    }
  };

  const deleteStore = async (storeId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `${import.meta.env.VITE_APP_API_URL}/store`,
        {
          data: { storeId: storeId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("가게 삭제 성공:", res.data);
      setStoreList((prevStores) =>
        prevStores.filter((store) => store.id !== storeId)
      );
    } catch (error) {
      console.error("가게 삭제 실패");
    }
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
        <Context> 가게 목록</Context>
        {loading ? (
          <p>가게 목록을 불러오는 중입니다...</p>
        ) : (
          <StoreList>
            {storeList.length > 0 ? (
              storeList.map((store) => (
                <StoreItem key={store.id}>
                  {store.name} - {store.location}
                  <DeleteButton onClick={() => deleteStore(store.id)}>
                    X
                  </DeleteButton>
                </StoreItem>
              ))
            ) : (
              <p>등록된 가게가 없습니다.</p>
            )}
          </StoreList>
        )}
      </Container>
    </>
  );
}

export default CreateStorePage;
