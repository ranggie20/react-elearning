import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import DefaultLayout from './layouts/DefaultLayout';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path="/category" element={<CategoryPage/>} />
            <Route path="/about" element={<AboutPage/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
