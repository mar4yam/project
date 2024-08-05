import React from 'react'

export default function Fotter() {
  return (
    <div>

   
    <div className=' bg-gray-700 p-3 md:flex justify-evenly items-center py-11  ' >
      <div className='text-white'>
        <h1 className='text-2xl'>LOCATION</h1>
        <h6 className='text-xl'>2215 John Daniel Drive</h6>
        <span>Clark, MO 65243</span>
     </div>
      <div className='text-white py-8'>
        <h1 className='text-2xl'>AROUND THE WEB</h1>
        <ul className=' flex justify-start gap-11'>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-linkedin-in"></i></li>
            <li><i className="fa-solid fa-globe"></i></li>
        </ul>
      </div>
      <div className='text-white'>
        <h1 className='text-3xl'>ABOUT FREELANCER</h1>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
     </div>

    </div>
     <div className='bg-gray-900 text-white text-center p-5'>
        <p>Copyright © Your Website 2021</p>
     </div>
     </div>
  )
}
