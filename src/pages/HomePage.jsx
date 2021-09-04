import React from 'react'
import {motion} from 'framer-motion'
import Layout from '../components/layouts/Layout'
import { container } from '../animation/Variants'


const HomePage = () => {
    return (
        <Layout>
           <motion.div 
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center h-full">
                    <img className="w-40 h-40 rounded-full" src="https://cdn2.vectorstock.com/i/thumb-large/17/61/male-avatar-profile-picture-vector-10211761.jpg" alt="" />
                    <h2 className="mt-4 text-xl text-charleston-100">MD TAWHIDUR RAHMAN</h2>
                    <h3 className="mt-2 text-sm uppercase text-charleston-100">associate software engineer</h3>
           </motion.div>
        </Layout>
    )
}

export default HomePage
