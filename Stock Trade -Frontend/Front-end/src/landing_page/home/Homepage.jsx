import Education from "./Education";
import Hero from "./Hero";

import Stats from "./Stats";
import Openaccount from "../OpenAccount"

import Price from "./Price";
import Awards from "./Awards";


export default function Homepage()
{
    return(
        <div>
           
            <Hero/>
            <Awards/>
            <Stats/>
            <Price/>
            <Education/>
            <Openaccount/>
            
        </div>
    )
}