import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setalert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(()=>setalert(false),3000)
    return ()=>clearTimeout(timeout);
  },[alert])
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  console.log(weight);
  console.log(bcg)
  return <article 
  className={`color ${index > 10 && 'color-ligth'}`} 
  style={{backgroundColor:`rgb(${bcg})`}}
  onClick={()=>{
    setalert(true);
   navigator.clipboard.writeText(hex);
  }}
  >
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hex}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>
}

export default SingleColor
