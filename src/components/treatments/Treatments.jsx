import Row1 from './specialities/Row1'
import Row2 from './specialities/Row2'

const Treatments = () => {
  return (
    <section className='bg-[#FFFFFF] pt-[8rem] pb-[8rem] mt-[4rem] flex flex-col'>
        <div className='flex'>
            <h1 className='text-[#28574E] mx-auto font-domine text-4xl font-bold text-center'>Explore Treatments <br className='sm:block hidden'/>accoss specialities</h1>
        </div>
        <div className='flex lg:flex-col justify-center mt-[6rem]'>
          <Row1 />
          <Row2 />
        </div>
    </section>
  )
}

export default Treatments