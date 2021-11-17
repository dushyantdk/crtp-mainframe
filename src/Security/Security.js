import React from "react";
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/Footer";
import LockImg from "../assests/lock.png";
import IconM from "../assests/iconm.png";
import Secure from "../assests/Secure.png";
import Multi from "../assests/Multi.png";
import Time from "../assests/24.png";


const Security = () => {
 
  return (
    <div className="contact-section">
        <Navigation/>
        <section className="security-header header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 text-white">
                        <h3 className="color-light-blue">SECURELY BUY, SELL, EARN, SEND & TRACK</h3>
                        <h1>Security First. Always.</h1>
                        <p>Our commitment to our customers is built on trust. We believe that security and data privacy are the foundations of achieving mainstream cryptocurrency adoption.</p>
                    </div>
                    <div className="col-lg-5">
                        <img src={LockImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="our-philosophy">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-white text-center">
                <h2 className="">Our Philosophy</h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src={IconM} alt="" />
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12 text-white mb-5">
                    <h3>Security and Privacy by Design and By Default</h3>
                    <p>We drive a Zero Trust, Defence in Depth security strategy across our systems and platforms. Data privacy assessments are built into our processes to safeguard your personal information.</p>
                  </div>
                  <div className="col-lg-12 text-white mb-5">
                    <h3>Empowering a Growth Mindset</h3>
                    <p>To continually strengthen our security posture, we invest heavily in ongoing security and privacy awareness training for all staff.</p>
                  </div>
                  <div className="col-lg-12 text-white mb-5">
                    <h3>Security and Privacy by Design and By Default</h3>
                    <p>We drive a Zero Trust, Defence in Depth security strategy across our systems and platforms. Data privacy assessments are built into our processes to safeguard your personal information.</p>
                  </div>
                  <div className="col-lg-12 text-white mb-5">
                    <h3>Empowering a Growth Mindset</h3>
                    <p>To continually strengthen our security posture, we invest heavily in ongoing security and privacy awareness training for all staff.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-philosophy">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 text-white text-center mb-4">
                <h3 className="color-light-blue mb-0">Deposit and Transaction deposits</h3>
                <h2>We screen all deposits for compliance, and have a dedicated team to monitor all transactions</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-white mb-4">
                <h3>100% of user cryptocurrencies are held offline in cold storage.</h3>
                <p>CMF has a strategic partnership with Ledger, integrating its institutional-grade custody solution, Ledger Vault. We also leverage hardware security modules (HSM) and multi-signature technologies. Crypto.com has secured a total of USD 750M in cold storage insurance against physical damage or destruction, and third-party theft.</p>
              </div>
              <div className="col-lg-6 text-white mb-4">
                <h3>All funds held in hot wallets are corporate funds.</h3>
                <p>We leverage HSM and multi-signature, key-generation technologies to keep these funds secure. They are primarily used to ensure smooth day-to-day withdrawal requests from our customers.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 text-white mb-4">
                <h3>Users’ fiat currencies are held in regulated custodian bank accounts.</h3>
                <p>If you are a U.S. resident, your USD balances are covered by up to USD 250,000 of FDIC insurance. You retain ownership of the currencies in bank accounts, meaning your fiat funds cannot be claimed by Crypto.com or its creditors.</p>
              </div>
              <div className="col-lg-6 text-white mb-4">
                <h3>CMF adheres to the principle of least privilege.</h3>
                <p>We have strict controls on access rights to funds in both cold and hot wallets.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="our-securty-f-block white-bg">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-12 mb-4">
                <h3 className="color-light-blue mb-0">CMF App</h3>
                <h2>We’ve developed key security features in our apps</h2>
              </div>
            </div>
            <div className="row align-items-center justify-content-center  mb-5">
              <div className="col-lg-6">
                <h3>We follow a Secure Software Development Lifecycle.</h3>
                <p>Security is baked into our coding lifecycle. Our software is peer-reviewed and uses a combination of static and dynamic source code analysis tools.</p>
              </div>
              <div className="col-lg-2">
                <img src={Secure} alt="" />
              </div>
            </div>
            <div className="row align-items-center justify-content-center mb-5">
              <div className="col-lg-2">
                <img src={Multi} alt="" />
              </div>
              <div className="col-lg-6">
                <h3>We use Multi-Factor Authentication (MFA).</h3>
                <p>Transactions are protected by MFA, which includes password, biometric, email, phone, and authenticator verification.</p>
              </div>
            </div>
            <div className="row align-items-center justify-content-center mb-5">
              <div className="col-lg-6">
                <h3>We provide 24/7 live customer support.</h3>
                <p>It’s our priority to help you make the most of your Crypto.com experience.</p>
              </div>
              <div className="col-lg-2">
                <img src={Time} alt="" />
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </div>
  );
};

export default Security;
