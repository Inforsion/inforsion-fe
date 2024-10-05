import React from 'react'
import styled from 'styled-components'


const ListContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10%;
  cursor: pointer;
`

const Context = styled.div`
    padding-left:30px;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
`

function Icons({ icon: Icon, width, height }) {
  return (
      <Icon width={width} height={height} fill="none" />
  );
}

export default function SidebarList({icon, text}) {

  
  return (
    <>
      <ListContainer>
        <Icons icon={icon} width={15} height={18}/>
        <Context>{text}</Context>
      </ListContainer>

    </>
  )
}
