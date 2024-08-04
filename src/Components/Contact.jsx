import { Formik, useFormik } from 'formik'
import React from 'react'

export default function Contact() {


    let formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
            password: '',
        }
    })


    return (
        <div>
            <div>
                <h2 className='fs-2 fw-bold text-center mt-3 text-[#2C3E50]'>CONTACT SECTION</h2>
                <div className='d-flex align-items-center justify-content-center my-4'>
                    <div className='line bg-[#2C3E50] mx-2'></div>
                    <i className='fa-solid fa-star text-center'></i>
                    <div className='line bg-[#2C3E50] mx-2'></div>
                </div>
            </div>
            <form className='w-1/2 block mx-auto my-4' onSubmit={formik.handleSubmit}>

                <label className={`relative flex text-[#1ABC9C] ${formik.values.name?"top-0 ":"top-[42px] "}`} htmlFor="name" id="label">userName:</label>
                <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='name' placeholder='userName' className='relative w-full border-gray-500 focus:outline-none border-b-2 my-4' />
                
                <label className={`relative flex text-[#1ABC9C] ${formik.values.age?"top-0":"top-[42px] "}`} htmlFor="age" id="label">userAge</label>
                <input value={formik.values.age} onBlur={formik.handleBlur} type="text" id='age'onChange={formik.handleChange} placeholder='userAge' className='relative w-full border-gray-500 focus:outline-none border-b-2 my-4' />
                
                <label className={`relative flex text-[#1ABC9C] ${formik.values.email?"top-0":"top-[42px] "}`} htmlFor="email" id="label">userEmail</label>
                <input value={formik.values.email} onBlur={formik.handleBlur} type="text" id='email' onChange={formik.handleChange} placeholder='userEmail' className='relative w-full border-gray-500 focus:outline-none border-b-2 my-4' />
                
                <label className={`relative flex text-[#1ABC9C] ${formik.values.password?"top-0":"top-[42px] "}`} htmlFor="password" id="label">userPassword</label>
                <input value={formik.values.password} onBlur={formik.handleBlur} type="text" id='password' onChange={formik.handleChange} placeholder='userPassword' className='relative w-full border-gray-500 focus:outline-none border-b-2 my-4' />           
                
                <button className='bg-[#1ABC9C] p-2 text-white mt-3 mb-10 border-none' >Send Message</button>

            </form>
        </div>
    )
}
