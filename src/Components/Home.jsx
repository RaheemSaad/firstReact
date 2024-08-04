import React from 'react'
import photo from '../assets/avataaars.svg'

export default function Home() {
    return (
        <div className='bg-[#1ABC9C]'>

            <div className='inner-home flex flex-col justify-center text-white text-center py-28'>

                <div className='flex justify-center mb-5'>
                    <img src={photo} className='w-[250px]' />
                </div>

                <div>
                    <h2 className='fs-2 fw-bold text-center mb-2'>START FRAMEWORK</h2>
                    <div className='d-flex align-items-center justify-content-center my-4'>
                        <div className='line bg-white mx-2'></div>
                        <i className='fa-solid fa-star text-center'></i>
                        <div className='line bg-white mx-2'></div>
                    </div>
                    <p className=''>Graphic Artist - Web Designer - Illustrator</p>
                </div>

            </div>





        </div>
    )
}
