import React from "react";
import './Header.css';
import SearchIcon from "@material-ui/icons/Search"
import login from "./routes/login";
import signUp from "./routes/signUp";
import AppRouter from "./router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">

        <div className="header_left">
          <img 
            className='header_logo' 
            src='img/watchapedia_logo.png'
            alt='watchapedia_logo'
          />
          <div className="header_nav">
            <span className="header_menu">영화</span>
            <span className="header_menu">TV</span>
            <span className="header_menu">책</span>
            <span className="header_menu">웹툰</span>
          </div>
        </div>

        <div className="header_right">
          <div className="header_option">
            <div className="header_search">
              <input 
                type='text' 
                placeholder='콘텐츠,인물,컬렉션, 유저를 검색해보세요.'            
                className='header_searchInput'
              />
              <SearchIcon className="header_searchIcon"/>
            </div>
            <Router>
              <button className="header_login" onClick={() => navigate("/login")}>로그인</button>
              <button className="header_signUp" onClick={() => navigate("/signUp")}>회원가입</button>
          </Router>
          </div>  
        </div>

      </div>
    </>
  );
}

export default Header;