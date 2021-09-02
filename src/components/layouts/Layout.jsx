import React  from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
    return (
        <div className="relative h-full p-5 rounded-lg shadow box-sizing">
       
            {children}
            <nav className="absolute bottom-0 transform left-2/4 -translate-x-2/4 ">
                <ul className="flex ">
                    <li className="flex items-center justify-center w-20 h-20 p-4 m-5 text-lg text-white rounded-full shadow-2xl bg-blu-light"><Link to="/" >Home</Link></li>
                    <li className="flex items-center justify-center w-20 h-20 p-4 m-5 text-lg text-white rounded-full shadow-2xl bg-blu-light"><Link to="/project" >Project</Link></li>
                    <li className="flex items-center justify-center w-20 h-20 p-4 m-5 text-lg text-white rounded-full shadow-2xl bg-blu-light"><Link to="/contact" >Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout
