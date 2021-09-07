import React, { useEffect, useState } from 'react';
import './TopSingle.css';
import topNewsData from '../../../allData/TopNewsData.json'
import { useParams } from 'react-router';
import HeaderSection from './../../home/header/HeaderSection';

const TopSingle = () => {
    const { id } = useParams();
    const [singleTD, setSingleTD] = useState({});
    useEffect(() => {
        const topNewsSingleData = topNewsData.find(news => news.id == id);
        setSingleTD(topNewsSingleData)
    }, []);
    return (
        <div>
            <HeaderSection />
            <div className="container">
                <img src={singleTD.img} alt="" className="img-fluid" />
                <h3>{singleTD.title}</h3>
                <p>{singleTD.discreption}</p>
            </div>
        </div>


    );
};

export default TopSingle;