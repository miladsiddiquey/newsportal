import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import RouteDiv from './routeDiv/RouteDiv';
import { useRouteMatch } from 'react-router-dom';

const Admin = () => {
    let { url } = useRouteMatch();
    return (
        <div>
            <div className="d-sidebar">
           <header>
           <div className="logo">Daily News</div>
            <nav className="d-navbar">
                <Link to={`${url}/dashboard`} className="link">Dashboard</Link>
                <Link to={`${url}/addAdmin`}className="link">Add Admin</Link>
                <Link to={`${url}/listAdmin`}className="link">List Admin</Link>
                <Link to={`${url}/addNews`}className="link">Add News</Link>
                <Link to={`${url}/listNews`}className="link">List News</Link>               
                              
            </nav>
           </header>
           <RouteDiv/>
        </div>
        
        </div>
    );
};

export default Admin;