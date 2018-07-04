import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Topbar.module.css';

const Topbar = props => (
  <div styleName="bar">
    <div styleName="logo">
    <img src={require('../../assets/img/vz-logo.png')}/> <h2 styleName="appname">Gamification Portal</h2>
    </div>
    <div styleName="bar-user-details">
      <div styleName="user-dp">
        <img src={require('../../assets/img/icon-login.png')} alt="My Pic" />
      </div>
      <div>
        <span styleName="user-name">Dyana Jesurathi</span>
        <i className="material-icons icons-fix">keyboard_arrow_down</i>
      </div>
    </div>
  </div>
);

export default CSSModules(Topbar, styles);
