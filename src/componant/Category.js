import React from 'react'
import {Row,Col, Container}  from 'react-bootstrap'
import orderfood from '../images/orderfood.jpg'
import goOut from '../images/goOut.jpg'
import zomatoPro from '../images/zomatoPro.jpg'
import NightMils from '../images/NightMils.jpg'


export const Category = () => {
    return (
        
    <ul className="card-wrapper">
  <li className="card">
    <img className='pp'  src={orderfood} alt=''></img>
    
    <p>Order Food Online</p>
  </li>
  <li className="card">
    <img className='pp'  src={goOut} alt=''></img>
    
    <p>Go out for meal</p>
  </li>
  <li className="card">
    <img className='pp' src={zomatoPro} alt=''></img>
     
    <p>Zomato Pro</p>
  </li>
  <li className="card">
    <img className='pp' src={NightMils} alt=''></img>
     
    <p>Nightlifes & Clubs</p>
  </li>
</ul>
            
        
    )
}
