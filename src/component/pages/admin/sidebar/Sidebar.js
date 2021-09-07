import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
   
    return (
        <div>
            <div class="menubar">
                <input type="checkbox" id="btn" hidden />
                <label for="btn" class="menu-btn">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-times"></i>
                </label>
                <nav id="sidebar">
                    <div class="sidebar_logo">
                        <h2>logo here</h2>
                    </div>
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <ul class="sidebarList">
                                <div className="dropdown-container">
                                    <Link to="/dashboard" style={{ textDecoration: 'none' }} > <li className="sidebarListItem active">
                                        <i className="fas fa-border-all"></i>
                                        Dashboard
                                    </li></Link>
                                </div>
                                <div className="dropdown-container">
                                    <li className="sidebarListItem">
                                        <i className="fas fa-sort-amount-down"></i>
                                        Admin
                                    </li>
                                    <div className="dropdown-content">
                                        <Link to="#" style={{ textDecoration: 'none' }} > <li className="sidebarListItem">Add Admin</li></Link>
                                        <Link to="#" style={{ textDecoration: 'none' }} > <li className="sidebarListItem">List Admin</li></Link>

                                    </div>
                                </div>
                                <div className="dropdown-container">
                                    <li className="sidebarListItem">
                                        <i className="fas fa-sort-amount-down"></i>
                                        News
                                    </li>
                                    <div className="dropdown-content">
                                        <Link to="#" style={{ textDecoration: 'none' }} > <li className="sidebarListItem">Add News</li></Link>
                                        <Link to="#" style={{ textDecoration: 'none' }} > <li className="sidebarListItem">List News</li></Link>

                                    </div>
                                </div>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="logo">
                    <h2>logo here</h2>
                </div>

                <div class="profile">
                    {/* <li><a href="#"><i className="far fa-user-circle"></i></a></li> */}

                </div>
            </div>
         
        </div>
    );
};

export default Sidebar;