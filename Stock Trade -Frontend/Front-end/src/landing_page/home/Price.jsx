import Pricing1 from "../../assets/Pricing1.svg"
import Pricing2 from "../../assets/Pricing2.svg"
import Pricing3 from "../../assets/Pricing3.svg"
export default function Price()
{
    return(
        <div>
            <div className="container mb-5 ">
                <div className="row">
                    <div className="col-5">
                        <h1 className="mb-4">Unbeatable pricing</h1>
                        <p>
                            We pioneered the concept of discount broking and price<br></br> transparency in India.
                            Flat fees and no hidden charges.
                        </p>
                        <a href=" " style={{textDecoration:"none"}}>See Pricing <i className="fa-solid fa-arrow-right-long"
                            style={{ marginLeft: "8px" }}></i>
                         </a>
                    </div>
                    <div className="col-7  mt-5  d-flex">  
                           <div className="d-flex">
                                     <img  className="mx-2" style={{width:"45%"}} src={Pricing1} alt="img" ></img>
                                     <p  className="text-muted"style={{fontSize:"10px",marginTop: "30px" }}>Free account<br></br>opening</p>           
                           </div>
                           <div className="d-flex">
                                <img  className="mx-2" style={{width:"45%"}}  src={Pricing2} alt="img"></img>
                                <p  className="text-muted"style={{fontSize:"10px",marginTop: "30px" }}>Free equity delivery <br></br>and direct mutual funds</p> 
                           </div>
                           <div className="d-flex">
                                <img  className="mx-3"  style={{width:"45%"}} src={Pricing3} alt="img"></img>
                                <p className="text-muted " style={{fontSize:"10px",marginTop: "30px" }}>Intraday and<br></br>F&O</p>
                           </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}