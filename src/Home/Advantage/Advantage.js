import React from "react";
import AdvantageLapi from '../../assests/advantage-lapi.png';
import cmfcoin from '../../assests/cmf-icon.png';
import Fade from 'react-reveal/Fade';

const Advantage = () => {

return (
    <section className="advantage">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-white">
                    <Fade bottom>
                        <h3 className="color-light-blue">CRYPTOMAINFRAME</h3>
                    </Fade>
                    <Fade bottom>
                        <h2>For Advanced Traders</h2>
                    </Fade>
                    <Fade bottom>
                        <ul>
                            <li>Trade With Inexhaustible Liquidity</li>
                            <li>Limitless Trading</li>
                            <li>Ultra-low Spreads</li>
                            <li>Single Point Access</li>
                        </ul>
                    </Fade>
                </div>
                <div className="col-lg-6">
                    <Fade bottom>
                        <img src={AdvantageLapi} alt="" />
                    </Fade>
                </div>
            </div>
            <div className="row justify-content-center pt-150">
                <div className="col-lg-6 text-white text-center">
                    <Fade bottom>
                        <h3 className="color-light-blue">CRYPTOMAINFRAME.EXCHANGE</h3>
                    </Fade>
                    <Fade bottom>
                        <h2>Cryptocurrency in Every Wallet™</h2>
                    </Fade>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="col-lg-12 text-center">
                    <Fade bottom>
                        <img src={cmfcoin} alt="" />
                    </Fade>
                </div>
            </div>
            <div className="row justify-space-between text-white mt-5">
                <div className="col-lg-3 text-center">
                    <Fade bottom>
                        <p className="mb-0">Founded in</p>
                        <h2 className="color-light-blue">2016</h2>
                    </Fade>
                </div>
                <div className="col-lg-3 text-center">
                    <Fade bottom>
                        <p className="mb-0">Team of</p>
                        <h2 className="color-light-blue">2016</h2>
                    </Fade>
                </div>
                <div className="col-lg-3 text-center">
                    <Fade bottom>
                        <p className="mb-0">Users</p>
                        <h2 className="color-light-blue">2016</h2>
                    </Fade>
                </div>
                <div className="col-lg-3 text-center">
                    <Fade bottom>
                        <p className="mb-0">Insurance Coverage(USD)</p>
                        <h2 className="color-light-blue">360M</h2>
                    </Fade>
                </div>
            </div>
        </div>
    </section>
);
};
export default Advantage;

