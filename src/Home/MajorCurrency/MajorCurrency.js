import React from "react";
import Icon1 from '../../assests/coin-1.png';
import Icon2 from '../../assests/coin-2.png';
import Icon3 from '../../assests/coin-3.png';
import Icon4 from '../../assests/coin-4.png';
import Icon5 from '../../assests/coin-5.png';
import Fade from 'react-reveal/Fade';

const MajorCurrency = () => {

return (
    <section className="major-currency">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <Fade bottom><h3 className="color-light-blue">CURRENCIES</h3></Fade>
                    <Fade bottom><h2>OUR MAJOR CURRENCIES</h2></Fade>
                    <Fade bottom><p>Buy and sell any supported currencies you want from</p></Fade>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                    <Fade bottom>
                        <ul>
                            <li><img src={Icon1} alt="" /></li>
                            <li><img src={Icon2} alt="" /></li>
                            <li><img src={Icon3} alt="" /></li>
                            <li><img src={Icon4} alt="" /></li>
                            <li><img src={Icon5} alt="" /></li>
                        </ul>
                    </Fade>
                </div>
            </div>
        </div>
    </section>
);
};
export default MajorCurrency;

