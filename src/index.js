import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import FrontEndProjects from './pages/FrontEndProjects';
import HomePage from './pages/HomePage';

import LandingPage  from './pages/LandingPage';

import './index.css';
//import App from './App';

ReactDOM.render(

  <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
     
        <Route path="/frontEndprojects" element={<FrontEndProjects />} />
        <Route path="/homepage" element={<HomePage />} />
   
      </Routes>
  </Router>,
  document.getElementById('root')
)
