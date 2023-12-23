// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="flex justify-start">
      <BrowserRouter>
        <Sidebar />
        <div className="flex-1 p-4"> 
          <Routes>
            <Route path="/" element={<Navigate to="/welcome/getting-started" />} />
            <Route path="/:section/:page" element={<Homepage />} />
            <Route path="*" element={<Navigate to="/welcome/getting-started" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
