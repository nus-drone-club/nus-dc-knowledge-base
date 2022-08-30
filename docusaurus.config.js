// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NUS Drone Club Knowledge Base',
  tagline: 'Here is where we keep our technical details and tutorials.',
  url: 'https://github.com',
  baseUrl: '/nus-dc-knowledge-base/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nus-drone-club', // Usually your GitHub org/user name.
  projectName: 'nus-dc-knowledge-base', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // nus-drone-club/nus-drone-club.github.io

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nus-drone-club/nus-dc-knowledge-base/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nus-drone-club/nus-dc-knowledge-base/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NUS Drone Club',
        logo: {
          alt: 'My Site Logo',
          src: 'img/official-drone-club-logo.jpg',
        },
      
        items: [
          {
            type: 'doc',
            docId: 'hardware/hardware-intro',
            position: 'left',
            label: 'Hardware',
          },
          {
            type: 'doc',
            docId: 'software/software-intro',
            position: 'left',
            label: 'Software',
          },
          {
            type: 'doc',
            docId: 'docu-tutorials/intro',
            position: 'left',
            label: 'Docusaurus Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'about/about-us',
            position: 'left',
            label: 'About Us',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Hardware',
                to: '/docs/hardware/hardware-intro',
              },
              {
                label: 'Software',
                to: '/docs/software/software-intro',
              },
              {
                label: 'Docusaurus Tutorial',
                to: '/docs/docu-tutorials/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+NPZTszZM159lMDhl',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/droneclubnus/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/droneclubnus/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nusdroneclub',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NUS Drone Club. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
