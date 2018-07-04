import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Banner.module.css';

const Banner = props => (
  <div>
    <div styleName="banner">
      <div styleName="price-details">
        <p styleName="price">Your Ranking: {parseInt('30', 10).toLocaleString('en-IN')}</p>
      </div>
      <p styleName="addtional-details">       
        <span styleName="value">
        </span>
      </p>
      <img src={require('../../assets/img/download.jpg')} /> 
    </div>
  </div>
);

export default CSSModules(Banner, styles);
