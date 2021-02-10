module.exports = {
  siteMetadata: {
    title: "Central Florida Musicians' Association",
    description: "[]",
    author: "Hangar 31 Development",
    siteUrl: "https://afm389.org"
  },
  plugins: [
    // File sourcing into Gatsby for use with Gatsby Node API
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    // Creates a manifest for the website
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Central Florida Musicians' Association",
        short_name: "CFMA",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#6DA55F",
        display: "minimal-ui",
        icon: "src/images/logos/cfma-logo-orlando-florida.png"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news-and-articles`,
        path: `${__dirname}/static/news-and-articles`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `${__dirname}/static/testimonials`
      }
    },

    // Prefetch Google Fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto Slab`, `Sarpanch`, `Staatliches`, `Assistant`]
      }
    },
    // Makes field "markdownRemark" queryable
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
      }
    },
    // Sitemap
    "gatsby-plugin-advanced-sitemap",

    // Helmet plugin
    "gatsby-plugin-react-helmet",
    // Netlify CMS
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify",

    // Netlify Caching
    "gatsby-plugin-netlify-cache",

    // Robots TXT
    "gatsby-plugin-robots-txt",

    // Creates a Service Worker for offline use
    "gatsby-plugin-offline",

    // Creates ImageSharp nodes for image manipulation within GraphQL queries
    "gatsby-transformer-sharp",

    // Gives additional image processing functions
    "gatsby-plugin-sharp",

    // Gatsby Plugin for linting -- Using AirBNB
    "gatsby-plugin-eslint",

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146527665-1"
      }
    }
  ]
};
