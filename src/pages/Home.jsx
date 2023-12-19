import React from 'react'
import heroImage01 from "../assets/images/patientnaman.jpeg"
import heroImage02 from "../assets/images/doctorG.jpeg"
import heroImage03 from "../assets/images/doctorK.jpeg"


const Home = () => {
  return (
    <>
    
    {/* ============== hero section ============  */}

    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

          {/*===============hero content ================*/}
          <div>
            <div className='lg:w-[570px]'> 
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>We are glad to help a roadside individua.</h1>
              <p className='text__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo repudiandae molestiae voluptate vero, at debitis aliquid illo fugit odio voluptatibus quisquam enim? Autem modi pariatur quae est ducimus! Quisquam, fugit.
              </p>

              <button className='btn'>Request an Appointment</button>
            </div>

            {/*============= hero content =============*/}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-[5px] lg:gap-[30px]'>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Years of Experience</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Clinic Locations</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Patient Satisfaction</p>
              </div>

            </div>
            </div>

            {/*============= hero counter =============*/}
            <div className='flex gap-[30px] justify-end'>
              <div className='relative mx-auto rounded-lg overflow-hidden'>
                <img className='w-full' src={heroImage01} alt="" />
              </div>
              <div className='mt-[30px] relative mx-auto rounded-lg overflow-hidden'> 
                <img src={heroImage02} alt="" className='w-full mb-[30px]'/>
                <img src={heroImage03} alt="" className='w-full'/>
              </div>
            </div>
          </div>
        </div>
    
    </section>
    {/* ================ hero section ends ==========*/}

    <section>
      <div className="container">
        <div className="1g:w-[470px] mx-auto">
          <h2 className="heading text-center">
              Providing the best medical Services </h2>
              </div>
              </div>
    </section>
    </>


  )
}

export default Home