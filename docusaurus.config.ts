import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Turboship Carriers',
  tagline: 'Centro de documentacion y changelog para carriers de Turboship.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://carriers.turboship.mx',
  baseUrl: '/',

  organizationName: 'turboship-mx',
  projectName: 'carriers.turboship.mx',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          routeBasePath: 'newsletter',
          blogTitle: 'Newsletter Carriers',
          blogDescription:
            'Actualizaciones de producto, integraciones y operacion para carriers Turboship.',
          blogSidebarTitle: 'Changelog reciente',
          blogSidebarCount: 10,
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/turboship-social.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Turboship Carriers',
      logo: {
        alt: 'Turboship Carriers Logo',
        src: 'img/logo-light-mode.svg',
        srcDark: 'img/logo-dark-mode.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentacion',
        },
        {to: '/newsletter', label: 'Newsletter', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portal',
          items: [
            {label: 'Inicio', to: '/'},
            {
              label: 'Documentacion',
              to: '/docs/intro',
            },
            {label: 'Newsletter', to: '/newsletter'},
          ],
        },
        {
          title: 'Secciones',
          items: [
            {
              label: 'Introduccion',
              to: '/docs/intro',
            },
            {
              label: 'Plataforma',
              to: '/docs/plataforma/introduccion',
            },
            {
              label: 'Mercado Pago',
              to: '/docs/integraciones/mercadopago',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacidad',
              href: 'https://carriers.turboship.mx/privacidad',
            },
            {
              label: 'Terminos',
              href: 'https://carriers.turboship.mx/terminos',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Turboship.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
