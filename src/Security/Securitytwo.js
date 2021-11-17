import React from "react";
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/Footer";
import LockImg from "../assests/lock.png";
import IconM from "../assests/iconm.png";
import Secure from "../assests/Secure.png";
import Multi from "../assests/Multi.png";
import Time from "../assests/24.png";
import globe from "../assests/globe.svg";
import shield from "../assests/shield.svg";
import browser from "../assests/browser.svg";
import crt from "../assests/crt.jpg";
import cyber from "../assests/cyber.png";
import pad from "../assests/pad.png";
const Securitytwo = () => {
 
  return (
    <div className="contact-section">
        <Navigation/>
        <section className="security-header header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 text-white">
                        
                        <h1>Trust is Our Product</h1>
                        <p> Crypto mainframe has operated with a security-first mentality from day one. Our security philosophy adheres to three principles:</p>
                    </div>
                    <div className="col-lg-5">
                        <img src={pad} alt="" />
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                <div className="col-lg-4 text-white io">
                <div class="secu">
                <img  class="secu1" src={globe} alt=""/>
             <p>Defending against external threats</p>
        </div>
                </div>
                <div className="col-lg-4 text-white io">
                <div class="secu">
                <img  class="secu1" src={shield} alt=""/>
             <p>Protecting against human error</p>
        </div>
                </div>
                <div className="col-lg-4 text-white io">
                <div class="secu">
                <img class="secu1" src={browser} alt=""/>
             <p>Guarding against misuse of insider access</p>
        </div>
                </div>

                </div>
            </div>
        </section>
        <section className="crt">
        <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 text-white">
                   
                      <h2>Crypto Security</h2>
                        <p>The majority of your crypto is held in our offline, air-gapped Cold Storage system. Only a small portion is held in our online Hot Wallet, which is insured.</p>
                        
                    </div>
                    <div className="col-lg-5">
                        <img src={cyber} alt="" />
                    </div>
                    </div>
                    </div>
        </section>
        <section className="crt">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 text-white  mb-4">
               
                <h2>Crypto mainframe Cold Storage</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-white mb-4">
                
                <h4 class="mb-5">We use HSMs that have achieved a FIPS 140-2 Level 3 rating or higher.</h4>
              
             
               
                <h4 class="mb-5">All private keys are generated onboard our HSMs and stored and managed there for their lifetime.</h4>
              </div>
            
              <div className="col-lg-6 text-white mb-4">
                <h4 class="mb-5">We use a multisignature digital signature scheme (multisig) to eliminate single points of failure and improve our resilience against the loss or compromise of any individual private key.</h4>
                <h4 class="mb-5">All HSMs are geographically distributed and stored in monitored, access-controlled facilities.</h4>
                <h4 class="mb-5">All HSMs require the coordinated action of multiple employees to operate.</h4>

              </div>
            </div>
          </div>
        </section>
        <section className="crt">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-12 text-white mb-4">
               
                <h2>Crypto mainframe Hot Wallet</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-white mb-4">
                
                <h4 class="mb-5">We use HSMs that have achieved a FIPS 140-2 Level 3 rating or higher.</h4>
              
             
               
              
              </div>
            
              <div className="col-lg-6 text-white mb-4">
                <h4 class="mb-5">We follow the principle of least-privilege by applying tiered, role-based access-controls to our production environment. Administrative access requires multi-factor authentication.</h4>
               

              </div>
            </div>
          </div>
        </section>
        <section className="crt">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-white  mb-4">
               
                <h2>Account Security</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-white mb-4">
                
                <h4 class="mb-5">Two-Factor Authentication (2FA) is required when you log in to your account or make crypto withdrawals.</h4>
              
             
               
                <h4 class="mb-5">We support Hardware Security Keys via WebAuthn so that you can secure your account with the strongest 2FA protection.</h4>
              </div>
            
              <div className="col-lg-6 text-white mb-4">
                <h4 class="mb-5">You can create an Approved Address list that restricts your crypto withdrawals to approved addresses only, or disables all crypto withdrawals from your account.</h4>
                <h4 class="mb-5">Rate-limiting is applied to certain account operations, such as your login attempts, in order to thwart brute force attacks.</h4>
                <h4 class="mb-5">We hash and salt your password and use encryption to secure your personal information and other sensitive information, both in transit and at rest.</h4>

              </div>
            </div>
          </div>
        </section>
        <section className="crt">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 text-white  mb-4">
               
                <h2>Infrastructure Security</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-white mb-4">
                
                <h4 class="mb-5">All of our website data is transmitted over encrypted Transport Layer Security (TLS) connections (i.e., HTTPS).</h4>
              
             
               
                <h4 class="mb-5">We leverage the content-security policy (CSP) and HTTP Strict Transport Security (HSTS) features found in modern browsers.</h4>
              </div>
            
              <div className="col-lg-6 text-white mb-4">
                <h4 class="mb-5">We partner with enterprise vendors to mitigate against distributed denial-of-service (DDoS) attacks.</h4>
                <h4 class="mb-5">Internal-only sections of our website have separate access controls and are not exposed to the public Internet.</h4>
               

              </div>
            </div>
          </div>
        </section>
        <section className="crt">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 text-white  mb-4">
               
                <h2>Internal Controls</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-white mb-4">
                
                <h4 class="mb-5">Multiple signatories are required to transfer cryptocurrency out of our Cold Storage System.</h4>
              
             
               
                <h4 class="mb-5">Our CEO (Tyler Winklevoss) and President (Cameron Winklevoss) are unable to individually or jointly transfer cryptocurrency out of our Cold Storage System.</h4>
                <h4 class="mb-5">Our offices do not store or contain anything of value, including private keys. All private keys are stored offsite and geographically distributed in monitored, access-controlled facilities.</h4>
              </div>
            
              <div className="col-lg-6 text-white mb-4">
                <h4 class="mb-5">All employees undergo criminal and credit background checks and are subject to ongoing background checks throughout their employment.</h4>
                <h4 class="mb-5">All remote-access requires public-key authentication via credentials stored on hardware tokens. Passwords, one-time passwords (OTPs), or other phishable credentials are not permitted.</h4>

              </div>
            </div>
          </div>
        </section>
        <section className="vul white-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
             
                <h2>Vulnerability Disclosure Policy</h2>
                <p class="conts">At Crypto mainframe, we welcome contributions from security researchers. If you believe you have found a security vulnerability that impacts Crypto mainframe, we encourage you to contact us immediately. Our team will investigate all legitimate reports and do our best to respond in a timely manner.</p>
               <p class="conts">To participate in our private bug bounty program or learn more about the terms of our program, including our scope, bounties, or safe harbor guarantee, please email bugbounty@Crypto mainframe.com.</p>
               <p class="conts">Our commitment to security researchers is simple: we will not take action against anyone who reports an issue in a responsible manner. We will do our best to reply to you in a timely fashion and periodically update you on our progress with respect to investigating or remediating any issues you may have identified.</p>            
              </div>
              <div className="col-lg-5">
                        <img src={crt} alt="" />
                    </div>
            </div>
            
          </div>
        </section>
      
        <Footer/>
    </div>
  );
};

export default Securitytwo;
