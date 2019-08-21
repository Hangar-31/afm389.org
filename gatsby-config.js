module.exports = {
  siteMetadata: {
    title: "Central Florida Musicians' Association",
    description: "[]",
    author: "Hangar 31 Development",
    siteUrl: "https://afm389.org",
    social: [
      {
        name: "facebook",
        url: "[]"
      }
    ]
  },
  plugins: [
    // File sourcing into Gatsby for use with Gatsby Node API
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
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
    // Creates a manifest for the website
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "[]",
        short_name: "[]",
        start_url: "/",
        background_color: "[]",
        theme_color: "[]",
        display: "minimal-ui",
        icon: "src/images/logos/cfma-logo-orlando-florida.png"
      }
    },
    // Loads web fonts from Google as specified
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto Slab", "Sarpanch", "Staatliches", "Assistant"]
        }
      }
    },
    // Makes field "markdownRemark" queryable
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600
            }
          }
        ]
      }
    },
    // Emotion plugin for Gatsby
    `gatsby-plugin-emotion`,

    // Netlify CMS
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify",

    // Netlify Caching
    "gatsby-plugin-netlify-cache",

    // Robots TXT
    "gatsby-plugin-robots-txt",

    // Creates a Service Worker for offline use
    "gatsby-plugin-offline",

    // Allows the use of react-helmet within Gatsby
    "gatsby-plugin-react-helmet",

    // Creates ImageSharp nodes for image manipulation within GraphQL queries
    "gatsby-transformer-sharp",

    // Gives additional image processing functions
    "gatsby-plugin-sharp",

    // Gatsby Plugin for linting -- Using AirBNB
    "gatsby-plugin-eslint"
  ]
};
