import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
    <Link to='/'><b className='navbar-control' >Home</b></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to='/about'><b className='navbar-control'>About</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to='/skills'><b className='navbar-control'>Skills</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to='/works'><b className='navbar-control'>Works</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to='/contact'><b className='navbar-control'>Contact</b></Link>

    </div>
  )
}

export default Navbar