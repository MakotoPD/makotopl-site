module.exports = {
  siteMetadata: {
    title: "Makoto. - Logos, Banners, Websites",
    description:
      "Website, Makoto, MakotoPL, MakotoPD, logo, banner, strony internetowe, strony, internetowe, internet",
    url: "https://makoto.pl", // No trailing slash allowed!
    image: "/images/banner.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@makotopl",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "a594c3e014d48a4ec752f6c0f8ff4f",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-remark-embed-youtube",
    "gatsby-transformer-remark",
    "gatsby-image",
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Poppins',
            weights: ['100...900']
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
          defaults: {
              formats: [
                  `auto`,
                  `webp`,
              ],
              quality: 100,
              placeholder: "blurred",
          },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")],
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://makoto.us1.list-manage.com/subscribe/post?u=87fcbbe62d4a8af42c908c1eb&amp;id=e0d95b36fa', // string; add your MC list endpoint here; see instructions below
          timeout: 1000, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'blackboard'
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Makoto. - Website`,
        start_url: `/`,
        theme_color: `#0091ff`,
        icon: `src/images/favicon.png`,
        display: `standalone`,
        
      },
    },
  ],
};
