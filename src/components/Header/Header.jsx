import React from 'react'
import './header.css'
import { search, doctor, patient } from '../../assets'

const Header = () => {
  return (
    <div className='hale__header'>
        <div>
          <div className='hale__header-section'>
            <h1 className='font_heading-main text-5xl'>World's Best Advanced <br className=''/> Cross-Border Care</h1>
            <p className='pt-3'>Find The Best Hospitals and Doctors Across the World.</p>
          </div>

          <div className='hale__header-section__input p-2'>
            {/* ADD SEARCH ICON */}
            <input type="email" placeholder={`enter your email to get started`} className=' shadow-2xl'/>
            <button type='button' className='text-xl p-3 ml-4 flex flex-center justify-center shadow-2xl'>Explore Premium Care</button>
          </div>

          <div className='hale__header-image'>
            <img src={doctor} alt="" className='mt-8 pt-10 z-[1]'/>
            {/* Overlapping image */}
            {/* <img src={patient} alt="" className='z-[0] absolute'/> */}
          </div>
        </div>        
    </div>
  )
}

export default Header