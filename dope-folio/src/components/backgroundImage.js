import React from 'react';
import IslamabadBackground from '../images/Islamabad-background.jpg';



function BackgroundImage() {
  return (
    <div className="BackgroundImage">
      <img src={IslamabadBackground} alt='Background' />
    </div>
  );
}

export default BackgroundImage;