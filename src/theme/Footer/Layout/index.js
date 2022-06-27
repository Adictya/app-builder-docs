import React from 'react';
import clsx from 'clsx';
import Icon from "@site/src/icons";
export default function FooterLayout({style, links, logo, copyright,socialLinks}) {
  return (
    <footer
      className="footer">
      <div className="container container-fluid">
        {links}
        {(copyright) && (
          <div className="footer__bottom">
           {copyright} 
           <div className="footer__social">
           {socialLinks.map( ({title,to}) =>
            <a
            href={to}
            target="_blank"
            className="footer__social-icons" 
            >
            <Icon name={title}  />
           
          </a>
           )}
           </div>
          </div>
        )}
      </div>
    </footer>
  );
}
