import React from 'react'
import { Link } from 'react-router-dom';
import{styles} from './Navbar.module.css'
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand text-white fw-bold" to="home">Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {props.userData?<><li className="nav-item">
          <Link className="nav-link text-white " to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="tvshow">Tvshow</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="people">People</Link>
        </li></>:''}
        
      
      </ul>
     
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
{props.userData?<> <li className="nav-item">
          <span className="nav-link text-white  " style={{cursor:'pointer'}} onClick={props.logOut}>Logout</span>
        </li></>:<> <li className="nav-item">
          <Link className="nav-link text-white " to="register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="login">Login</Link>
        </li></>}
    
       
        
     </ul>
    </div>
  </div>
</nav>
    
    
    
    
    
    
    </>
  )
}
