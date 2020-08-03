import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Trails from './components/trails';

function App() {
  return (
    <Router>
      <h1>Must-Hike Trails in Utah</h1>
      <Route>
        <Trails />
      </Route>
    </Router>
  );
}

export default App;
