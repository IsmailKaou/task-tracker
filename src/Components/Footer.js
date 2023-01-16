import React from 'react'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Footer = () => {
    const location = useLocation();
  return (
    <footer>
        <p>Copyright IsmailKaou &copy; 2022</p>
        {location.pathname !=='/' && <Link to="/">Go Back</Link>}
        {location.pathname ==='/' && <Link to="/About">About</Link>}
    </footer>
  )
}

export default Footer