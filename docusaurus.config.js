/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Animalia DS",
  tagline: "Design System da TOTVS",
  onBrokenLinks: "log",
  i18n: {
    defaultLocale: "pt",
    locales: ["en", "pt"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
      },
      pt: {
        label: "Português",
        direction: "ltr",
      },
    },
  },
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "animaliads", // Usually your GitHub org/user name.
  projectName: "animalia-doc", // Usually your repo name.
  url: "https://doc.animaliads.io/",
  baseUrl: "/",
  themeConfig: {
    hotjar: {
      applicationId: 2903615,
    },
    navbar: {
      logo: {
        alt: "Animalia DS Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        {
          to: "/",
          label: "Página Inicial",
          position: "left",
          activeBaseRegex: `^/$`,
        },
        {
          type: "doc",
          docId: "components/button",
          position: "left",
          label: "Componentes",
        },
        {
          type: "doc",
          docId: "patterns/intro",
          position: "left",
          label: "Comportamentos",
        },
        {
          type: "doc",
          docId: "foundation/intro",
          position: "left",
          label: "Estilos",
        },
        {
          type: "doc",
          docId: "about/intro",
          position: "left",
          label: "Sobre",
        },
        {
          type: "doc",
          docId: "guideline/intro",
          position: "left",
          label: "Guia",
        },
        {
          type: "doc",
          docId: "designtokens/designtokens",
          position: "left",
          label: "Tokens",
        },
        {
          type: "search",
          position: "right",
        },

        //{to: '/blog', label: 'Blog', position: 'left'},
        // ... more items
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Primeiros passos",
          items: [
            {
              label: "Para Designers",
              to: "/docs/about/getting-started-design",
            },
            {
              label: "Para Devs",
              to: "/docs/about/getting-started",
            },
            {
              label: "Guia de Contribuição",
              to: "/docs/about/contribution-guide",
            },
          ],
        },
        {
          title: "Links úteis",
          items: [
            {
              label: "Repositório no Github",
              href: "https://github.com/animaliads",
            },
            {
              label: "API no Storybook",
              href: "http://animaliads.io/?path=/docs/api-button--sample",
            },
            {
              label: "Biblioteca no Figma",
              href: "https://www.figma.com/@animaliads",
            },
          ],
        },
        {
          title: "Outros",
          items: [
            {
              label: "Changelog",
              to: "/docs/about/changelog",
            },
            {
              label: "Princípios do Animalia",
              to: "/docs/about/principles",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Animalia Design System 🦎.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: "G-TCSRHFEBXF",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-hotjar"],
  scripts: [{ src: "/js/mix-script.js", async: false }],
};
