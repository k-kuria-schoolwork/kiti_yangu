import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navcontainer'>
        <div className='navheader'>
        <h2 className='navh2'>Kiti yangu <span className='homespan1'>FURNITURES</span></h2>
        </div>
        <div className='navbar'>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>  
                <li>
                    <Link>Furnitures</Link>
                </li>
                <li>
                    <Link>Blog</Link>
                </li>
                <li>
                    <Link className='carticonnav'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        Cart</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
