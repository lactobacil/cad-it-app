import React from 'react';
import CADIT from '../Images/cadit.jpg';
import './logo.css';


const Logo: React.FC = () => {
  return (
    <>
     <img src={CADIT} className='Logo' ></img>
    </>
  )
}

export default Logo;