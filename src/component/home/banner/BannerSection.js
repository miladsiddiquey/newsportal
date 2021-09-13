import React, { useEffect, useState } from 'react';
import './BannerSection.css'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BannerSection = () => {

    const [slid, setSlid] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-coast-00122.herokuapp.com/topNewsData')
            .then(res => res.json())
            .then(data => setSlid(data))

    }, [])
    return (
        <div>
            <div className="container">
                <div className="row mt-5 mb-4">
                    <div className="col-md-6">

                        <Carousel>
                            {
                                slid.map((banner, index) => (
                                    <Carousel.Item>
                                        <img src={`data:image/png;base64,${banner.image.img}`} alt="" className="img-fluid" />
                                    </Carousel.Item>
                                ))
                            }

                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <div className="row test">
                            <div className="col-md-6">

                            <Link to="/foodNews" className="link"> <div className="category-news-wrap">
                                    <div className="news-img">
                                        <img src="https://i.ibb.co/nz7XLL8/croissants-569075-1280-750x406.jpg" alt="" className="img-fluid" />
                                        <div className="cate-name">
                                            <span>Food</span>
                                        </div>
                                        
                                    </div>
                                    
                                </div></Link>

                            </div>
                            <div className="col-md-6">
                            <Link to="/sportsNews" className="link">  <div className="category-news-wrap">
                                    <div className="news-img">
                                        <img src="https://i.ibb.co/dmqwC1z/barbell-375482-750x406.jpg" alt="" className="img-fluid" />
                                        <div className="cate-name">
                                            <span>Sports</span>
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                        <div className="row mt-3">
                         <div className="col-md-6">
                         <Link to="/interNews" className="link"> <div className="category-news-wrap">
                                    <div className="news-img">
                                        <img src="https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg" alt="" className="img-fluid" />
                                        <div className="cate-name">
                                            <span>International</span>
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                            <div className="col-md-6">
                            <Link to="/interNews" className="link"> <div className="category-news-wrap">
                                    <div className="news-img">
                                        <img src="https://i.ibb.co/5rwP5Hx/smart-watch-821559-1280-750x406.jpg" alt="" className="img-fluid" />
                                        <div className="cate-name">
                                            <span>Technology</span>
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;