import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";
import Kite from "../../assets/products-kite.png"
import Console from "../../assets/products-console.png"
import Coin from "../../assets/products-coin.png"
import Kiteconnect from "../../assets/products-Kiteconnect.png"
import Varsity from "../../assets/Varsity-products.png"


export default function ProductsPage()
{
    return(
        <div  style={{paddingTop:"100px", }}>
            <Hero/>
            <Leftsection 
                img={Kite} 
                productName="Kite" 
                productDescription="Our ultra-fast flagship trading platform with streaming market data, 
                advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android 
                and iOS devices." 
                TryDemo=""
                LearnMore=""
                Googleplay=""
                Appstore=""
            />
            <Rightsection 
                productName="Console"
                productDescription="The central dashboard for your Zerodha account.
                 Gain insights into your trades and investments with in-depth reports and visualisations."
                LearnMore=""
                image={Console}
            />
            <Leftsection 
                img={Coin} 
                productName="Coin" 
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. 
                Enjoy the investment experience on your Android and iOS devices."
                TryDemo=""
                LearnMore=""
                Googleplay=""
                Appstore=""
            />
            <Rightsection 
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. 
                If you are a startup,  build your investment app and showcase it to our clientbase."
                LearnMore=""
                image={Kiteconnect}
            />
             <Leftsection 
                img={Varsity} 
                productName="Varsity mobile" 
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. 
                Content is broken down into bite-size cards to help you learn on the go."
                TryDemo=""
                LearnMore=""
                Googleplay=""
                Appstore=""
            />
            <h6 className="text-center m-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h6>
            <Universe/>
        </div>
        
    )
}