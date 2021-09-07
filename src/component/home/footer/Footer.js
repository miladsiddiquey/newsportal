import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5" style={{backgroundColor:'#343334'}}>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-4">
                    <div> <h2 className="h4 footer-name "><span>Text Widget</span></h2></div>
                   <p style={{color:'#fff'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil iusto dolorem corrupti recusandae maiores saepe blanditiis quo beatae modi.</p>
                    </div>
                    <div className="col-md-4">
                    <div> <h2 className="h4 footer-name "><span>categories</span></h2></div>
                    <ul className="footer-category-list">
                            <li>Food</li>
                            <li>Healht</li>
                            <li>Lifestyle</li>
                            <li>Techonology</li>
                            <li>Status</li>
                            <li>Travel</li>
                          
                           
                        </ul>
                    </div>
                    <div className="col-md-4">
                    <div> <h2 className="h4 footer-name "><span>NewsLater</span></h2></div>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, adipisci.</p>
                    <input type="email" placeholder="Enter your Email" />
                    <button className="sub-btn">Subscribe</button>
                    </div>
                    <hr style={{color:'#8F8D8F'}}/>
                    <p className="text-white ">&copy; 2021 Milad Siddiquey. All right Reserved</p>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;