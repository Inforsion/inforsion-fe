import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import MainSalesChart from "../components/MainSalesChart";

function MainPage() {
    return (
    <>
        <MainHeader/>
        <MainSalesChart/>
        <Navigation/>
        
    </>
  );
}

export default MainPage;
