import React, { Component } from 'react';
import JobPage from './Pages/JobPage.js';
// import JobPage from './Pages/JobPage.js';
import Home8 from './Pages/Home8.js';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom"


function App() {
  return (
    <div className="App">
     
     <h1>Coach Profile Creation</h1>
      <JobPage/>

      <h1>Home8</h1> 
      <Home8/>
       
               
    </div>
  );
}

export default App;
