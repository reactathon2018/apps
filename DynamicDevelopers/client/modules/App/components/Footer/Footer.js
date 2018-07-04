import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2018 &middot; Varizon &middot; Career Portal Inc.</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@Dynamic" target="_Blank">@Dynamic</a></p>
    </div>
  );
}

export default Footer;
