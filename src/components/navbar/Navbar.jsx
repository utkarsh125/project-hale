import { useState } from 'react'
import './navbar.css'
import { logo } from '../../assets';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className='hale__navbar'>
      <div className='hale__navbar-links'>
        <div className='hale__navbar-links_logo'>
          <img src={logo} />
        </div>

        <div className='hale__navbar-links_container'>
          <p><a href="#home">Second Opinion</a></p>
          <p><a href="#home">Medical Travel</a></p>
          <p><a href="#home">Clinical Trials</a></p>
          <p><a href="#home">Membership Goal</a></p>
          <p><a href="#home">Testimonials</a></p>
        </div>
      </div>

      <div className='hale__navbar-sign'>
        <p>Login</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className='hale__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      </div>

      {toggleMenu && (
        <div className='hale__navbar-menu_container scale-up-center'>
          <div className='hale__navbar-menu_container-links'>
            <p className='pt-2'><a href="#home">Second Opinion</a></p>
            <p className='pt-2'><a href="#home">Medical Travel</a></p>
            <p className='pt-2'><a href="#home">Clinical Trials</a></p>
            <p className='pt-2'><a href="#home">Membership Goal</a></p>
            <p className='pt-2'><a href="#home">Testimonials</a></p>
          </div>
          <div className="hale__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar