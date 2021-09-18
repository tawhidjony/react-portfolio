import React from 'react'
import {motion} from 'framer-motion'
import loadable from '@loadable/component'
import profileImg from '../assets/images/profile/we.webp'
const Layout     = loadable(() => import('../components/layouts/Layout'))
const container  = loadable(() => import('../animation/Variants'))

const HomePage = () => {

    const shareData = {
        title: 'MDN',
        text: 'Learn web development on MDN!',
        url: 'https://developer.mozilla.org'
      }
      
    const shareSocial = (e) =>{
        if (navigator.share) {
            navigator
              .share(shareData)
              .then(() => {
                console.log('Successfully shared');
              })
              .catch(error => {
                console.error('Something went wrong sharing the blog', error);
              });
        }

        console.log(navigator.share);
    }

    return (
        <Layout>
           <motion.div 
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center h-full">
                    <img className="w-40 h-40 rounded-full" src={profileImg} alt="" />
                    <h2 className="mt-4 text-xl text-charleston-100">MD TAWHIDUR RAHMAN</h2>
                    <h3 className="mt-2 text-sm uppercase text-charleston-100">associate software engineer</h3>
           </motion.div>
           <button id="shareBtn" onClick={shareSocial} > Share</button>
        </Layout>
    )
}

export default HomePage
