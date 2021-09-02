import React  from 'react'
import { Link } from 'react-router-dom'
import {RiHomeGearLine} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdContactPhone} from 'react-icons/md'
const Layout = ({children}) => {
    return (
        <div className="relative h-full p-5 rounded-lg shadow box-sizing">
       
            {children}
            <nav className="absolute bottom-0 transform left-2/4 -translate-x-2/4 ">
                <ul className="flex ">
                    <li className="flex items-center justify-center p-4 m-5 text-lg text-white rounded-full shadow w-15 h-15 bg-blu-light"><Link to="/" ><RiHomeGearLine size={30} color={'#fff'} /></Link></li>
                    <li className="flex items-center justify-center p-4 m-5 text-lg text-white rounded-full shadow w-15 h-15 bg-blu-light"><Link to="/project" ><AiOutlineFundProjectionScreen size={30} color={'#fff'}/></Link></li>
                    <li className="flex items-center justify-center p-4 m-5 text-lg text-white rounded-full shadow w-15 h-15 bg-blu-light"><Link to="/contact" ><MdContactPhone size={30} color={'#fff'}/></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout
