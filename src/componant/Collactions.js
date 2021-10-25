import React from 'react'
import orderfood from '../images/orderfood.jpg'
import goOut from '../images/goOut.jpg'
import zomatoPro from '../images/zomatoPro.jpg'
import NightMils from '../images/NightMils.jpg'
import { Row ,Col} from 'react-bootstrap'


export const Collactions = () => {
    return (
        <div className='coll'>
        <div >
            <h1 className='hc'>Collections</h1>
            <p className='hcp'>Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends</p>
        </div>     
    <ul className="card-wrapper">
  <li className="card">
    <img  className='colimg'  src={orderfood} alt=''></img>
    
    <p className='colsec'>Order Food Online</p>
  </li>
  <li className="card">
    <img className='colimg'   src={goOut} alt=''></img>
    <p className='colsec'>Order Food Online</p>
  </li>
  <li className="card">
    <img className='colimg' src={zomatoPro} alt=''></img>
     
    <p className='colsec'>Zomato Pro</p>
  </li>
  <li className="card">
    <img className='colimg'  src={NightMils} alt=''></img>
     
    <p className='colsec'>Nightlifes & Clubs</p>
  </li>
</ul>
            
        
        
        </div>
    )
}
