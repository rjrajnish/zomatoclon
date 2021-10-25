import React from 'react'
import getapp from '../images/getapp.jpg'

export const GetApp = () => {
    return (
        
            
        <div className='getapp'>
           <div className='getap'>
          <div className='geta'>
          <div className='getimg' >
              <img className='getimg1' src={getapp}></img>
          </div>
          <div className='gta'>
              <h2>Get App On Mobile</h2>
              <p>We will send you a link, open it on your phone to download the app</p>
               <section name='radio'>
                  <input type="radio" name="radio" value="email" label="Email" checked=""></input>
                  Email
                  
              </section>
              <section name='radio'>
                  <input type="radio" name="radio" value="number" label="" checked=""></input>
                  Mobile
              </section>
          </div>
          
           </div>
           </div>
        </div>

      
    )
}
