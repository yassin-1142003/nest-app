import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from 'react-router-dom'
import axios from "axios"
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import Istiq from './components/Istiq';
import Istic from './components/Istic'
import Qarisiq from './components/Qarisiq'
import Soyuqq from './components/Soyuqq'
import Soyuqc from './components/Soyuqc'
import Dessertler from './components/Dessertler';
import Avadanliqlar from './components/Avadanliqlar';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import Sebet from './components/Sebet'
import Ferdi from './components/Ferdi'
import Mehsullar from './components/Mehsullar';
import Footer from './components/Footer';
import Qelyanalti from './components/Qelyanaltı';
import NotFound from './components/NotFound';
import Magaza from './components/Magaza';
import Menyu from './components/Menyu';
import Box from './components/Box'
import User from './components/User'
import Qeydiyyat from './components/Qeydiyyat';
import Giris from './components/Giris'
import Beyenme from './components/Beyenme';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dessertler" element={<Dessertler />} />
        <Route path=":topicId" element={<Ferdi />} />
        <Route path="sebet" element={<Sebet />} />
        <Route path="magaza" element={<Magaza />} >
          <Route path="avadanliqlar" element={<Avadanliqlar />} />
          <Route path="mehsullar" element={<Mehsullar />} />
        </Route>
        <Route path="menyu" element={<Menyu />}>
          <Route path="istiq" element={<Istiq />} />
          <Route path="istic" element={<Istic />} />
          <Route path="qarisiq" element={<Qarisiq />} />
          <Route path="soyuqq" element={<Soyuqq />} />
          <Route path="soyuqc" element={<Soyuqc />} />
          <Route path="dessertler" element={<Dessertler />} />
          <Route path="qelyanalti" element={<Qelyanalti />} />
          <Route path="box" element={<Box />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Blogs />} />
        <Route path="user" element={<User />}>
          <Route path="giris" element={<Giris />} />
          <Route path="qeydiyyat" element={<Qeydiyyat />} />
        </Route>
        <Route path="beyenme" element={<Beyenme />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
