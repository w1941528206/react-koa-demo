import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from '../../app';
import Vanta from '../../pages/vanta';
import Masonry from '../../pages/masonry';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/vanta' element={<Vanta />} />
        <Route path='/masonry' element={<Masonry />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
