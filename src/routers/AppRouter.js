import React from 'react'
import Container from '../components/Container'
import HeroePage from '../components/HeroePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Container} exact={true}/>
            <Route path="/heroePage/:id" component={HeroePage}/>
        </Switch>
    </BrowserRouter>
)

export default AppRouter