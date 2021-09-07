import React from 'react';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlus, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { useRouteMatch } from 'react-router';
import RouteDiv from './routeDiv/RouteDiv';
import { Link } from 'react-router-dom';


const Admin = () => {
    let { url } = useRouteMatch();
    return (
        <section className="row">
        <div className="col-md-4">
            <div class="sidebar">
                <div className="mt-5 text-sm-start">
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="side-icon" />Home{" "}
                    </Link>
                    <div>
                            <Link to={`${url}/addNews`}>
                                <FontAwesomeIcon icon={faPlus} className="side-icon" />Add News{" "}
                            </Link>
                            <Link to={`${url}/listNews`}>
                                <FontAwesomeIcon icon={faTasks} className="side-icon" />List News{" "}
                            </Link>
                            <Link to={`${url}/addAdmin`}>
                                <FontAwesomeIcon icon={faUserShield} className="side-icon" />Add Admin{" "}
                            </Link>
                            
                        </div>
                    
                </div>
            </div>
        </div>
        <div className="col-md-8">
            <RouteDiv />
        </div>
    </section>
    );
};

export default Admin;