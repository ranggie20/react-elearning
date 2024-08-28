import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderArea from './components/HeaderArea';
import Footer from './components/Footer';

const DefaultLayout = () => {
  return (
    <div>
      <header>
        <HeaderArea />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer>
      </Footer>
    </div>
  )
}

export default DefaultLayout