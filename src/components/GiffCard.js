import React from 'react'
import './giffCard.css'
export const GiffCard = ({giff}) => {
    const {title,img}= giff
    return (
      <span className="container img-thumbnail animate__animated animate__fadeInLeft" >
        <div style={{backgroundImage:`url(${img})`}} className="img" >
        </div>
        <h4 className="title" >{title}</h4>
      </span>
    );
}
