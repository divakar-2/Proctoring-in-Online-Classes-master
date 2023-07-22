import React from 'react';
import './Shome.css';

export const Profile =({onChange,src})=>{
  return(
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload" >
        <img htmlFor="photo-upload" src={src} alt=""/>
      </div>
      <input id="photo-upload" type="file"/> 
    </label>);
   
    }
    