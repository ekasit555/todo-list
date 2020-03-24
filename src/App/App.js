import React, {useState, useReducer} from 'react';
import './App.css';
import RouterApp from './RouterApp'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <RouterApp/>
    </Router>
  );
}


export default App;
