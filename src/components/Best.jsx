import React, { useState } from 'react'
import {AiFillCaretDown, AiFillCaretUp, AiOutlineDown, AiOutlineHome, AiOutlineSearch, AiOutlineUp} from "react-icons/ai"
import {HiLocationMarker} from "react-icons/hi"
import {FaHome} from "react-icons/fa"
import {IoMdCash} from "react-icons/io"
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
                        <span><HiLocationMarker className='icon'/></span>
                        <div className='city'>
                            <div>
                            <select name="" id="">
                                <option value="1">a 1 s</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            </div>
                            Select your place
                        </div>
                        <span>{city ? <AiFillCaretUp className='icons'/> : <AiFillCaretDown className='icons'/>}</span>
                        
                    </div>
                    <div className='col'>
                        <span><FaHome className='icon'/></span>
                        <div className='house'>
                            <p>House</p>
                            Choose property type
                        </div>
                        <span>{house ? <AiFillCaretUp className='icons'/> : <AiFillCaretDown className='icons'/>}  </span>
                    </div>
                    <div className='col'>
                        <span><IoMdCash className='icon'/></span>
                        <div className='price'>
                            <p>Price range (any)</p>
                            Choose price range
                        </div>
                        <span>{price ? <AiFillCaretUp className='icons'/> : <AiFillCaretDown className='icons'/>}</span>
                    </div>
                    <div className='col' id='searchbtn'> <div>Qidirish</div></div>
                    
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
