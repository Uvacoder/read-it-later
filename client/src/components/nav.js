import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => (
  <header>
    <Link to="/">
      <p>LOGO</p>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/archives">
            Archives
          </Link>
        </li>
        <li>
          <Link to="/re-reads">
            Re-Reads
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Nav
