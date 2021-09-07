import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './HeaderSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import {  faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import topNewsData from '../../../allData/TopNewsData.json'

const HeaderSection = () => {
    let date = new Date();
    const[ latestData, setLatestData] = useState([]);
    useEffect(()=>{
        setLatestData(topNewsData);
    },[])
    return (
        <div className="header-off">
            {/* Top-bar */}
            <div style={{ backgroundColor: '#343334' }}>
                <div className="container">
                    <div className="d-flex" style={{paddingTop:'10px',color:'white'}} >
                        <p>{date.toDateString()} |</p>
                        <a href="!#" style={{ textDecoration: 'none' }}> &nbsp;Contact</a>
                        <div className="d-flex social-icon-top" >
                        <FontAwesomeIcon icon={faFacebook} className="me-3" />
                        <FontAwesomeIcon icon={faTwitter} className="me-3" />
                        <FontAwesomeIcon icon={faUser} className="me-3" />
                       

                        </div>
                    </div>
                </div>
            </div>
            {/* Logo and Ad section */}
            <div className="container">
                <div className="row align-items-center mt-4 mb-4 logo-banner">
                    <div className="col-md-4">
                        <img src="https://i.ibb.co/gJKDtRw/logo.png" alt="logo" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <img src="https://i.ibb.co/mvNGF25/ad-728x90.png" alt="ad-banner" className="img-fluid" />
                    </div>
                </div>

            </div>
            {/* menu-bar section */}
            <Navbar  expand="lg" style={{ backgroundColor: '#343334' }}>
                <Container>
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" style={{color:'white'}}>Home</Nav.Link>
                            <Nav.Link href="#" style={{color:'white'}}>Link</Nav.Link>
                            <Nav.Link href="#" style={{color:'white'}}>Link</Nav.Link>
                            <Nav.Link href="#" style={{color:'white'}}>Link</Nav.Link>
                            <Nav.Link href="#" style={{color:'white'}}>Link</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Latest-news section */}
            <div className="container">
                <div className="row mt-4">
                <div className="d-flex "><h3 className="h4 category-name"><span>Latest</span></h3>
                <marquee className=" marquee-name">
               {
                   latestData.map((latestData, index)=>(
                   
                  <div>
                       <h5>{latestData.title}</h5>
                  </div>
                
                   ))
               }
               
               </marquee>
               
              
               
                   
               
              
              
             
               
                </div> 

                </div>
                
            </div>

        </div>
    );
};

export default HeaderSection;