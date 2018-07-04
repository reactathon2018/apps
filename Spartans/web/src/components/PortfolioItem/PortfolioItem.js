import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PortfolioItem.module.css';

import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { WSAEINVALIDPROCTABLE } from 'constants';

var PortfolioItem = props => (
  <div styleName="container">
    <div styleName="type-name">
      <div styleName="profile-icon">
        <ProfileIcon name={props.data.item} />
      </div>
      <div> {props.data.item}</div>
      <div styleName="profile-icon"><input type="button" value="Take Action" name="Take Action"/></div>
    </div>
  </div>
);

export default CSSModules(PortfolioItem, styles);
