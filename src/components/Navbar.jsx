import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="navbar-brand" href="#">Navbar</a>
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
      </div>
    </div>
  </div>
</nav>


  )
}
