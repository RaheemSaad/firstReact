import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#2C3E50] text-white w-full'>

        <div className='inner-footer container p-12 flex flex-wrap'>


        <div className='text-white w-full sm:w-1/3 md:w-1/3 lg:w-1/3 p-4 text-center'>
            <h2 className='fs-3 fw-semibold mb-1'>LOCATION</h2>
            <p className='mb-2'>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>

        <div className='text-white w-full sm:w-1/3 md:w-1/3 lg:w-1/3 p-4 text-center'>
            <h2 className='fs-2 fw-semibold mb-2'>AROUND THE WEB</h2>
            <div className='social'>
                <i className='fa-brands fa-facebook mx-1 border-1 rounded-full p-2'></i>
                <i className='fa-brands fa-twitter mx-1 border-1 rounded-full p-2'></i>
                <i className='fa-brands fa-linkedin mx-1 border-1 rounded-full p-2'></i>
                <i className='fa-solid fa-globe mx-1 border-1 rounded-full p-2'></i>

            </div>
        </div>

        <div className='text-white w-full sm:w-1/3 md:w-1/3 lg:w-1/3 p-4 text-center'>
            <div>
            <h2 className='fs-2 fw-semibold mb-2'>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        </div>

        <div className='bg-[#1A252F] p-3'>
            <p className='text-center'>Copyright © Your Website 2021</p>

        </div>



    </footer>
  )
}
