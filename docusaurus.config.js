// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'App Builder Docs',
  tagline: 'Agora App Builder for Live Video Chat & Streaming Apps',
  url: 'https://app-builder-docs.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AgoraIO-Community', // Usually your GitHub org/user name.
  projectName: 'app-builder-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-KNSXGMLE89',
      async: true
    }
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      }
    ],
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/AgoraIO-Community/app-builder-docs/tree/master',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-KNSXGMLE89',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,

      },
      tableOfContents: {
        maxHeadingLevel: 2
      },
      algolia: {
        apiKey: '0c7bfdbfe8f9ab67ce04621ab1c1abd8',
        indexName: 'dev_APPBUILDER',
        contextualSearch: true,
        placeholder: 'Search',
        appId: 'RDJ5H7PYFS',
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          target: '_self',
        },

      },
      footer: {

        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Setup',
                to: '/',
              },
              {
                label: 'Quickstart',
                to: '/',
              },
              {
                label: 'Guides',
                to: '/first-party-extension/guides',
              },
              {
                label: 'API Refernces',
                to: '/first-party-extension/api-reference',
              },
            ],
          },

          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                to: 'https://www.agora.io/en/',
              },
              {
                label: 'Contact Us',
                to: 'https://www.agora.io/en/',
              },
              {
                label: 'Careers',
                to: 'https://www.agora.io/en/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Code of Conduct',
                to: 'https://www.agora.io/en/',
              },
              {
                label: 'Blog',
                to: 'https://www.agora.io/en/',
              },
              {
                label: 'Support Plans',
                to: 'https://www.agora.io/en/',
              },
              {
                label: 'Talk to Us',
                to: 'https://www.agora.io/en/',
              },
              {
                label: 'Developer Resources',
                to: 'https://www.agora.io/en/',
              },
            ],
          },

        ],
        copyright: `© ${new Date().getFullYear()} Agora.io,Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  customFields: {

    contactDetails: {
      textLogo: {
        src: "/img/agora-logo-text.svg",
        alt: 'Agora',
        width: '100px',
        height: 'auto',
        href: 'https://www.agora.io/en/',

      },
      logo: {
        src: "/img/logo-dark.svg",
        alt: 'App Builder',
        width: '120px',
        height: 'auto',
        href: 'https://appbuilder.agora.io/'

      },
      contactNumber: "+1 408 879 5885",
      email: "contact@agora.io",
      address: `2804 Mission College Blvd <br/> 
                Santa Clara, CA, USA 95054`,
    },

    socialLinks: [
      {
        title: 'facebook',
        to: 'https://www.facebook.com/AgoraIO/'
      },
      {
        title: 'instagram',
        to: 'https://www.instagram.com/agora.io/'
      },
      {
        title: 'linkedin',
        to: 'https://www.linkedin.com/company/agora-lab-inc/'
      },

      {
        title: 'twitter',
        to: 'https://twitter.com/AgoraIO'
      },


    ],

  }
};

module.exports = config;
