import React from 'react'
import {FaRegLightbulb} from 'react-icons/fa';
import './style.css';
function Footer() {
  return (
    <div className='flexStyle' style={{alignItems: 'center', justifyContent:'center'}}>
        <FaRegLightbulb/>
        <p>{`ProTio! What's not been updated in a month: updated: <2021-08-17`}</p>
    </div>
  )
}

export default Footer