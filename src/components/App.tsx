import React from 'react';
import './App.scss';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Favourites from '../pages/Favourites';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Home />} />
            <Route path="favorites" element={<Favourites />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
  );
}

export default App;
