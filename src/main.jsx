import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './style/GlobalStyle.js'
import styled from 'styled-components'
import SplashPage from './pages/SplashPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

const Container = styled.div`
  max-width: 430px;
    height: 100vh;
    position: relative;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: auto;
    justify-content: center;
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
      <Container>
        <SignupPage/>
      </Container>
  </React.StrictMode>,
)
