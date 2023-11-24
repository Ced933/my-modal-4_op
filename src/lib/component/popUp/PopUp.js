import React from 'react';
import './PopUp.scss';

export default function PopUp(props) {  
  return (props.trigger)?(
    
     <div className='popup-container'>
        <div style={{opacity:props.opcityMainBg, backgroundColor:props.mainBgColor}} className='popup-bg'>
        </div>
        <div style={{backgroundColor:props.bgColorContainerModal}} className='popup-box'>
            <div onClick={() => props.setTrigger(false)} style={{backgroundColor:props.bgColorCross}} className='div-img-cross' >
                {/* <span className='span-cross'></span> */}
                <img className='cross-popup' src='./cross.png' />
            </div>
            <h2 style={{color:props.fontColor}}>{props.message}</h2>
        </div>
    </div>
    ) : ""
}
