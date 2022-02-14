import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'
import ProductData from './ProductData';
import './style/cardDetails.css';

const CardDetails = () => {
  const {id} = useParams()
  // console.log(id)
  return (
      <>
        <NavBar/>
        {
          ProductData.filter(data => data.id = id).map((data1) => (
            <div className="cardBody">
                  <div className="body1">
                        <img src={data1.image} alt="img" />
                  </div>
                  <div className="body2">
                        <h1>{data1.name}</h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sint.</h3>
                        <h2>RS 100000</h2>
                        <p>Rating 4/5</p>
                  </div>
              </div>
          ))
        }
              
      </>
  )
}

export default CardDetails