import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Portfolio.module.css';


//import PortfolioItem from '../PortfolioItem/PortfolioItem';
import todoComponent from './PortfolioApi';

var fakePortfolioData = [];


var Portfolio = props => (
  <div>
    <div styleName="header">
      <div>
      TODO NOTES
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
        ACTION
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
    </div>
    <div styleName="contain-body">
    <div id="todoElement"></div>
     </div>
  </div>
);


export default CSSModules(Portfolio, styles);
