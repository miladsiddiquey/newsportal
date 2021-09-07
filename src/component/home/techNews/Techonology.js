import React from 'react';
import './Techonology.css';

const Techonology = () => {
    const techonology = [
        {
            "title":"Plants At Your Work Place Keeps You More Productive",
            "discreption":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a lectus vel lacus suscipit facilisis. Nulla convallis blandit mattis. Nulla a consectetur felis, non rhoncus",
            "img":"https://i.ibb.co/ZSMgxz4/pots-716579-1280-750x406.jpg"
        },
        {
            "title":"Plants At Your Work Place Keeps You More Productive",
            "discreption":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a lectus vel lacus suscipit facilisis. Nulla convallis blandit mattis. Nulla a consectetur felis, non rhoncus",
            "img":"https://i.ibb.co/nz7XLL8/croissants-569075-1280-750x406.jpg"
        },
        {
            "title":"Plants At Your Work Place Keeps You More Productive",
            "discreption":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a lectus vel lacus suscipit facilisis. Nulla convallis blandit mattis. Nulla a consectetur felis, non rhoncus",
            "img":"https://i.ibb.co/LzQc03m/sweet-1222759-1280-750x406.jpg"
        },
        {
            "title":"Plants At Your Work Place Keeps You More Productive",
            "discreption":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a lectus vel lacus suscipit facilisis. Nulla convallis blandit mattis. Nulla a consectetur felis, non rhoncus",
            "img":"https://i.ibb.co/LRDrj9z/ipad-1126136-1920-750x406.jpg"
        },
        {
            "title":"Plants At Your Work Place Keeps You More Productive",
            "discreption":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a lectus vel lacus suscipit facilisis. Nulla convallis blandit mattis. Nulla a consectetur felis, non rhoncus",
            "img":"https://i.ibb.co/LRDrj9z/ipad-1126136-1920-750x406.jpg"
        },
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                <h2 className="h4 category-name"><span>Techonology</span></h2>
                <div className="row">
                    {
                        techonology.slice(0,1).map((tech, index)=>(
                            <div className="col-md-6">
                                <img src={tech.img} alt="" className="img-fluid" />
                                <h4 className="mt-4">{tech.title}</h4>                           
                            <p className="mt-3">{tech.discreption}</p>
                            <p>Read More...</p>
                            </div>
                        ))
                    }
                   
                    <div className="col-md-6">
                    {
                       techonology.slice(0,4).map((tech, index) =>(
                           <div className="row align-items-center">                             
                               <div className="col-md-6 mt-3 ">
                               <img src={tech.img} alt="" className="img-fluid" />
                               
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