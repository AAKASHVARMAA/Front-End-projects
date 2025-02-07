import award from "../../assets/award.svg"
import logos from  "../../assets/pressLogos.png"
export default function Awards() {
    return (
        <div className="mb-5">
            <div className="container  ">
                <div className="row ">
                    <img className="col-6 p-4" src={award} alt="img" />  
                    <div className="col-6 p-4  mb-4">
                        <h2>Largest stock broker in India</h2>
                        <p>2+Million clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                        <div className="row p-4 text-center mt-5 mb-5" style={{ color: "#4c5563" }}>
                            <ul className="col-6">
                                <li>Future and options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                            <ul className="col-6">
                                <li>Stacks and IPO's</li>
                                <li>Direct mutual funds</li>
                                <li>Bond's and Govt secutities</li>
                            </ul>
                        </div>
                        <img className="mt-5" style={{width:"100%"}} src={logos} alt="img"></img>
                        
                    </div>            
                </div>
            </div>
        </div>
    );
}
