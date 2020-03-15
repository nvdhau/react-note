import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => (

  // cannot use <a> tag, use <Link> component from React Router 
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/article-list">Articles</Link></li>
    </ul>
  </nav>

);

export default NavBar