import homeHero from '../../assets/homeHero.png'

 export default function Hero()
{
    return(
        <div>
            <div className="container mb-5  mt-5" >
                <div className="row p-5 text-center ">
                    <img src={homeHero}alt="img" className=" mt-4 mb-5 mx-auto " style={{width:"80%"}}></img>
                    <h1  className="mt-4">Invest in everything</h1>
                    <p style={{color:"#4c5563"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="btn btn-primary m-auto p-2" style={{width:"25%" }} type="button">SignUp</button>   
                </div>
            </div>
        </div>
    )
    
}