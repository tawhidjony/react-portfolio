import React from 'react'
import { motion } from 'framer-motion'
import { container, item } from '../animation/Variants'
import Layout from '../components/layouts/Layout'

const ProjectPage = () => {
    return (
        <Layout>
            <motion.div 
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center h-full" >
                <h2 variants={item} className="font-extrabold text-red-600 text-9xl">ProjectPage</h2>
            </motion.div>
        </Layout>
    )
}

export default ProjectPage
