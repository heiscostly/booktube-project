import React from 'react';
import { Link } from "react-router-dom";
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
            <a href="#">Reviews</a>
            <a href="#">Contact</a>
            <a href="#">About </a>
            <Link to="/login">Login</Link>
            <Link to="/signup"><button className="btn btn-primary"> Sign Up</button></Link>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
