import React, { useEffect, useState } from 'react';
import './Techonology.css';
import { Link } from 'react-router-dom';

const Techonology = () => {
   
    const[technology, setTechnology] = useState([]);
    useEffect(()=>{
        fetch('https://shrouded-coast-00122.herokuapp.com/technologyNews')
        .then(res => res.json())
        .then(data => setTechnology(data.reverse()))
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                <h2 className="h4 category-name"><span>Technology</span></h2>
                <div className="row">
                    {
                        technology.slice(0,1).map((tech, index)=>(
                            <div className="col-md-6">
                                <img src={`data:image/png;base64,${tech.image.img}`} alt="" className="img-fluid" />
                                <h4 className="mt-4">{tech.title}</h4>                           
                            <p className="mt-3">{tech.shortDis}</p>
                            <Link to={`/topSingle/${tech._id}`} className="link">Read More...</Link>
                            </div>
                        ))
                    }
                   
                    <div className="col-md-6">
                    {
                       technology.slice(0,4).map((tech, index) =>(
                           <div className="row  align-items-center">                             
                               <div className="col-md-6 mt-3 ">
                               <Link to={`/topSingle/${tech._id}`} className="link">   <img src={`data:image/png;base64,${tech.image.img}`} alt="" className="img-fluid" /></Link>
                               
                               </div>
                               <div className="col-md-6 mt-3">
                               <h6>{tech.title}</h6>
                               </div>
                           </div>
                       ))
                   }
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                   <div><h2 className="h4 category-name"><span>Sponsor</span></h2></div> 
                    <img src="https://i.ibb.co/sHRzWNV/ad-300x250.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="row mt-3">
                    <div><h2 className="h4 category-name"><span>Archives</span></h2></div> 
                    <h5>August 2021</h5>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Techonology;