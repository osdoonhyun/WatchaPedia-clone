import './App.css';
import Header from './Header';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>        
      <Routes>
        <Route path="/login" element={<login />} />
        <Route path="/signUp" element={<signUp />} />
      </Routes>
      <h2>WatchaPedia 본문</h2>
    </div>
  );
 
}

export default App;
