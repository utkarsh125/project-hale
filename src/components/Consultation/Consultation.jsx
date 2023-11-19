import React from 'react'
import { formdoc } from '../../assets'

const Consultation = () => {
  return (
    <div className='bg-gray-100 flex justify-center items-center mt-[4rem] pt-[8rem] pb-[8rem]'>
        <div className='w-[1237px] h-[884px]'>
            <div className='bg-[#E1E1D6] flex flex-row' >
                <div className='flex flex-col'>
                    <h1 className='font-domine text-[#28574E] font-semibold text-4xl'>Book A Free Consultation</h1>
                    {/* FORM */}
                    
                </div>

                <div className=''>
                    <img src={formdoc} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation