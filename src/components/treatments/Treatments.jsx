import React from 'react'
import Row1 from './specialities/Row1'
import Row2 from './specialities/Row2'

const Treatments = () => {
  return (
    <section className='bg-[#FFFFFF] pt-[8rem] pb-[8rem] mt-[4rem]'>
        <div className='ml-72 flex justify-start'>
            <h1 className='text-[#28574E] font-domine text-4xl'>Explore Treatments <br className='sm:block hidden'/>accoss specialities</h1>
        </div>
        <div className='ml-72 mr-72 flex justify-start mt-[6rem]'>
            <Row1 />
        </div>
        <div className='ml-72 mr-72 flex justify-start'>
          <Row2 />
        </div>
    </section>
  )
}

export default Treatments