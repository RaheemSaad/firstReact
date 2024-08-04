import React from 'react'

export default function About() {
    return (
        <div className='bg-[#1ABC9C] text-white py-52'>
            <div>
                <h2 className='fs-2 fw-bold text-center mb-2'>ABOUT COMPONENT</h2>
                <div className='d-flex align-items-center justify-content-center my-4'>
                    <div className='line bg-white mx-2'></div>
                    <i className='fa-solid fa-star text-center'></i>
                    <div className='line bg-white mx-2'></div>
                </div>

                <div className='container w-[70%]'>
                    <div className='row g-5'>
                        <p className='col-md-6 '>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                        <p className='col-md-6'>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
