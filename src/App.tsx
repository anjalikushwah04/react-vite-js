import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Second from './Second';

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>} />
          <Route path="/second" element={<Second />} />
      </Routes>
      </BrowserRouter>  </>
    
  );
};

export default App;
