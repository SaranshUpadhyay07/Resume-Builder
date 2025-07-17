import React from'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import CreateResume from './components/create.jsx';
import Resume from './components/resume.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateResume />} />
      <Route path="/build" element={<Resume />} />
    </Routes>
  );
}

export default App;
