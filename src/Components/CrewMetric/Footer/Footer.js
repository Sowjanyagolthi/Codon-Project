import React from 'react'
import { Address } from './Address.js'
import { Navlinks } from './Navlink.js'
import { GetInTouch } from './GetInTouch.js'

const Footer =()=>{
    return(
        <div className='footer-Container'>
            <Navlinks/>
            <Address/>
            <GetInTouch/>
        </div>

    )
}

export {Footer}