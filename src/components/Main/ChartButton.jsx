import React from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  justify-content: right;
`;

const TabButton = styled.button`
  background-color: ${(props) => (props.active ? "#006FFD" : "FFFFFF")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#343434")};
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
`;

export default function ChartButton({activeTab, setActiveTab}) {
  return (
    <>
      <TabContainer>
        <TabButton
          active={activeTab === "day"}
          onClick={() => setActiveTab("day")}
        >
          일
        </TabButton>
        <TabButton
          active={activeTab === "week"}
          onClick={() => setActiveTab("week")}
        >
          주
        </TabButton>
        <TabButton
          active={activeTab === "month"}
          onClick={() => setActiveTab("month")}
        >
          월
        </TabButton>
      </TabContainer>
    </>
  );
}
