import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
function Footer() {
  const { footer, } = useThemeConfig();
  const { siteConfig } = useDocusaurusContext();
  if (!footer) {
    return null;
  }
  const { copyright, logo, style, links } = footer;
  const { socialLinks, contactDetails } = siteConfig.customFields

  return (
    <FooterLayout
      style={style}
      socialLinks={socialLinks}
      links={links && links.length > 0 && <FooterLinks links={links} contact={contactDetails} />}
      copyright={copyright && <FooterCopyright copyright={copyright} />}
    />
  );
}
export default React.memo(Footer);
