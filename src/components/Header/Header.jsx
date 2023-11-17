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
            <input type="email" placeholder={`Enter your email to get started`} className=' shadow-2xl'/>
            <button type='button' className='overflow-hidden w-1/4 px-2 md:text-xl md:py-3 md:px-4 ml-4 justify-center shadow-2xl'>Explore Premium Care</button>
          </div>

          <div className='hidden relative lg:w-[1050px] lg:h-[640px] lg:flex '>
            <img src={doctor} alt="" className='mt-8 pt-10 z-[1]'/>
            {/* Overlapping image */}
            <img src={patient} alt="" className='w-1/5 rounded-lg right-36 top-28 z-[2] absolute'/>
          </div>
        </div>        
    </div>
  )
}

export default Header