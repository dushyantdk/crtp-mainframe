import React, { useRef, useEffect, useState } from "react";
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
            <Button className="login-register-btn border-radius" href="/requestDemo" bsPrefix="btnn">Login / Register</Button>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Exchange</Nav.Link>    
            <Nav.Link href="/">App</Nav.Link>  
            <Nav.Link href="/">company</Nav.Link>  
            <Nav.Link href="/">Legal</Nav.Link>  
         </Nav>
         <div className="social-icon-header">
            <a href="#" className="border-radius-5"><i class="fab fa-facebook-f"></i></a>
            <a href="#" className="border-radius-5"><i class="fab fa-instagram"></i></a>
            <a href="#" className="border-radius-5"><i class="fab fa-twitter"></i></a>
            <a href="#" className="border-radius-5"><i class="fab fa-telegram-plane"></i></a>
         </div>
      </Navbar.Collapse>
   </div>
</Navbar>
</>
);
};
export default Navigation;

