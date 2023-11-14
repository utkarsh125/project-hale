import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='hale__header'>
        <div>
          <div className='hale__header-section'>
            <h1 className='font_heading-main'>World's Best Advanced <br className=''/> Cross-Border Care</h1>
            <p>Find The Best Hospitals and Doctors Across the World.</p>
          </div>
        </div>

        <div>
          <form action="">
            <div className='mb-6 text-sm font-medium text-gray-400'>
              <label>Your Email</label>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Header