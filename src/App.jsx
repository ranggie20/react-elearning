import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DevelopmentPage from './pages/DevelopmentPage';
import MarketingPage from './pages/MarketingPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import OurTeamPage from './pages/OurTeamPage';
import SoftwarePage from './pages/SoftwarePage';
import CheckoutPage from './pages/CheckoutPage';
import DefaultLayout from './layouts/DefaultLayout';
import WishlistPage from './pages/WishlistPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import MyCoursePage from './pages/MyCoursePage';
import ProfilePage from './pages/ProfilePage';
import MyCourseMarketing from './pages/MyCourseMarketing';
import Test from './pages/Custom'
import CategoryPage from './pages/CategoryPage';
import CourseDetailPage from './pages/CourseDetailPage';
import Error404 from './pages/404Page';
import ListTransaksi from './pages/ListTransaksi';
import ListTeacher from './pages/ListTeacher';
import ListUser from './pages/ListUser';
import AdminListCourse from './pages/AdminListCourse'
import AdminListCategory from './pages/AdminListCategory';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path="/development" element={<DevelopmentPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/marketing" element={<MarketingPage/>}/>
            <Route path="/ourteam" element={<OurTeamPage/>}/>
            <Route path="/software" element={<SoftwarePage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
            <Route path="/wishlist" element={<WishlistPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registrasi" element={<RegistrationPage/>}/>
            <Route path="/mycourse" element={<MyCoursePage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/mycoursemarketing" element={<MyCourseMarketing/>}/>
            <Route path="/Custom" element={<Test/>}/>
            <Route path="/category/:id" element={<CategoryPage/>}/>
            <Route path="/course/:id" element={<CourseDetailPage/>}/>
            <Route path='*' element={<Error404/>}/>
            <Route path="/listtransaksi" element={<ListTransaksi/>} />
            <Route path="/listteacher" element={<ListTeacher/>} />
            <Route path="/listuser" element={<ListUser/>} />
            <Route path="/listcourse" element={<AdminListCourse/>} />
            <Route path="/listcategory" element={<AdminListCategory/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
