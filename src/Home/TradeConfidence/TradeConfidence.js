import React from "react";
import LapiTade from '../../assests/lapi-trade.png';

const TradeConfidence = () => {

return (
    <section className="tradeconfidence">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                    <h3 className="color-light-blue">CRYPTOMAINFRAME.EXCHANGE</h3>
                    <h2>Trade with confidence on the world’s fastest and most secure crypto exchange</h2>
                    <p className="mb-5">Powered by Crypto Mainframe, with Deep Liquidity, Low Fees and Best Execution Prices</p>
                    <a href="#" className="btn-blue border-radius">Start Trading</a>
                </div>
            </div>  
            <div className="row justify-content-center mt-5">
                <div className="col-lg-12 text-center">
                   <img src={LapiTade} alt="" />
                </div>
            </div> 
            
        </div>
        <div className="trade-q-title">
            <div className="container">
            <div className="row justify-space-between mt-5">
                <div className="col-lg-4">
                   <h2>Liquidity</h2>
                   <p>Deep order book liquidity in allmarket conditions</p>
                </div>
                <div className="col-lg-4">
                   <h2>Speed</h2>
                   <p>2.7m TPS matching engine 50 micro second core latency</p>
                </div>
                <div className="col-lg-4">
                   <h2>Security</h2>
                   <p>ISO/IEC 27001:2013 <br />
                        ISO/IEC 27701:2019 <br />
                        PCI:DSS v3.2.1, Level 1 <br />
                        compliance <br />
                        Cryptocurrency Security Standard
                        (CCSS)
                    </p>
                </div>
            </div>  
            </div>    
        </div>
    </section>
);
};
export default TradeConfidence;

