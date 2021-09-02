import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import ProjectPage from '../pages/ProjectPage'

const Web = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/project" component={ProjectPage} />
                <Route exact path="/contact" component={ContactPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Web
