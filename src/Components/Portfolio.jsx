/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import photo1 from '../assets/poert1.png'
import photo2 from '../assets/port2.png'
import photo3 from '../assets/port3.png'

export default function Portfolio() {
  let [img, setimg] = useState(true)
  function rebimg() {
    setimg(!img)
  }
  let [img2, setimg2] = useState(true)
  function rebimg2() {
    setimg2(!img2)
  }
  let [img3, setimg3] = useState(true)
  function rebimg3() {
    setimg3(!img3)
  }
  return (
    

    <div className='relative'>
     
      
     <div className='text-center text-gray-800 text-3xl mt-8 font-bold mb-3 '>
      <h1>PORTFOLIO COMPONENTS</h1>
      <span className=' text-2xl'>------------<i className="fa-solid fa-star "></i>------------</span>
     </div>
     
     
      <div className='container'>
        <div className='row  md:flex  justify-evenly '>
          <div className='col-md-4 relative'>
            <div className='mb-2 cursor-pointer'>
            <img src={photo1} alt="Avatar" style={{ width: 400}}></img>
            <div onClick={rebimg} className='layer absolute top-0 right-0 bottom-0 left-0 opacity-0 '>
            <i className="fa-solid fa-plus text-white text-7xl absolute translate-x-1/2  "></i>
            
         
            

            </div>
            </div>
          </div>
          <div className='col-md-4 relative'>
            <div className='mb-2 cursor-pointer'>
            <img  src={photo2} alt="Avatar" style={{ width: 400}}></img>
            <div onClick={rebimg2} className='layer absolute top-0 right-0 bottom-0 left-0 opacity-0 '>
            <i className="fa-solid fa-plus text-white text-7xl absolute translate-x-1/2  "></i>

            </div>
            </div>
          </div>
          <div className='col-md-4 relative'>
            <div className='cursor-pointer'>
            <img src={photo3} alt="Avatar" style={{ width: 400}}></img>
            <div onClick={rebimg3} className='layer absolute top-0 right-0 bottom-0 left-0 opacity-0 '>
            <i className="fa-solid fa-plus text-white text-7xl absolute translate-x-1/2  "></i>

            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row md:flex  justify-evenly mt-6 mb-3 '>
          <div className='col-md-4 relative'>
            <div className='mb-2 cursor-pointer'>
            <img src={photo1} alt="Avatar" style={{ width: 400}}></img>
            <div onClick={rebimg}  className='layer absolute top-0 right-0 bottom-0 left-0 opacity-0 '>
            <i className="fa-solid fa-plus text-white text-7xl absolute translate-x-1/2  "></i>

            </div>
            </div>
          </div>
          <div className='col-md-4 relative'>
            <div className='mb-2 cursor-pointer'>
            <img src={photo2} alt="Avatar" style={{ width: 400}}></img>
            <div onClick={rebimg2} className='layer absolute top-0 right-0 bottom-0 left-0 opacity-0 '>
            <i className="fa-solid fa-plus text-white text-7xl absolute translate-x-1/2  "></i>

            </div>
            </div>
          </div>
          <div className='col-md-4 relative slid'>
            <div className='cursor-pointer '>
            <img src={photo3} alt="Avatar" style={{ width: 400}}></img>
            <div onClick={rebimg3} className='layer absolute top-0 right-0 bottom-0 left-0 opacity-0 '>
            <i className="fa-solid fa-plus text-white text-7xl absolute translate-x-1/2  "></i>

            </div>
            </div>
          </div>
          
        </div>
               
      </div>
      <div  className={`layerreb    items-center justify-items-center fixed  z-10 bg-opacity-50   ${img?'hidden':'flex'}  `} >
           
           <img src={photo1} alt="" style={{width:550}} id="imgLayer"></img>
            </div>
     <div  className={`layerreb    items-center justify-items-center fixed  z-10 bg-opacity-50   ${img2?'hidden':'flex'}  `} >
           
           <img src={photo2} alt="" style={{width:550}} id="imgLayer"></img>
            </div>
     <div  className={`layerreb    items-center justify-items-center fixed  z-10 bg-opacity-50   ${img3?'hidden':'flex'}  `} >
           
           <img src={photo3} alt="" style={{width:550}} id="imgLayer"></img>
            </div>
       
    </div>

   
  )
}

// eslint-disable-next-line no-unused-vars

