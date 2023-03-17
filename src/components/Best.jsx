import React, { useState } from 'react'
import {AiOutlineDown, AiOutlineHome, AiOutlineSearch, AiOutlineUp} from "react-icons/ai"
import {GrLocation} from "react-icons/gr"
import {BsCashCoin} from "react-icons/bs"
import Apt1 from '../assets/apt1.jpeg'
import Apt2 from '../assets/apt2.jpeg'
import Apt3 from '../assets/apt3.jpeg'

import '../style/Best.css'

const Best = () => {
    const [city,setCity] = useState(false)
    const [house,setHouse] = useState(false)
    const [price,setPrice] = useState(false)
    return (
        <div className='best'>
            <h1>Find Best Rated Properties</h1>
            
            <div className='SelectDropdown'>
                <div className='row'>
                    <div className='col'>
                        <span><GrLocation/></span>
                        <div>
                            <p>Uzbekistan</p>
                            Select your place
                        </div>
                        <span>{city ? <AiOutlineUp/> : <AiOutlineDown/>}</span>
                    </div>
                    <div className='col'>
                        <span><AiOutlineHome/></span>
                        <div>
                            <p>Uzbekistan</p>
                            Select your place
                        </div>
                        <span>{house ? <AiOutlineUp/> : <AiOutlineDown/>}  </span>
                    </div>
                    <div className='col'>
                        <span><BsCashCoin/></span>
                        <div>
                            <p>Uzbekistan</p>
                            Select your place
                        </div>
                        <span>{price ? <AiOutlineUp/> : <AiOutlineDown/>}</span>
                    </div>
                    <div className='col'> <AiOutlineSearch/> </div>
                    
                </div>
            </div>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
