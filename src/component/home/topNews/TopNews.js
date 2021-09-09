import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNews.css';
import topNewsData from '../../../allData/TopNewsData.json'

const TopNews = () => {
   const [topNews, setTopNews] = useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/topNewsData')
    .then(res => res.json())
    .then(data => setTopNews(data))
    //    setTopNews(topNewsData)
   },[])

    return (
        <div className="container">
            <div className=" row top-news">
           
                <div className="col-md-8">
                <h2 className="h4 category-name"><span>Top News</span></h2>
                <div className="row">
                {
                    topNews.slice(0,4).map((tNews, index) =>(
                        <div className="col-md-6 d-flex ">
                            <div>
                            <img src={`data:image/png;base64,${tNews.image.img}`} alt="" className="img-fluid" style={{height:'200px',width:'400px'}} />
                            <h4 className="mt-4">{tNews.title}</h4>                           
                            <p className="mt-3">{tNews.description}</p>
                            <Link to={`/topSingle/${tNews.id}`} className="link">Read More...</Link>
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
                            
                            <li>Techonology</li>
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