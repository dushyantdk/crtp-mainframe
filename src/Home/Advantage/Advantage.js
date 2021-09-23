import React from "react";
import AdvantageLapi from '../../assests/advantage-lapi.png';
import cmfcoin from '../../assests/cmf-icon.png';

const Advantage = () => {

return (
    <section className="advantage">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-white">
                    <h3 className="color-light-blue">CRYPTOMAINFRAME</h3>
                    <h2>For Advanced Traders</h2>
                    <ul>
                        <li>Trade With Inexhaustible Liquidity</li>
                        <li>Limitless Trading</li>
                        <li>Ultra-low Spreads</li>
                        <li>Single Point Access</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img src={AdvantageLapi} alt="" />
                </div>
            </div>
            <div className="row justify-content-center pt-150">
                <div className="col-lg-6 text-white text-center">
                    <h3 className="color-light-blue">CRYPTOMAINFRAME.EXCHANGE</h3>
                    <h2>Cryptocurrency in Every Wallet™</h2>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="col-lg-12 text-center">
                    <img src={cmfcoin} alt="" />
                </div>
            </div>
            <div className="row justify-space-between text-white mt-5">
                <div className="col-lg-3 text-center">
                    <p className="mb-0">Founded in</p>
                    <h2 className="color-light-blue">2016</h2>
                </div>
                <div className="col-lg-3 text-center">
                    <p className="mb-0">Team of</p>
                    <h2 className="color-light-blue">2016</h2>
                </div>
                <div className="col-lg-3 text-center">
                    <p className="mb-0">Users</p>
                    <h2 className="color-light-blue">2016</h2>
                </div>
                <div className="col-lg-3 text-center">
                    <p className="mb-0">Insurance Coverage(USD)</p>
                    <h2 className="color-light-blue">360M</h2>
                </div>
            </div>
        </div>
    </section>
);
};
export default Advantage;

