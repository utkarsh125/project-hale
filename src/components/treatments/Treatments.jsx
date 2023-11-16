import React from 'react'
import Row1 from './specialities/Row1'

const Treatments = () => {
  return (
    <section className='bg-[#FFFFFF] pt-[8rem] m-10 pb-[8rem] mt-[4rem]'>
        <div className='ml-[8rem] mr-[8rem] flex justify-start'>
            <h1 className='text-[#28574E] ml-[1.5rem] mr-[1.5rem] font-domine text-4xl'>Explore Treatments <br className='sm:block hidden'/>accoss specialities</h1>
        </div>
        <div className='ml-[8rem] mr-[8rem] flex justify-start mt-[6rem]'>
            <Row1 />
        </div>
    </section>
  )
}

export default Treatments