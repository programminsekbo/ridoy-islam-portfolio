import React from 'react';
import "./Card.css";
import GatDataStore from '../../store/GatDataStore';
import { FaGithub } from 'react-icons/fa';
import WorkCardSkeleton from '../../skeleton/WorkCardSkeleton';

const CardModel = () => {
    const { ProjectsList } = GatDataStore();

    if (ProjectsList === null) {
      return <WorkCardSkeleton />;
    }else{


    return (
        <>
        <div className="header">
          <h2><span>My</span> Work</h2>
         
        </div>
        <div className="container">
        {ProjectsList.map((item, index) => {
              return (
                <div key={index} className="card"> 
                <div className="card-image">
                  <img src={item.img} />
                </div>
                <div className="card-text">
                  <a href={item.liveDemo} target="_blank" className="card-meal-type">Live Url →</a>
                  <h2 className="card-title">{item.hading}</h2>
                  <p className="card-body">
                  {item.subHading}
                  </p>
                </div>
                <div className="card-price"> <a href={item.github} target="_blank" ><FaGithub /></a></div>
              </div>
              );
            })}
         
        
        </div>
      </>
      
    );
    }
};

export default CardModel;