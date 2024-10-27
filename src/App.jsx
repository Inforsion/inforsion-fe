import "./App.css";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import SplashPage from "./pages/SplashPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import SalesPage from "./pages/SalesPage";
import GoodsPage from "./pages/GoodsPage";
import OperatePage from "./pages/OperatePage";
import IngredientsPage from "./pages/IngredientsPage";
import MenuPage from "./pages/MenuPage";
import WriteSalesPage from "./pages/WriteSalesPage";
import CreateStorePage from "./pages/CreateStorePage";

function App() {
  return (
    <>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/main/:storeId" element={<MainPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/writesales" element={<WriteSalesPage />} />
          <Route path="/goods" element={<GoodsPage />} />
          <Route path="/operate" element={<OperatePage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/createstore" element={<CreateStorePage />} />
        </Routes>
      </StoreProvider>
    </>
  );
}

export default App;
