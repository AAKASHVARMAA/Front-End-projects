import googleplay from "../../assets/google-play-badge.svg"
import appstore from "../../assets/appstore-badge.svg"

export default function Leftsection({img,productName,productDescription,TryDemo,LearnMore,Googleplay, Appstore})
{
    return(
        <div>
           <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={img} alt="Kite"/>
                </div>
                <div className="col-2"></div>
                <div className="col-4">
                    <h2>{productName}</h2>
                    <p style={{lineHeight:"2", fontSize:"18px"}}>{productDescription}</p>
                    <div className="mb-4">
                        <a href={TryDemo} style={{textDecoration:"none"}}> Try Demo 
                             <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: "8px" }}></i>
                        </a>
                        <a href={LearnMore} style={{marginLeft:"15px", textDecoration:"none"}}>Learn More 
                            <i className="fa-solid fa-arrow-right-long"  style={{ marginLeft: "8px" }}></i>
                        </a>
                    </div>
                    <div>
                        <a href={Googleplay}><img src={googleplay}/></a>
                        <a href={Appstore} style={{marginLeft:"15px"}}><img src={appstore}/></a>
                    </div>
                </div>

            </div>
           </div>
        </div>
    )
}