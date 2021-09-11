import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from './../../home/header/HeaderSection';

const NotFound = () => {
    return (
        <div>
            <HeaderSection />
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-12">
                    <Link to="/home" className="btn btn-success">Go Home</Link>
                        <img src="https://i.ibb.co/LYNFQCw/notFound.gif" alt="Page Not Found" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;