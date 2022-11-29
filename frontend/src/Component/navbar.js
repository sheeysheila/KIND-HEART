import React ,{Component}from "react";
import './navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <div>
                <div className='navbar'>
                    <div className='logo'>
                        <img src= {process.env.PUBLIC_URL+"images/logo.png"} alt="logo" width="80px" height="80px"/>
                        <h4>Kind Heart Charity<br></br>
                        <span>NON-PROFIT ORGANIZATION </span></h4>
                    </div>
                    <div className="navlist">
                        <ul>
                            <li><a href=""><span>Home</span></a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Causes</a></li>
                            <li><a href="">Volunteer</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Contact</a></li>
                            <button><a href="">Donate</a></button>
                        </ul>
                    </div>
                    

                </div>
            </div>
        )
    }
}