import Pricing from "../../assets/pricing1.svg"
import Princing2 from "../../assets/pricing3.svg"

export default function Hero()
{
    return(
        <div className="container ">
            <div className="row text-center ">
                <h1>Charges</h1>
                <h4 className="text-muted">List of all charges and taxes</h4>
            </div>
            <div className="row   mt-5">
                <div className="col-4 p-3 text-center">
                    <img src={Pricing} style={{width:"75%"}} />
                    <h5>Free equity delivery</h5>
                    <p className="text-muted mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>

                </div>
                <div className="col-4 p-3 text-center">
                    <img src={Princing2} style={{width:"75%"}} />
                    <h5>Free equity delivery</h5>
                    <p className="text-muted mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, 
                        currency, and commodity trades. 
                        Flat ₹20 on all option trades.
                    </p>

                </div>
                <div className="col-4 p-3 text-center">
                    <img src={Pricing} style={{width:"75%"}} />
                    <h5>Free equity delivery</h5>
                    <p className="text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>
            </div>

        </div>
    )
}