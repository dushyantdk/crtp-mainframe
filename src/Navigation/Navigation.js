import React, { useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown, Button} from "react-bootstrap";
import HeaderLogo from "../assests/logo-white.png";
const Navigation = () => {
   const navbarRef = useRef();
   useEffect(() => {
   window.addEventListener("scroll", handleScroll);
   return () => {
   window.removeEventListener("scroll", handleScroll);
   };
   }, []);
   const handleScroll = () => {
   if (window.scrollY > 20) {
   navbarRef.current.classList.add("scroll");
   } else {
   navbarRef.current.classList.remove("scroll");
   }
   };
return (
<>
<Navbar
   id="navbar"
   className="navbar navbar-expand-lg customize-nav bg-none fixed-top navbar-dark"
   expand="lg"
   ref={navbarRef}
   >
   <div className="container">
      <Navbar.Brand href="/">
         <img className="img-fluid white-logo" src={HeaderLogo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="ms-auto header-nav">
            
            <Nav.Link href="/">Home</Nav.Link>
           
            <NavDropdown
               title="Platform"
               id="basic-nav-dropdown"
               >
               <div className="d-md-flex align-items-start justify-content-start">
                  <div className="w-100">
                     <a className="dropdown-item" href="https://www.cryptomainframe.exchange/trading/btcusdt">
                     Exchange
                     </a>
                     <a className="dropdown-item" href="https://www.cryptomainframe.exchange/otc/trading/">
                     Otc
                     </a>
                  </div>
               </div>
            </NavDropdown>   
            <Nav.Link href="/app">App</Nav.Link>  
            <NavDropdown
               title="Company"
               id="basic-nav-dropdown"
               >
               <div className="d-md-flex align-items-start justify-content-start">
                  <div className="w-100">
                     <a className="dropdown-item" href="/about">
                     About Us
                     </a>
                     <a className="dropdown-item" href="/security">
                     Security
                     </a>
                    {/*  <a className="dropdown-item" href="/Securitytwo">
                     Securitytwo
                     </a>*/}
                     <a className="dropdown-item" href="/career">
                     Careers
                     </a>
                     <a className="dropdown-item" href="/contactus">
                     Contact Us
                     </a>
                  </div>
               </div>
            </NavDropdown> 
            <NavDropdown
               title="Legal"
               id="basic-nav-dropdown"
               >
               <div className="d-md-flex align-items-start justify-content-start">
                  <div className="w-100">
                     <a className="dropdown-item" href="/Privacy">
                     Privacy Policy
                     </a>
                     <a className="dropdown-item" href="/Terms">
                     Terms of Use
                     </a>
                  </div>
               </div>
            </NavDropdown> 
            <Button className="login-register-btn border-radius" href="/requestDemo" bsPrefix="btnn">Login</Button>
            <Button className="login-register-btn border-radius" href="/requestDemo" bsPrefix="btnn">Register</Button>
         </Nav>
         {/* <div className="social-icon-header">
            <a href="#" className="border-radius-5"><i class="fab fa-facebook-f"></i></a>
            <a href="#" className="border-radius-5"><i class="fab fa-instagram"></i></a>
            <a href="#" className="border-radius-5"><i class="fab fa-twitter"></i></a>
            <a href="#" className="border-radius-5"><i class="fab fa-telegram-plane"></i></a>
         </div> */}
      </Navbar.Collapse>
   </div>
</Navbar>
</>
);
};
export default Navigation;

