import React, {Component} from 'react';
import {Index} from "./HomeComponent/index";
import {PlansIndex} from "./OurPlansComponent/PlansIndex";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'


export const Main = () => {
    return(
            <div>
              <Header /> 
                <Switch>
                    <Route path='/' component={Index} />
                    <Route path='/PlansIndex' component={PlansIndex} />
                </Switch>
              <Footer />
            </div>
    )
}

export default Main;