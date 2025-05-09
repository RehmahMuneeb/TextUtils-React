import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label "  htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes ={title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  //is required isi liye likha h k title required h agr required na hoa tu phir error aye ga isi liye hm ne neehe default props set kia h k agr hm na b define krein title ko app.js mn tu use koi na koi title mil jaye
}
Navbar.defaultProps = {
  title: 'Textutils',
  aboutText:'About'
};