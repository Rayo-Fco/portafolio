import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from '../components/Home'
import Me from "../components/Me";
import PageNotFound from "../components/PageNotFound";


const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/me" component={Me}/>

                <Route path="/topics"></Route>

                <Route exact path="/404" component={PageNotFound}/>
                <Redirect to="/404" />

                
            </Switch>
        </Router>
    );


}

export default MainRouter