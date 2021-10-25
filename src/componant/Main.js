import React from 'react'
import {Row} from 'react-bootstrap'
import zomatoMainPic from '../images/zomatoMainPic.jpg'
 import Header from './Header'
export const Main = () => {
    return (
        <>
        <Header />
        <div >
          <Row> <img className='main ' src={zomatoMainPic} alt="Logo" /></Row>
        </div>
        </>
    )
}
