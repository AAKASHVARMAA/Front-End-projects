import { useState } from "react"
import{Link} from "react-router-dom"
import Logo from "../assets/kite-logo.svg"
export default function Menu()
{

    const[selectedMenu, setSelectedMenu]=useState(0)
    const[isProfileDropdownOpen,setisProfileDropdownOpen]=useState(false)

    const handleMenuclick=(index)=>{
        setSelectedMenu(index)
    }
    const  handleProfileclick=(index)=>
    {
        setisProfileDropdownOpen(!isProfileDropdownOpen)
    }

    const menuClass="menu"
    const activemenuClass="menu selected"

    return(
    <div className="menu-container">
        <img src={Logo} alt="log" style={{width:"25px"}}/>
            <div className="menus">
                <ul>
                <li>
                    <Link to="/" style={{textDecoration:"none"}} onClick={()=>handleMenuclick(0)}>
                        <p className={selectedMenu===0? activemenuClass:menuClass}>Dashboard</p>
                     </Link>
                </li>
                <li>
                    <Link to="/Orders" style={{textDecoration:"none"}} onClick={()=>handleMenuclick(1)}>
                        <p className={selectedMenu===1? activemenuClass:menuClass}>Orders</p>
                     </Link>
                </li>
                <li>
                <Link to="/Holdings" style={{textDecoration:"none"}} onClick={()=>handleMenuclick(2)}>
                        <p className={selectedMenu===2? activemenuClass:menuClass}>Holdings</p>
                     </Link>
                </li>
                <li>
                    <Link to="/Positions" style={{textDecoration:"none"}} onClick={()=>handleMenuclick(3)}>
                        <p className={selectedMenu===3? activemenuClass:menuClass}>Positions</p>
                     </Link>
                </li>
                <li>
                    <Link to="/Funds" style={{textDecoration:"none"}} onClick={()=>handleMenuclick(4)}>
                        <p className={selectedMenu===4? activemenuClass:menuClass}>Funds</p>
                     </Link>
                    
                </li>
                <li>
                    <Link to="/Apps" style={{textDecoration:"none"}} onClick={()=>handleMenuclick(5)}>
                        <p className={selectedMenu===5? activemenuClass:menuClass}>Apps</p>
                     </Link>
                </li>
            </ul>
                <hr />
                
                <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                </div>
            </div>
     
    )
}