import React from 'react';
import NavBar from './NavBar';
import './style/notfound.css';

const NotFound = () => {
  return (
      <>
        <NavBar/>
        <div className="notFound">
          <h1>Error <span>404</span> | Page not found</h1>
        </div>
      </>
  )
}

export default NotFound