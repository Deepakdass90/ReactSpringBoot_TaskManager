import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Homepage from './component/container/Homepage';
import { CssBaseline, Container } from '@mui/material';

function App() {
  
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <CssBaseline />
      <Header />
      <Container style={{ flex: 1, paddingTop: '20px' }}>
        <Homepage/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
