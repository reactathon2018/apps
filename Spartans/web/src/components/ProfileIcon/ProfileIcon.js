import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './ProfileIcon.module.css';
import { getRandomColor } from '../../utils/color';

var ProfileIcon = ({ item = 'O' }) => {
  return (
    <div styleName="icon" style={{ backgroundColor: getRandomColor() }}>
      <span> {item[0]}</span>
    </div>
  );
};
export default CSSModules(ProfileIcon, styles);
