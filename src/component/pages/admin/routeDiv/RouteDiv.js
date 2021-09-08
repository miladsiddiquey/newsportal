import React from 'react';
import './RouteDive.css';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Deshboard from './../deshboard/Deshboard';
import AddNews from './../news/AddNews';
import ListNews from './../news/ListNews';
import AddAdmin from './../AddAdmin';
import ListAdmin from './../ListAdmin';

const RouteDiv = () => {
    let { path } = useRouteMatch();
    return (
        <div className="">
            <Switch>
                
               
                <Route path={`${path}/addNews`}>
                    <AddNews/>
                </Route>
                <Route path={`${path}/listNews`}>
                    <ListNews />
                </Route>
                <Route path={`${path}/addAdmin`}>
                    <AddAdmin />
                </Route>
                <Route path={`${path}/listAdmin`}>
                    <ListAdmin />
                </Route>
                <Route  path={`${path}/dashboard`} >
                    <Deshboard />
                </Route>
                <Route exact path={`${path}/`} >
                    <Deshboard />
                </Route>
               
            </Switch>
        </div>
    );
};

export default RouteDiv;