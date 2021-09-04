import React from 'react'
import {motion} from 'framer-motion'
import { container } from '../animation/Variants'
import Layout from '../components/layouts/Layout'

const ContactPage = () => {
    return (
        <Layout>
            <motion.div 
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center h-full">
                <h2 className="font-extrabold text-red-600 text-9xl">ContactPage</h2>
            </motion.div>
        </Layout>
    )
}

export default ContactPage
