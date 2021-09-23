import React , {useState}from "react";
import { Button } from "react-bootstrap";
import Android from '../assests/google.png';
import Ios from '../assests/iphone.png';
import FooterLogo from '../assests/logo-white.png';

const Footer = () => {
    const [visible, setVisible] = useState(false);
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer-top-block">
                        <div className="block-f-links">
                            <h3 className="font-weight-bold">App</h3>
                            <ul>
                                <li><a href="#">Buy and Sell</a></li>
                                <li><a href="#">MainFram Earn</a></li>
                                <li><a href="#">MainFram Credit</a></li>
                                <li><a href="#">MainFram Pay</a></li>
                            </ul>
                        </div>
                        <div className="block-f-links">
                            <h3 className="font-weight-bold">Useful Links</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">MainFram Credit</a></li>
                                <li><a href="#">MainFram Pay</a></li>
                            </ul>
                        </div>
                        <div className="block-f-links">
                            <h3 className="font-weight-bold">App</h3>
                            <ul>
                                <li><a href="#">Buy and Sell</a></li>
                                <li><a href="#">MainFram Earn</a></li>
                                <li><a href="#">MainFram Credit</a></li>
                                <li><a href="#">MainFram Pay</a></li>
                            </ul>
                        </div>
                        <div className="block-f-links">
                            <h3 className="font-weight-bold">App</h3>
                            <ul>
                                <li><a href="#">Buy and Sell</a></li>
                                <li><a href="#">MainFram Earn</a></li>
                                <li><a href="#">MainFram Credit</a></li>
                                <li><a href="#">MainFram Pay</a></li>
                            </ul>
                        </div>
                        <div className="block-f-links">
                            <h3 className="font-weight-bold">App</h3>
                            <ul>
                                <li><a href="#">Buy and Sell</a></li>
                                <li><a href="#">MainFram Earn</a></li>
                                <li><a href="#">MainFram Credit</a></li>
                                <li><a href="#">MainFram Pay</a></li>
                            </ul>
                        </div>
                        <div className="block-f-links">
                            <div className="app-cions-links-footer mb-4">
                                <a href="#"><img src={Android} alt="" /></a>
                                <a href="#"><img src={Ios} alt="" /></a>
                            </div>
                            <div className="social-icon-header">
                                <a href="#" className="border-radius-5"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" className="border-radius-5"><i class="fab fa-instagram"></i></a>
                                <a href="#" className="border-radius-5"><i class="fab fa-twitter"></i></a>
                                <a href="#" className="border-radius-5"><i class="fab fa-telegram-plane"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    <img src={FooterLogo} alt="" />
                    <p>Crypto Mainframe is the brainchild of Mainframe Consulting Ltd. We are an established London firm with successful corporate projects in distributed
                       computing and data management solutions.
                    </p>
                </div>
            </div>   
            <div className="row">
                <div className="col-lg-12">
                    <div className="copyright border-top">
                        <p>©2021 Crypto Mainframe ltd. All Right Reserved <a href="#">Privacy Policy</a> <a href="#">Terms of Use</a></p>
                    </div>
                </div>
            </div>
        </div>
        <Button onClick={scrollToTop}  type="submit" className="scrooltop">
            <i class="fas fa-chevron-up"></i>
        </Button>
    </footer>
);
};
export default Footer;

