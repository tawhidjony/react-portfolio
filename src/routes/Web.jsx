import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import { AnimatePresence } from "framer-motion";
const HomePage      = loadable(() => import('../pages/HomePage'))
const ProjectPage   = loadable(() => import('../pages/ProjectPage'))
const ContactPage   = loadable(() => import('../pages/ContactPage'))


const Web = () => {
    return (
        <BrowserRouter>
            <Route render={({location}) => (
                <AnimatePresence exitBeforeEnter initial={false}>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/project" component={ProjectPage} />
                        <Route exact path="/contact" component={ContactPage} />
                    </Switch>
                </AnimatePresence>
            )} />
        </BrowserRouter>
    )
}

export default Web
