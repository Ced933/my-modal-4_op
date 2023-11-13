import React, { useState } from 'react';
import './PopUp.scss';

export default function PopUp(props) {  
  return (props.trigger)?(
    
     <div className='popup-container'>
        <div className='popup-bg'>
        </div>
        <div className='popup-box'>
            <div onClick={() => props.setTrigger(false)} className='div-img-cross'>
                <span className='span-cross'></span>
            </div>
            <h2>{props.message}</h2>
        </div>
    </div>
    ) : ""
}
