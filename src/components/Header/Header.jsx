import { search, doctor, patient } from '../../assets'

const Header = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center bg-dark-bg-green'>
        <div>
          <div className='flex flex-col justify-center items-center mx-auto'>
            <h1 className='text-5xl text-center font-domine text-[#FFFFFF] font-semibold'>World's Best Advanced <br className='sm:block hidden'/> Cross-Border Care</h1>
            <p className='pt-3 font-outfit text-center text-[#FFFFFF] text-xl'>Find The Best Hospitals <br className='lg:hidden'/> and Doctors Across the World.</p>
          </div>

          <div className='flex lg:flex-row w-[100%] font-outfit p-2 my-5 sm:flex md:flex sm:flex-col md:flex-col sm:justify-center sm:my-1.5 sm:items-center'>
            {/* ADD SEARCH ICON */}
            <input type="email" placeholder='Enter your email to get started' className='bg-[#ffffff62] "bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-full focus:border-green-200 block w-full ps-5 p-2.5'/>
            <button type='button' className='overflow-hidden w-1/4 px-2 font-normal sm:px-2 sm:py-2 md:py-3 md:px-4 ml-4 justify-center shadow-2xl rounded-full flex bg-[#FFFFFF] text-dark-bg-green sm:my-2.5 sm:w-[60%]'>Explore Premium Care</button>
          </div>

          <div className='hidden lg:w-[1050px] lg:h-[640pz] lg:flex '>
            <img src={doctor} alt="" className='mt-8 pt-10 z-[1]'/>
            {/* Overlapping image */}
            <img src={patient} alt="" className='w-1/5 rounded-lg right-36 top-28 z-[2] absolute'/>
          </div>
        </div>        
    </div>
  )
}

export default Header