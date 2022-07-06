import React from 'react';
import clsx from 'clsx';
import Icon from "@site/src/icons";
export default function FooterLayout({ style, links, logo, copyright, socialLinks }) {
  return (
    <>
      <footer
        className="footer">
        <div className="container container-fluid">
          {links}

        </div>

      </footer>
      {(copyright) && (
        <div className="footer__bottom ">
          <div className="footer__bottom-content" >
            <div className="footer__copyright ">
              {copyright}
            </div>
            <div className="footer__social ">
              {socialLinks.map(({ title, to }) =>
                <a
                  href={to}
                  target="_blank"
                  className="footer__social-icons"
                  key={title}
                >
                  <Icon name={title} />

                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
