import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import "./nav.css"
export default function Navabar()
{
    return(
        <div>
            <div className="container mb-5 ">
                <nav className="navbar  navbar-expand bg-white fixed-top p-3 border-bottom mb-5">
                        <div className="container">
                                <Link  className="navbar-brand" to="/">
                                 <img src={logo} style={{width:"25%"}}/></Link>  
                                           
                               
                                        <ul className="navbar-nav ">
                                            <li className="nav-item " >
                                                <Link className="nav-link" style={{marginRight:"25px"}} aria-current="page" to="/signup">SignUp</Link>
                                            </li>
                                            <li className="nav-item " >
                                                <Link className="nav-link" style={{marginRight:"25px"}} aria-current="page" to="/Login">Login</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about"  style={{marginRight:"25px"}}>About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/products"  style={{marginRight:"25px"}}>Products</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/pricing"  style={{marginRight:"25px"}}>Pricing</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link " to="/support"  style={{marginRight:"100px"}}>Support</Link>
                                            </li>
                                        </ul>
                               
                        </div>         
                </nav>
             </div>
        </div>
    )
}