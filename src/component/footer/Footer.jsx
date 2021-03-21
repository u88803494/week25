// region 1. Platform Libraries
import React from 'react';
// end-region

// region U. UI Markups
import './Footer.css';
// end-region

const Footer = () => (
  <footer className="footer">
    <div className="footer__body">
      <div className="footer_owner">
        Made with
        <span className="footer__icon"> ♥ </span>
        by
        <a
          href="https://github.com/u88803494"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' hugh'}
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
