import React  from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {RiHomeGearLine} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdContactPhone} from 'react-icons/md'
const Layout = ({children}) => {
    return (
        <motion.div 
            initial="hidden"
            animate="pageTransition"
            variants={{
                hidden:{
                    opacity:0
                },
                pageTransition:{
                    opacity:1
                }
            }}
            className="relative h-full p-5 rounded-lg shadow box-sizing">
       
            {children}
            <nav className="absolute bottom-0 transform left-2/4 -translate-x-2/4 ">
                <ul className="flex ">
                    <li className="flex items-center justify-center w-10 h-10 p-4 m-2 mb-4 text-lg text-white transition duration-300 ease-out transform bg-white border-2 rounded-full shadow border-charleston-100 hover:scale-125 bg-opacity-20 bg-clip-padding backdrop-filter"><Link to="/" ><RiHomeGearLine size={20} color={'#fff'} /></Link></li>
                    <li className="flex items-center justify-center w-10 h-10 p-4 m-2 mb-4 text-lg text-white transition duration-300 ease-out transform bg-white border-2 rounded-full shadow border-charleston-100 hover:scale-125 bg-opacity-20 bg-clip-padding backdrop-filter"><Link to="/project" ><AiOutlineFundProjectionScreen size={20} color={'#fff'}/></Link></li>
                    <li className="flex items-center justify-center w-10 h-10 p-4 m-2 mb-4 text-lg text-white transition duration-300 ease-out transform bg-white border-2 rounded-full shadow border-charleston-100 hover:scale-125 bg-opacity-20 bg-clip-padding backdrop-filter"><Link to="/contact" ><MdContactPhone size={20} color={'#fff'}/></Link></li>
                </ul>
            </nav>
        </motion.div>
    )
}

export default Layout
