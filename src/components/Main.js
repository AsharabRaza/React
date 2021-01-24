import React, {Component} from 'react';
import {Index} from "./HomeComponent/index";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'


export const Main = () => {
    return(
            <div>
              <Header /> 
                <Switch>
                    <Route path='/index' component={Index} />
                </Switch>
              <Footer />
            </div>
    )
}

export default Main;