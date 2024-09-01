import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
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
import AdminCategory from './pages/AdminCategory'
import AdminCourse from './pages/AdminCourse'


import CategoryPage from './pages/CategoryPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ManageCoursesPage from './pages/ManageCoursesPage';
import AddCoursePage from './pages/AddCoursePage';
import EditCoursePage from './pages/EditCoursePage';
import Error404 from './pages/404Page';
import ListTransaksi from './pages/ListTransaksi';
import ListTeacher from './pages/ListTeacher';
import ListUser from './pages/ListUser';
import AdminListCourse from './pages/AdminListCourse'
import AdminListCategory from './pages/AdminListCategory';
import CheckCookie from './components/CheckCookie';
import CategoryListPage from './pages/CategoryListPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route element={<CheckCookie roles={["student", "admin", "teacher"]} override={true} />}>
              <Route index element={<HomePage/>} />
              <Route path="/about" element={<AboutPage/>} />
              <Route path="/ourteam" element={<OurTeamPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/registrasi" element={<RegistrationPage/>}/>
              <Route path="/category" element={<CategoryListPage/>}/>
              <Route path="/category/:id" element={<CategoryPage/>}/>
              <Route path="/course/:id" element={<CourseDetailPage/>}/>

              <Route path="/development" element={<DevelopmentPage/>} />
              <Route path="/marketing" element={<MarketingPage/>}/>
              <Route path="/software" element={<SoftwarePage/>}/>
            </Route>

            <Route element={<CheckCookie roles={["student"]} />}>
              <Route path="/cart" element={<CartPage/>} />
              <Route path="/checkout" element={<CheckoutPage/>}/>
              <Route path="/wishlist" element={<WishlistPage/>}/>
              <Route path="/mycourse" element={<MyCoursePage/>}/>
              <Route path="/mycoursemarketing" element={<MyCourseMarketing/>}/>
            </Route>

            <Route element={<CheckCookie roles={["student", "admin", "teacher"]} />}>
              <Route path="/profile" element={<ProfilePage/>}/>
            </Route>
            
            {/* Manage Courses */}
            <Route element={<CheckCookie roles={["admin", "teacher"]} />}>
              <Route path="/manage/courses" element={<ManageCoursesPage/>}/>
              <Route path="/manage/courses/tambah" element={<AddCoursePage/>}/>
              <Route path="/manage/courses/:id" element={<EditCoursePage/>}/>
            </Route>

            {/* Admin Pages */}
            <Route element={<CheckCookie roles={["admin"]} />}>
              <Route path="/admin-category" element={<AdminCategory/>}/>
              <Route path="/admin-course" element={<AdminCourse/>}/>

              <Route path="/listtransaksi" element={<ListTransaksi/>} />
              <Route path="/listteacher" element={<ListTeacher/>} />
              <Route path="/listuser" element={<ListUser/>} />
              <Route path="/listcourse" element={<AdminListCourse/>} />
              <Route path="/listcategory" element={<AdminListCategory/>} />
            </Route>

            <Route path='*' element={<Error404/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
