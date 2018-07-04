import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Tabbar.module.css';

const TabBar = props => (
  <div styleName="container">
    <h4 styleName="header">Next is your turn, Checkout!!!</h4>
    <div styleName="tab-bar">
    <div styleName="tab" className={styles.selectedTab}>ToDo</div>
      <div styleName="tab">Upcoming Events</div>
      <div styleName="tab">Search</div>
      <div styleName="tab">Badge</div>
      <div styleName="tab">Recent Activites</div>
    </div>
  </div>
);

export default CSSModules(TabBar, styles);
