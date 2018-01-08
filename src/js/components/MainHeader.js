import React from 'react';
import Radium, { StyleRoot } from 'radium';
import { slideInDown, slideInUp, fadeIn } from 'react-animations';

const styles = {
  slideInDown: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInDown, 'slideInDown')
  },
  slideInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp')
  },
  fadeIn: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

const MainHeader = () => {
  return (
    <div className='jumbotron MainHeader-rem-padding'>
      <StyleRoot style={styles.fadeIn}>
        <h1
          className='display-4 alegreya-font text-center margin-bottom-2-rem'
          style={styles.slideInDown}>
          Origin Weather Application
        </h1>
        <p
          className='lead text-center font-weight-light text-white font-italic'
          style={styles.slideInUp}>
          Always know if you'll need an umbrella
        </p>
      </StyleRoot>
    </div>
  );
};

export default MainHeader;
