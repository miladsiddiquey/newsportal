import React, { useEffect, useState } from 'react';
import './TopSingle.css';
import { useParams } from 'react-router';
import HeaderSection from './../../home/header/HeaderSection';

const TopSingle = () => {
    const { newsId } = useParams();
    console.log(newsId);
    const [singleTD, setSingleTD] = useState({});

console.log(singleTD);

    useEffect(() => {
        
        const url = `https://shrouded-coast-00122.herokuapp.com/news/${newsId}`;
       
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleTD(data))
          
    }, [newsId])



    return (
        <div>
            <HeaderSection />
            <div className="container">
                <div>
                {/* <img src={`data:image/png;base64,${singleTD.image.img}`} alt="" className="img-fluid"  /> */}
                <h3 className="text-center">Images Not Load some problem</h3>
                <img src="https://i.ibb.co/vhs35NY/internal-error-robot-587009db68604670722dfee5df6a9b00-removebg-preview.png" alt="" className="img-fluid" style={{height:'300px'}} />
                <h3>{singleTD.title}</h3>
                <p>{singleTD.description}</p>
                </div>
                
                
            </div>
        </div>


    );
};

export default TopSingle;