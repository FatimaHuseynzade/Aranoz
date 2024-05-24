import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
  <nav className='navbar'>
    <div className='aranoz'>
      <h1>Aranoz.</h1>
    </div>
    <ul>
     <li><a href="#">Home</a></li>
     <li><a href="#">Pages</a></li>
     <li><a href="#">Shop</a></li>
     <li><a href="#">Home</a></li>
     <li><a href="#">Blog</a></li>
     <li><a href="#">Contact</a></li>
  <li className='bmt'><Link to='/admin'>Admin</Link></li>
  <li className='bmt'>Add</li>


    </ul>
     </nav>
  )
}

export default Navbar