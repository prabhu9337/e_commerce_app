import React from 'react'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardDetails from './CardDetails';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product_details/:id" element={<CardDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App