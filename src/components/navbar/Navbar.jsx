import { React, useState } from 'react'
import { testLogo, logo, close, menu } from "../../assets/"
import { navLinks } from '../../constants'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
  
    return (
        <div className='gradient-bg'>
          <nav>
            <img src={logo} alt="" />
            <li>
              <ul>
                
              </ul>
            </li>
          </nav>
        </div>
    )
  }

export default Navbar