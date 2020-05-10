import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './container/home/home'
import Careers from './container/careers/careers'
import About from './container/about/about'


export default () => {
    return (
        <Switch>
            
            <Route path={"/careers"} component={Careers} />
            <Route path={"/about"} component={About} />    
                    
            <Route path={"/"} exact={true} component={Home} />
        </Switch>
    );
}