import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ArtisticProjects from './pages/ArtisticProjects';
import BackEndProjects from './pages/BackEndProjects';
import FrontEndProjects from './pages/FrontEndProjects';
import HomePage from './pages/HomePage';
import MiniApplications from './pages/MiniApplications';
import LandingPage  from './pages/LandingPage';

import './index.css';
//import App from './App';

ReactDOM.render(

  <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/artisticprojects" element={<ArtisticProjects />} />
        <Route path="/backendprojects" element={<BackEndProjects />} />
        <Route path="/frontEndprojects" element={<FrontEndProjects />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/miniapplications" element={<MiniApplications />} />
      </Routes>
  </Router>,
  document.getElementById('root')
)
