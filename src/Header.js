import React from "react";
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img className='header_logo' src=''/>
      <div className="header_nav">
        <div className="header_menu">영화</div>
        <div className="header_menu">TV</div>
        <div className="header_menu">책</div>
        <div className="header_menu">웹툰</div>
      </div>
      <div className="header_option">
        <div className="header_search">
          <input type='text' className='header_searchInput'/>
        </div>
        <div className="header_logIn">로그인</div>
        <div className="header_signUp">회원가입</div>
      </div>  
    </div>
  );
}

export default Header;