import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './page/Main';
import FormList from './page/FormList';
import Register from './page/Register';
import FormResult from './page/FormResult';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/form" element={<FormList />}/> 
      <Route path="/register" element={<Register />}/>
      <Route path="/answer-sheet" element={<FormResult />}/>
    </Routes>
  );
}

export default App;
