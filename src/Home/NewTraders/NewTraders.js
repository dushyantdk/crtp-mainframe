import React from "react";
import MobileApp from '../../assests/mobile-app.png';
import Fade from 'react-reveal/Fade';

const NewTraders = () => {

return (
    <section className="newtraders">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <Fade bottom>
                        <img src={MobileApp} alt="" />
                    </Fade>
                </div>
                <div className="col-lg-6">
                    <Fade bottom>
                        <h3 className="color-light-blue">CRYPTOMAINFRAME</h3>
                    </Fade>
                    <Fade bottom>
                        <h2>For New Traders</h2>
                    </Fade>
                    <Fade bottom>
                        <ul>
                            <li>Build Your Crypto Portfolio With Ease</li>
                            <li>Instant Buy and Sell</li>
                            <li>over 100+ coins available</li>
                            <li>Dedicated Customer Support</li>
                        </ul>
                    </Fade>
                </div>
            </div>
        </div>
    </section>
);
};
export default NewTraders;

