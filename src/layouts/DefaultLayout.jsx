import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderArea from './components/HeaderArea.jsx';

const DefaultLayout = () => {
  return (
    <div>
      <header>
        <HeaderArea />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DefaultLayout