import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div className='location-background'>
        <img src='Images/map.png' className='map'/>
        <div className='location-box'>
            <span className='medium-text' id='location-heading'>LOCATION</span>
            <div className='white-box'></div>
            <div className='text' id='address'>12 Upper St. Martin’s Lane WC2H 9FB, London</div>
            <img src='Images/location-icon.svg' id='location-icon'/>
        </div>
        <div className='zoom-section'>
              <div className='zoom-button'>+</div>
              <div id='divider'></div>
              <div className='zoom-button'>-</div>
            </div>
    </div>
  )
}

export default Location
