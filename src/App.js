
import './App.css';
import { FrontPage } from './FrontPage/FrontPage.js';
import { Shomepage } from './StudentHomePage/Shomepageprofile';
import { Thomepage } from './TeachersHomePage/Thomepage';

import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path='/student-homepage' element={<Shomepage name="Sasuke Uchiha"/>}/>
        <Route path='/teacher-homepage' element={<Thomepage name="Orochimaru"/>}/>
        
      </Routes>
    </Router>
   </>
  );
}

export default App;
