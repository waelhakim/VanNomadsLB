import React from 'react';
import {Link , NavLink} from 'react-router';
import Class from './header.module.css'
export default function Header(){
    const activeStyle = {
        fontWeight:"bold",
        textDecoration:"underline",
        color:"#161616"
    }
    return(
        <header className={Class.headerContainer}>
            <h1 style={{}}><Link to="/"  className={`${Class.links}`}>#VanNomads<sup style={{fontSize:'7px'}}>LB</sup></Link></h1>
            <div className={`${Class.linksField}`}>
                <NavLink to="/about" style={({isActive})=> isActive ? activeStyle: null} className={`${Class.links}`}>About</NavLink>
                <NavLink to="/vans"  style={({isActive})=> isActive ? activeStyle: null}   className={`${Class.links}`}>Vans </NavLink>
            </div>
        </header>
    )
}