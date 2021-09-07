import React from 'react';
import './RouteDive.css';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Deshboard from './../deshboard/Deshboard';
import AddNews from './../news/AddNews';
import ListNews from './../news/ListNews';
import AddAdmin from './../AddAdmin';

const RouteDiv = () => {
    let { path } = useRouteMatch();
    return (
        <div className="">
            <Switch>
                <Route exact path={`${path}/dashboard`} >
                    <Deshboard />
                </Route>
                <Route path={`${path}/addNews`}>
                    <AddNews/>
                </Route>
                <Route path={`${path}/listNews`}>
                    <ListNews />
                </Route>
                <Route path={`${path}/addAdmin`}>
                    <AddAdmin />
                </Route>
            </Switch>
        </div>
    );
};

export default RouteDiv;