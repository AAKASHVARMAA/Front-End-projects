import education from "../../assets/education.svg"
export default function Education(){
    return (
        <div>
           <div className="container mt-5">
                <div className="row ">
                        <div className="col-6 ">
                            <img  src={education}></img>
                         </div> 
                         
                         
                         <div className="col-6 p-5 ">
                            <h2  className="mb-4">Free and open market education</h2>
                            <p className="mb-2 text-muted">Varsity, the largest online stock market education book in the world
                             covering everything from the basics to advanced trading.</p>
                            <p  className="mb-4"><a href=""  style={{textDecoration:"none" }}>Varsity  <i className="fa-solid fa-arrow-right-long"
                                    style={{ marginLeft: "8px" }}></i>
                                </a></p>
                            <p className="mb-2 text-muted">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                                <a href="" style={{textDecoration:"none", }}>Trading Q&A <i className="fa-solid fa-arrow-right-long"
                                    style={{ marginLeft: "8px" }}></i> 
                                 </a>
                         </div> 
                </div>
            

           </div>
        </div>
    )
}