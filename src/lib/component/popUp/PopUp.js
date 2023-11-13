import React, { useState } from 'react';
import './PopUp.scss';

export default function PopUp(props) {  
  return (props.trigger)?(
    
     <div className='popup-container'>
        <div className='popup-bg'>
        </div>
        <div className='popup-box'>
            <div onClick={() => props.setTrigger(false)} className='div-img-cross'>
                <img className='img-cross' src='./signe-de-la-croix.png' />
            </div>
            <h2>Employee Created</h2>
        </div>
    </div>
    ) : ""
}
