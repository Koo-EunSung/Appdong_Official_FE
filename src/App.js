import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from './page/Main';
import FormList from './page/FormList';
import Register from './page/Register';
import FormResult from './page/FormResult';
import Login from './page/Login';
import Admin from './page/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/form" element={<FormList />}/> 
      <Route path="/register" element={<Register />}/>
      <Route path="/admin" element={<Admin />}>
        <Route path="answer-sheet" element={<FormResult />}/>
      </Route>
    </Routes>
  );
}

export default App;
