export default function Rightsection({productName,productDescription,LearnMore,image})
{
    return(
        <div>
            <div className="container mt-5">
                <div className="row ">
                    <div className="col-4 "style={{paddingTop:"120px"}}>
                        <h1>{productName}</h1>
                        <p style={{lineHeight:"2", fontSize:"18px"}}>{productDescription}</p>
                        <a href={LearnMore} style={{textDecoration:"none"}}>LearnMore <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: "8px" }}></i></a>
                    </div>
                   <div className="col-2"></div>
                    <div className="col-5">
                        <img src={image} alt="image" style={{width:"600px", padding:"30px", }} />
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}