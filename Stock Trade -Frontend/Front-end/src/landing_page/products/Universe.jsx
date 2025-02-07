import Zerodhafund from "../../assets/zerodhafundhouse.png"
import Sensibull from "../../assets/sensibull-logo.svg"
import Tijori from "../../assets/tijori.svg"
import Streak from "../../assets/streak-logo.png"
import Smallcase from "../../assets/smallcase-logo.png"
import Ditto from "../../assets/ditto-logo.png"

export default function Universe()
{
    return(
        <div>
           <div className="container">
                <div className="row text-center">
                    <h2>The Zerodha Universe</h2>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                    <div className="col-4  p-5">
                        <img src={Zerodhafund} alt="img" style={{width:"180px"}}/>
                        <p className="small text-muted pt-3">Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4  p-5">
                        <img src={Sensibull} alt="img" style={{width:"180px"}}/>
                        <p className="small text-muted pt-3">Options trading platform that lets you
                                create strategies, analyze positions, and examine
                                 data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col-4  p-4">
                        <img src={Tijori} alt="img" style={{width:"180px"}}/>
                        <p className="small text-muted pt-3">Investment research platform
                                        that offers detailed insights on stocks,
                                        sectors, supply chains, and more.
                       </p>
                    </div>
                </div>
                <div className="row text-center mt-2">
                    <div className="col-4  p-4">
                            <img src={Streak} alt="img" style={{width:"180px"}}/>
                            <p className="small text-muted pt-3">Systametic trading platform allows you to create and
                                backtest strategies without coding
                            </p>
                    </div>
                    <div className="col-4  p-4">
                            <img src={Smallcase} alt="img" style={{width:"180px"}}/>
                            <p className="small text-muted pt-3">Thematic investing platform
                                                    that helps you invest in diversified
                                                    baskets of stocks on ETFs.
                            </p>
                    </div>
                    <div className="col-4  p-2">
                            <img src={Ditto} alt="img" style={{width:"180px"}}/>
                            <p className="small text-muted pt-3">
                                            Personalized advice on life
                                            and health insurance. No spam
                                            and no mis-selling.                
                            </p>
                    </div>
                </div>
                <div className="row text -center mt-4 mb-5">
                    <button type="button" className="btn btn-lg btn-primary" style={{width:"350px",margin:"auto"}}>Sign up for Free</button>
                </div>
                <br></br>
                
                

           </div>
        </div>
    )
}