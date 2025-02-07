 import Ecosystem from "../../assets/Ecosystem.png"
 export default function Stats()
{
    return(
       <div>
            <div className="Container  mb-5 ">
                <div className="row mt-5 ">
                    <div className="col-1 p-0"></div>
                        <div className="col-5 ">
                            <h1 className="fs-2 mt-5 mb-5">Trust with confidence</h1>
                            <h3 className="fs-5 "> Customer-first always</h3>
                            <p className="mb-4 text-muted">
                            That's why 1.5+ crore customers trust Zerodha with <br></br>
                            ₹4.5+ lakh crores of equity investments and contribute<br></br>
                            to 15% of daily retail exchange volumes in India.
                            </p>
                            <h3 className="fs-5 ">No spam or gimmicks</h3>
                            <p className="mb-4 text-muted">
                            No gimmicks, spam, "gamification", or annoying push  <br></br>notifications.
                            High quality apps that you use at your pace<br></br> the way you like.
                            </p>
                            <h3 className="fs-5 ">The Zerodha universe</h3>
                            <p className="mb-4 text-muted">
                            Not just an app, but a whole ecosystem. Our investments <br></br> 
                            in 30+ fintech startups offer you tailored services<br></br> 
                            specific to your needs
                            </p>
                            <h3 className="fs-5">Do better with money</h3>
                            <p className="mb-4 text-muted">
                            With initiatives like Nudge and Kill Switch, we don't just<br></br> 
                            facilitate transactions, but actively help you do better<br></br> 
                            with your money.
                            </p>
                        </div>
                    <div className="col-6 mt-4 ">
                        <img  style={{width:"93%"}}src={Ecosystem} alt="img"></img>
                        <div className="text-center">
                          
                                <a href=" " className="mx-5"style={{textDecorationLine:"none"}}>Explore our products   
                                     <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: "8px" }}></i>
                                </a>     
                                <a href=" "  className="mx-5"style={{textDecorationLine:"none"}}>Try kite demo 
                                    <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: "8px" }}></i>
                                </a>
                        </div>
                    </div>
                </div>

            </div>
       </div>
    )
}
