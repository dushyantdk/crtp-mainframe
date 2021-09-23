import React from "react";
import MobileApp from '../../assests/mobile-app.png';

const NewTraders = () => {

return (
    <section className="newtraders">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={MobileApp} alt="" />
                </div>
                <div className="col-lg-6">
                    <h3 className="color-light-blue">CRYPTOMAINFRAME</h3>
                    <h2>For New Traders</h2>
                    <ul>
                        <li>Build Your Crypto Portfolio With Ease</li>
                        <li>Instant Buy and Sell</li>
                        <li>Instant Buy and Sell</li>
                        <li>Dedicated Customer Support</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);
};
export default NewTraders;

