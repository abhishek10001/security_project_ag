






import React from 'react';
import collegeLogo from '../Assets/images/Logo.png'; 
import './Header.css'; 
import ppf from '../Assets/images/ppf.png'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Header() {

//   let subMenu= document.getElementById("subMenu");

//         const toggleMenu= ()=>{
//             subMenu.classList.toggle("open-menu")
           
//         }
const subMenuRef = useRef(null);

const toggleMenu = () => {
  if (subMenuRef.current) {
    subMenuRef.current.classList.toggle("open-menu");
  }
};
  return (
    <header>
        <a href="index.html" id="logo">
            <img src={collegeLogo} alt="" />
            <div className="heading">JNU ONE</div>
        </a>

        <div id="nav_links">

        <Link to="/">    <a href="#" ><div className="ACTIVE">Home</div></a> </Link>
            <a href="Hostels/hostel_page.html"><div>Hostels</div></a>
            <a href="Gallery/Gallery.html"><div>Gallery</div></a>
            <a href="Facilites/facilites_page.html"><div>Facilites</div></a>
        {/* <!--<a href=""><div>Centers</div></a> --> */}
        </div>

        <div id="login">
            <img src={ppf} alt=""/>
            <button onClick={toggleMenu}>Login / SignUp </button>

        </div>
        <div className="sub-menu-wrap" id="subMenu" ref={subMenuRef}>
           <div className="sub-menu">
            <div className="user-info">
                <h3>Sign In/ Register</h3>
            </div>
            <Link to="/login">
            <a className="sub-menu-link">
                <p>Student Login</p>
            </a>
            </Link>
            <a href="Login_Signup/SignUp.html" className="sub-menu-link">
                <p>Staff Login</p>
            </a>
            {/* <hr> */}
            <a href="#" className="sign">
                <p>Register</p>
            </a>
           </div>
        </div>
    </header>

    
    
  );
}

export default Header;

