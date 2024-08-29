import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// layout
import DefaultLayout from './layouts/DefaultLayout';

// pages
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import TeacherPage from './pages/TeacherPage';
import AdminPage from './pages/AdminPage';
import Admin_Categorypage from './pages/Admin_CategoryPage';
import Detail_BisnisPage from './pages/Detail_BisnisPage';
import Basic_GamePage from './pages/Basic_GamePage';
import Cyber_SecurityPage from './pages/Cyber_SecurityPage';
import Html_DetailPage from './pages/Html_DetailPage';
import JavaDetailPage from './pages/JavaDetailPage';
import MicrocontrolerPage from './pages/MicrocontrolerPage';
import StrategiMarketingPage from'./pages/StrategiMarketingPage';
import WindowsDetailPage from './pages/WindowsDetailPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path="/category" element={<CategoryPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/teacher" element={<TeacherPage/>} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/admin-category" element={<Admin_Categorypage/>} />
            <Route path="/detail-bisnis" element={<Detail_BisnisPage/>} />
            <Route path="/basicgame" element={<Basic_GamePage/>} />
            <Route path="/cybersecurity" element={<Cyber_SecurityPage/>} />
            <Route path="/html" element={<Html_DetailPage/>} />
            <Route path="/java" element={<JavaDetailPage/>} />
            <Route path="/micro" element={<MicrocontrolerPage/>} />
            <Route path="/marketing" element={<StrategiMarketingPage/>} />
            <Route path="/windows" element={<WindowsDetailPage/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
