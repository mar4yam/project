import React from 'react'
import photo from '../assets/avataaars.svg'
export default function Start() {
  return (
    <div className='bg-photo text-center text-white py-11'>
      <div className='flex justify-center py-11'>
        <img src={photo} alt="Avatar" style={{ width: 250}}></img>
      </div>
      <h2 className='text-3xl my-0'>START FRAMEWORK</h2>
      <span className=' text-2xl'>------------<i className="fa-solid fa-star "></i>------------</span>
      <h6>Graphic Artist - Web Designer - Illustrator</h6>
    </div>
  )
}
