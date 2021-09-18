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
                    <Link to="/"        className="flex items-center justify-center w-10 h-10 p-2 m-2 mb-4 text-lg text-white transition duration-300 ease-out transform bg-white border-2 rounded-full shadow border-charleston-100 hover:scale-125 bg-opacity-20 bg-clip-padding backdrop-filter"><RiHomeGearLine size={50} color={'#fff'} /></Link>
                    <Link to="/project" className="flex items-center justify-center w-10 h-10 p-2 m-2 mb-4 text-lg text-white transition duration-300 ease-out transform bg-white border-2 rounded-full shadow border-charleston-100 hover:scale-125 bg-opacity-20 bg-clip-padding backdrop-filter"><AiOutlineFundProjectionScreen size={20} color={'#fff'}/></Link>
                    <Link to="/contact" className="flex items-center justify-center w-10 h-10 p-2 m-2 mb-4 text-lg text-white transition duration-300 ease-out transform bg-white border-2 rounded-full shadow border-charleston-100 hover:scale-125 bg-opacity-20 bg-clip-padding backdrop-filter"><MdContactPhone size={20} color={'#fff'}/></Link>
                </ul>
            </nav>
        </motion.div>
    )
}

export default Layout
