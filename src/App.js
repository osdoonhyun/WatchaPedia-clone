import './App.css';
import Header from './Header';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>       
      <h2>WatchaPedia 본문</h2>
    </div>
  );
 
}

export default App;
