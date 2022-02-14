import React from 'react';
import { Link } from 'react-router-dom';
import './style/homepage.css';

const HomePage = (props) => {
  return (
      <>
            <div className="cardDiv">
                <Link className="cardLink" to={`/product_details/${props.id}`}>
                    <div className="img">
                        <img src={props.image} alt="image1" />
                        <h2>{props.name}</h2>
                        <p>{props.desc.slice(0, 2)}...</p>
                        <h1>{props.price}</h1>
                    </div>
                </Link>
            </div>
      </>
  )
}

export default HomePage