import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNews.css';


const TopNews = () => {
   const [topNews, setTopNews] = useState([]);
   useEffect(()=>{
    fetch('https://shrouded-coast-00122.herokuapp.com/topNewsData')
    .then(res => res.json())
    .then(data => setTopNews(data.reverse()))
    //    setTopNews(topNewsData)
   },[])

    return (
        <div className="container">
            <div className=" row top-news">
                <div className="text-center">
                    <img src="https://i.ibb.co/qx3K8H7/Copper-Loader.gif" alt="" className="img-fluid d-none" />
                </div>
                <div className="col-md-8">
                <h2 className="h4 category-name"><span>Top News</span></h2>
                <div className="row">
                    
                {
                    topNews.slice(0,4).map((tNews, index) =>(
                        <div className="col-md-6 mt-3 d-flex ">
                            <div>
                            <img src={`data:image/png;base64,${tNews.image.img}`} alt="" className="img-fluid"  />
                            <h4 className="mt-4">{tNews.title}</h4>                           
                            <p className="mt-3">{tNews.shortDis}</p>
                            <Link to={`/topSingle/${tNews._id}`} className="link">Read More...</Link>
                            </div>
                        </div>
                    ))
                }
                </div>
                </div>
                {/* recent post section */}
                <div className="col-md-4">
                    <div> <h2 className="h4 category-name"><span>Recent Post</span></h2></div>
                   {
                       topNews.slice(0,3).map((cNews, index) =>(
                           <div className="row align-items-center">                             
                               <div className="col-md-6 mt-3 d-flex ">
                               <img src={`data:image/png;base64,${cNews.image.img}`} alt="" className="img-fluid"  />
                               
                               </div>
                               <div className="col-md-6 mt-3 d-flex ">
                               <h6>{cNews.title}</h6>
                               </div>
                           </div>
                       ))
                   }
                   {/* categories section */}
                   <div className="row mt-5">
                   <div> <h2 className="h4 category-name"><span>Categories</span></h2></div>
                        <ul className="category-list">
                            <li><Link to='/foodNews' className="link"> Food</Link></li>
                            <li><Link to='/sportsNews' className="link"> Sports</Link></li>
                            <li><Link to='/interNews' className="link"> International</Link></li>
                            <li><Link to='/technology' className="link"> Technology</Link></li>
                            
                            <li>Status</li>
                            <li>Travel</li>
                            <li>Music</li>
                            <li>Video</li>
                           
                        </ul>
                       
                   </div>
                   
                </div>
            </div>
        </div>
    );
};

export default TopNews;