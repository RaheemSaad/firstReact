import React from 'react'
import home from '../assets/images/poert1.png'
import cake from '../assets/images/port2.png'
import caravan from '../assets/images/port3.png'


export default function Portfolio() {
    return (
        <div>
            <div>
                <h2 className='fs-2 fw-bold text-center mt-3 text-[#2C3E50]'>PORTFOLIO COMPONENT</h2>
                <div className='d-flex align-items-center justify-content-center my-4'>
                    <div className='line bg-[#2C3E50] mx-2'></div>
                    <i className='fa-solid fa-star text-center'></i>
                    <div className='line bg-[#2C3E50] mx-2'></div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center align-middle my-4 gap-6'>


                <div className='md:w-1/4 rounded box relative cursor-pointer'>          
                <img src={home} className='w-full rounded' alt="" />
                <div className=" layer absolute top-0 right-0 left-0  bottom-0 flex justify-center bg-[#1ABC9C] opacity-0">
                    <i className='fas fa-plus fa-5x text-white my-auto'></i>
                </div>
                </div>
                <div className='md:w-1/4 rounded box relative cursor-pointer'>          
                <img src={cake} className='w-full rounded' alt="" />
                <div className=" layer absolute top-0 right-0 left-0  bottom-0 flex justify-center bg-[#1ABC9C] opacity-0">
                    <i className='fas fa-plus fa-5x text-white my-auto'></i>
                </div>
                </div>
                <div className='md:w-1/4 rounded box relative cursor-pointer'>          
                <img src={caravan} className='w-full rounded' alt="" />
                <div className=" layer absolute top-0 right-0 left-0  bottom-0 flex justify-center bg-[#1ABC9C] opacity-0">
                    <i className='fas fa-plus fa-5x text-white my-auto'></i>
                </div>
                </div>
                <div className='md:w-1/4 rounded box relative cursor-pointer'>          
                <img src={home} className='w-full rounded' alt="" />
                <div className=" layer absolute top-0 right-0 left-0  bottom-0 flex justify-center bg-[#1ABC9C] opacity-0">
                    <i className='fas fa-plus fa-5x text-white my-auto'></i>
                </div>
                </div>

                <div className='md:w-1/4 rounded box relative cursor-pointer'>          
                <img src={cake} className='w-full rounded' alt="" />
                <div className=" layer absolute top-0 right-0 left-0  bottom-0 flex justify-center bg-[#1ABC9C] opacity-0">
                    <i className='fas fa-plus fa-5x text-white my-auto'></i>
                </div>
                </div>
                <div className='md:w-1/4 rounded box relative cursor-pointer'>          
                <img src={caravan} className='w-full rounded' alt="" />
                <div className=" layer absolute top-0 right-0 left-0  bottom-0 flex justify-center bg-[#1ABC9C] opacity-0">
                    <i className='fas fa-plus fa-5x text-white my-auto'></i>
                </div>
                </div>
            </div>


        </div>

    )
}
