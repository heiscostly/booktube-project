import React from 'react';
import logo from "../Colorful Bookstore Logo.png"
import lag from "../lag.png"
import  "./navbar.css"




function Navbar () {
  return(

    <div className="header">


      <div className="nav__bar">
        <div className="nav__items ">
          <div className="logo" style={{width:'10%',}}>
            {/* <img src={logo} alt="mylogo" style={{width:'100%'}}/> */}
          </div>
            <a href="#">Home</a>
            <a href="#">Documents</a>
            <a href="#">API</a>
            <a href="#">About </a>
            <a href="#">Login</a>
            <button className="btn btn-primary"> Sign Up</button>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
