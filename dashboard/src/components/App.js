import React from 'react';
import TopSwitch from './TopSwitch';
import Statistics from './Statistics';
import Manage from './Manage';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={          
          <div id="main">
            <TopSwitch />
            <Statistics />
          </div>
        }/>
        <Route path="/manage" element={
          <div id="main">
            <TopSwitch />
            <Manage />
          </div>
        }/>
      </Routes>
    </React.Fragment >
  );
}

export default App;
