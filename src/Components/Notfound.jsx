import React from 'react'
import error from '../assets/error.svg'

export default function Notfound() {
  return (
    <div>
        <h2 className='text-center text-3xl my-3'>Not Found</h2>
        <img src={error} alt="" className='m-auto py-20'/>

    </div>
  )
}
