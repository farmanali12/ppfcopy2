import React from 'react'
import './Section1.css'
import IIconsection1 from './IIconsection1'
// import {BiLayer} from "react-icons/bi"
function Sextion1() {
  return (
    <div className='conatainer1'>
    {
        IIconsection1.map((val)=>{
            const{id,icon,number,text}=val;
            return(
                <div className='containerico' key={id}>
        <div className='biborder'>
        {/* <BiLayer className='bilayer'/> */}
        <i className='bilayer'>{icon}</i>
        </div>
        <div>
            <h3 className='text-alighnumber'>{number}</h3>
            <span className='texticon'>{text}</span>
        </div>
     </div>
            )
        })
    }
     
         
     </div>
  
  )
}

export default Sextion1