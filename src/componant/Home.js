import React from 'react'
import { Category } from './Category'
import { Collactions } from './Collactions'
import { Contact } from './Contact'
import { ContantWrapper } from './ContantWrapper'
import { GetApp } from './GetApp'
  
 import { Main } from './Main'
 
  
export const Home = () => {
    return (
        <div  className='body'>
          
           
           < Main /> 
           <ContantWrapper /> 
           < Category />
           < Collactions />
           < Contact />
           < GetApp />
            
        </div>
    )
}
