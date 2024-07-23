import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/about-us' Component={AboutUs} />
        </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
