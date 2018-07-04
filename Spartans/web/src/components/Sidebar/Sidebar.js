import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Sidebar.module.css';

const SideBar = props => (
  <Fragment>
    <div styleName="top-right-icon">
      <i className="material-icons">reorder</i>
    </div>
    <div styleName="bar">
      <div styleName="nav-container">
        <div styleName="nav-item" className={styles.navItemSelected}>
        <a href="/home">
          <i className="material-icons" styleName="largeIcon">
            home
          </i>
          </a>
        </div>
        <div styleName="nav-item" >
        <a href="/dashboard">
          <i className="material-icons" styleName="largeIcon">
          dashboard
          </i>
          </a>
        </div>
        <div styleName="nav-item">
        <a href="/search">
          <i className="material-icons" styleName="largeIcon">
            search
          </i>
          </a>
        </div>
        <div styleName="nav-item">
        <a href="/events">
          <i className="material-icons" styleName="largeIcon">
            launch
          </i>
          </a>
        </div>
      </div>
    </div>
  </Fragment>
);

export default CSSModules(SideBar, styles);
