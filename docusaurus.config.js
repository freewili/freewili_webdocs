// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FREE-WILi',
  tagline: 'Documentation',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.freewili.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'freewili', // Usually your GitHub org/user name.
  projectName: 'FreeWili_WebDocs', // Usually your repo name.

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  onBrokenLinks: 'ignore',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: true, // Set global trailingSlash configuration 

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: false, // Hide the author's name
          showLastUpdateTime: true, // Show the exact time of the last update
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/freewili/FreeWili_WebDocs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL',
          // includeFuture: true,
          sortPosts: 'descending',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/freewili/freewili_webdocs/blob/main/',
        },
        // blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/test/**', '/markdown-page/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/freewili-social-card.jpg',
      navbar: {
        // title: 'FREE-WILi',
        logo: {
          alt: 'FREE-WILi_Logo',
          // src: 'img/logo.svg',
          src: '/img/logo-new.svg',
          srcDark: '/img/logo-dark-new.svg',
          // href: '#',
          target: '_self',
          // style: {border: 'solid red'},
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },    
          {
            href: 'https://freewili.com/',
            label: 'Website',
            position: 'left',
            className: 'nav-link',
          },
          {
            href: 'https://docs.freewili.com/blog/',
            label: 'Blog',
            position: 'left',
            className: 'nav-link',
            target: '_self',
          },
          // {
          //   href: 'https://whaletail.freewili.com/',
          //   label: 'Whale-Tail Badge Documentation',
          //   position: 'left',
          //   className: 'nav-link',
          //   target: '_self',
          // },
          {
            type: 'dropdown',
            label: 'Products',
            position: 'left',
            items: [
              {
                label: 'FREE-WILi',
                href: 'https://freewili.com/products/freewili/',
                target: '_blank',
              },
              {
                label: 'Orca Modules',
                href: 'https://freewili.com/products/orca-modules/',
                target: '_blank',
              },
              {
                label: 'Whale Tail',
                href: 'https://freewili.com/products/whale-tail/',
                target: '_blank',
              },
            ],
          },

          {
            href: 'https://github.com/freewili/FreeWili_WebDocs/tree/main',
            label: 'GitHub',
            position: 'right',
          },

          // {
          //   type: 'html',
          //   value: '<a href="https://github.com/freewili/FreeWili_WebDocs/tree/main" target="_blank"><img src="/img/github-light.svg" alt="freewili" width="27" height="27" /></a>',
          //   position: 'right',
          // },

          // {
          //   type: 'search',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Follow Us',
            items: [
              {
                html: `
                    <a href="https://www.facebook.com/FREEWILIOrca/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a> <a href="https://www.facebook.com/FREEWILIOrca/" target="_blank" rel="noopener noreferrer">Facebook</a>
                `,
              },
              {
                html: `
                    <a href="https://www.instagram.com/free_wili_/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a> <a href="https://www.instagram.com/free_wili_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                `,
              },
              {
                html: `
                    <a href="https://www.linkedin.com/company/freewili/about/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a> <a href="https://www.linkedin.com/company/freewili/about/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                `,
              },
              // {
              //   html: `
              //       <a href="https://x.com/FREE_WiLi_" target="_blank" rel="noopener noreferrer"><img src="/img/x-twitter.svg" alt="Twitter Icon" class="x-twitter"></a> <a href="https://x.com/FREE_WiLi_" target="_blank" rel="noopener noreferrer">Twitter</a>
              //   `,
              // },
              {
                html: `<a href="https://x.com/FREE_WiLi_" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a> <a href="https://x.com/FREE_WiLi_" target="_blank" rel="noopener noreferrer">Twitter</a>`,
              },
              {
                html: `
                    <a href="https://www.youtube.com/channel/UCSx1CmqjhiaWd3I42zJyuDw" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a> <a href="https://www.youtube.com/channel/UCSx1CmqjhiaWd3I42zJyuDw" target="_blank" rel="noopener noreferrer">YouTube</a>
                `,
              },

            ],
          },
          {
            title: 'Company',
            items: [

              // {
              //   html: `
              //       <a href="https://freewili.com/" target="_blank" rel="noreferrer noopener" aria-label="freewili">
              //         <img src="/img/freewili-social-card.jpg" alt="freewili" width="114" height="auto" />
              //       </a>
              //     `,
              // },

              {
                label: 'About FREE-WILi',
                href: 'https://freewili.com/products/freewili/',
              },
              {
                label: 'Helpful Links',
                to: '/helpful-links/',
              },
              {
                label: 'FREE-WILi Discord',
                href: 'https://discord.com/invite/XJRBUCX62z',
              },
              {
                label: 'Contact Us',
                href: 'https://freewili.com/contact-us/',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     // {
          //     //   html: `
          //     //       <a href="https://freewili.com/" target="_blank" rel="noreferrer noopener" aria-label="freewili">
          //     //         <img src="/img/freewili-social-card.jpg" alt="freewili" width="114" height="auto" />
          //     //       </a>
          //     //     `,
          //     // },
          //   ],
          // },

        ],

        logo: {
          alt: 'FREE-WILi',
          src: '/img/FREE-WILi_trans_logo.svg',
          href: 'https://freewili.com/',
          width: 180,
          // height: 150,
          // className: 'test-img',
          target: '_blank', // Open in a new tab
        },

        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://freewili.com/" class="freewili-link"> FREE-WILi, Inc.</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      announcementBar: {
        id: 'freewili',
        content:
          '<img width="13.60px" height="13.60px" src="https://img.icons8.com/ios-filled/50/FFFFFF/rocket.png" alt="rocket"/> We have released a new firmware update!  <a target="_blank" rel="noopener noreferrer" href="https://github.com/freewili/freewili-firmware">Check it out on GitHub</a> and get the latest version now.',
        // backgroundColor: '#ef393e',
        backgroundColor: '#B11111',
        textColor: '#fff',
        isCloseable: true,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },

      // metadata: [
      //   {name: 'description', content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.'},
      //   {name: 'keywords', content: 'freewili, FREE-WiLi, GPIO, GUI, Orcas, UART'},

      //   // Open Graph metadata
      //   {property: 'og:title', content: 'FREE-WiLi Documentation'},
      //   {property: 'og:description', content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.'},
      //   {property: 'og:image', content: 'https://docs.freewili.com/img/freewili-social-card.jpg'},
      //   {property: 'og:url', content: 'https://docs.freewili.com/'},
      //   {property: 'og:type', content: 'website'},

      //   // Twitter metadata
      //   {name: 'twitter:card', content: 'summary_large_image'},
      //   {name: 'twitter:title', content: 'FREE-WiLi Documentation'},
      //   {name: 'twitter:description', content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.'},
      //   {name: 'twitter:image', content: 'https://docs.freewili.com/img/freewili-social-card.jpg'},
      //   {name: 'twitter:site', content: '@FREEWiL_i'},

      // ], 

      // head: [
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       name: 'description',
      //       content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:title',
      //       content: 'FREE-WiLi Documentation',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:description',
      //       content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:image',
      //       content: 'https://docs.freewili.com/img/freewili-social-card.jpg',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:url',
      //       content: 'https://docs.freewili.com/',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:type',
      //       content: 'website',
      //     },
      //   },
      // ],

      // metadata: [{name: 'twitter:card', content: 'summary'}],

      // ==================================above=one=is=old====================================================================

      // ==================================below=one=is=new=but=commented==================================================================

      //   metadata: [
      //     { name: 'description', content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.' },
      //     { name: 'keywords', content: 'freewili, FREE-WiLi, GPIO, GUI, Orcas, UART' },
      //     { property: 'og:title', content: 'FREE-WiLi Documentation' },
      //     { property: 'og:description', content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.' },
      //     { property: 'og:image', content: 'https://docs.freewili.com/img/freewili-social-card.jpg' },
      //     { property: 'og:url', content: 'https://docs.freewili.com/' },
      //     { property: 'og:type', content: 'website' },
      //   ],
      // }),
      // headTags: [
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       name: 'description',
      //       content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:title',
      //       content: 'FREE-WiLi Documentation',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:description',
      //       content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:image',
      //       content: 'https://docs.freewili.com/img/freewili-social-card.jpg',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:url',
      //       content: 'https://docs.freewili.com/',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       property: 'og:type',
      //       content: 'website',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       name: 'twitter:card',
      //       content: 'summary_large_image',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       name: 'twitter:title',
      //       content: 'FREE-WiLi Documentation',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       name: 'twitter:description',
      //       content: 'FREE-WiLi is an embedded development tool for helping test, debug, and develop electronic systems.',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       name: 'twitter:image',
      //       content: 'https://docs.freewili.com/img/freewili-social-card.jpg',
      //     },
      //   },
      //   {
      //     tagName: 'meta',
      //     attributes: {
      //       name: 'twitter:site',
      //       content: '@FREEWiL_i',
      //     },
      //   },
      // ],

      // metadata: [
      //     {name: 'description', content: 'FREE-WILi is an embedded development tool for helping test, debug, and develop electronic systems.'},
      //     {name: 'keywords', content: 'freewili, freewili documentation, FREE-WILi, GPIO, GUI, Orcas, UART, documentation'},
      // ]
    }),

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        // languages: ['en'], // Specify the languages, e.g., ['en', 'de']
        indexBaseUrl: true, // Whether to index base URLs
        // excludeRoutes: ['!docs/my-excluded-doc'], // Routes to exclude from indexing
      },
    ],
  ],
  scripts: [
    {
      src: '/js/zoom.js',
      async: true,
    },
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-16x16.png',
        sizes: '16x16',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-32x32.png',
        sizes: '32x32',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-180x180.png',
        sizes: '180x180',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-192x192.png',
        sizes: '192x192',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-512x512.png',
        sizes: '512x512',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
        'data-rh': 'true',
      },
    },
  ],
};

export default config;
