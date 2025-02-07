import logo from "../assets/logo.svg"
import "./footer.css"
export default function Footer()
{
    return (
        <div   style={{backgroundColor:"#F5F5F5"}}>
            <div className="container mt-5 p-4 ">
                <div className="row ">
                    <div className="col text-muted " style={{fontSize:"13px"}}>
                        <img src={logo} style={{width:"50%"}}/>
                            <br></br> <br></br> 
                        <p>&copy; 2010 - 2024, Zerodha Broking Ltd.<br></br>                  
                            All rights reserved.
                        </p>
                    </div>
                
                    <div className="col pr-5 ">
                        <h4 className="text-muted">Company</h4>
                        <a href="#"  className="text-muted"style={{textDecoration:"none",fontWeight:500}}>About</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Products</a><br></br>
                        <a href="# " className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Pricing</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}> Referral programme</a> <br></br>
                        <a href="#"  className="text-muted"style={{textDecoration:"none",fontWeight:500}}>Careers</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Zerodha.tech</a> <br></br>
                        <a href="#" className="text-muted"style={{textDecoration:"none",fontWeight:500}}  >Press & media</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Zerodha Cares (CSR)</a> <br></br>   
                    </div>
                    
                    <div className="col ">
                        <h4 className="text-muted">Support</h4>
                        <a href="#"  className="text-muted"style={{textDecoration:"none",fontWeight:500}}>Contact Us</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Support Portal</a><br></br>
                        <a href="# " className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Z-connect blog</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>List of Changes</a> <br></br>
                        <a href="#"  className="text-muted"style={{textDecoration:"none",fontWeight:500}}>Downloads and resources</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Videos</a> <br></br>
                        <a href="#" className="text-muted"style={{textDecoration:"none",fontWeight:500}}>Market Overview</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>How to file a complient(CSR)</a> <br></br>   
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Status of your complients</a> <br></br>   
                    </div>
                    <div className="col  ">
                        <h4 className="text-muted">Account</h4>
                        <a href="#"  className="text-muted"style={{textDecoration:"none",fontWeight:500}}>Open an Account</a><br></br>
                        <a href="#" className="text-muted" style={{textDecoration:"none",fontWeight:500}}>Fund Transfer</a><br></br>
                    </div>
                    <div className="row mt-5">
                        <p className="footer">
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.
                        – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX:
                        46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., 
                        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. 
                        For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. \
                        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>
                        <p className="footer">
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details 
                        for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
                        Speedy redressal of the grievances
                        </p>
                        <p className="footer">
                        Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system 
                        w.e.f September 01, 2020. 2 Update your e-mail and phone number with your stock broker / depository 
                        and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3
                        Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
    )
}