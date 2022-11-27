import React from 'react';
import "./Footer.css";
import FlagImage from './FlagImage.png'

 const Address =()=>{
    return(
    <div className="company-Presence">
        <h1>Our presence</h1>
        <p><img src={FlagImage} alt="flagImage"/></p>
        <p>
          Codon Software Private Limited 161/1, Road No: 13A Jubilee Hills
          Hyderabad 500033 INDIA
        </p>
      </div>
    )
 }

 export {Address}