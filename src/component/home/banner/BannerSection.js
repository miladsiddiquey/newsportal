import React, { useEffect, useState } from 'react';
import './BannerSection.css'
import { Carousel } from 'react-bootstrap';
import topNewsData from '../../../allData/TopNewsData.json'

const BannerSection = () => {
// const newsBanner = [
//     {
//         "img":"https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg"
//     },
//     {
//         "img":"https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg"
//     },
//     {
//         "img":"https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg"
//     },
// ]
const [slid, setSlid] = useState([]);
useEffect(()=>{
    setSlid(topNewsData)
},[])
    return (
        <div>
            <div className="container">
                <div className="row mt-5 mb-4">
                    <div className="col-md-6">
                        
                        <Carousel>
                            {
                                slid.map((banner, index)=>(
                                    <Carousel.Item>
                            <img src={banner.img} alt="" className="img-fluid" />
                            </Carousel.Item>
                                ))
                            }
                            
                        </Carousel>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <img src="https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div>
                                    <img src="https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg" alt="" className="img-fluid" />

                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="https://i.ibb.co/W0hhch5/eye-766166-1280-750x406.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;