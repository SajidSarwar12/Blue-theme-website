import React from 'react';
import './assets/styles/styles.scss';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Routes from './routes';
import SignIn from './container/signIn/signIn'



export default ()=>{
  return(
    <Switch>
      <Route path={"/signin"} exact component={SignIn} />
      <Route path={"/"} component={Routes} />
      
      
    </Switch>
  );
  
}
