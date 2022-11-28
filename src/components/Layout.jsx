import {Outlet, NavLink} from "react-router-dom";
import logo from "../images/logo.png";
const Layout = () =>{
    return <div >
        <nav className="bg-dark text-white">
         <div className="container">

         <div className="">
         <img src={logo}alt="Bootstrap" width="" height="50"/>
           
         </div>

         <ul className="navbar pull-xs-right">
            <ul > <NavLink  className="btn btn-light" to="/" activeClassName="active">Home</NavLink></ul>
            <ul ><NavLink className="btn btn-light" to="/about">About Us</NavLink></ul>
            
         </ul>

         </div>
        </nav>
        <Outlet/>
    </div>
}

export default Layout;