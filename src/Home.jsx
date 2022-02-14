import React, { useState } from 'react'
import HomePage from './HomePage'
import NavBar from './NavBar';
import ProductData from './ProductData';
import './index.css';

const Home = () => {
    const [data, setData] = useState(ProductData)
  return (
      <>
        <NavBar/>
        <div className="main">
          {
            data.map((currentData) => {
              const id = currentData;
              return (
                <>
                <HomePage key={id} {...currentData}/>
                </>
              ) 
            })
          }
        </div>
      </>
  )
}

export default Home