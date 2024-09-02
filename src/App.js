import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './page/Main';
import FormList from './page/FormList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/register" element={<FormList />}/> 
    </Routes>
  );
}

export default App;
