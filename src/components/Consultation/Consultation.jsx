import React from 'react'
import { formdoc } from '../../assets'

const Consultation = () => {
  return (
    <div className='bg-gray-100 flex justify-center items-center pt-[8rem] pb-[8rem]'>
        <div className='w-[1237px] h-[884px]'>
            <div className='bg-[#E1E1D6] flex flex-row rounded-[20px]' >
                <div className='flex flex-col mx-6 my-6'>
                    <h1 className='font-domine text-[#28574E] font-semibold text-4xl'>Book A Free Consultation</h1>
                    {/* FORM */}
                    
                </div>

                <div className='overflow-hidden rounded-br-[20px]'>
                    <img src={formdoc} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation