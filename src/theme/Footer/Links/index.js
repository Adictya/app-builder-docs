import React from 'react';
import { isMultiColumnFooterLinks } from '@docusaurus/theme-common';
import FooterLinksMultiColumn from '@theme/Footer/Links/MultiColumn';
import FooterLinksSimple from '@theme/Footer/Links/Simple';
import FooterLogo from '../Logo';
export default function FooterLinks({ links, contact }) {
  return <div className='row'>
    <div className='col col--5 footer__contact'>
      <ul className='footer__items clean-list'>
        <li className='footer__item'><FooterLogo logo={contact.textLogo} /></li>
        <li className='footer__item'> <FooterLogo logo={contact.logo} /></li>
        <li className='footer__item'> <a href={`tel:${contact.contactNumber}`} className='footer__link-item'>{contact.contactNumber}</a> </li>
        <li className='footer__item'><a href={`mailto:${contact.email}`} className='footer__link-item'> {contact.email} </a></li>
        <li className='footer__item'><span className='footer__link-item' dangerouslySetInnerHTML={{ __html: contact.address }} /> </li>

      </ul>
    </div>
    <div className='col col--6  footer__link'>  <FooterLinksMultiColumn columns={links} /></div>

  </div>
}
