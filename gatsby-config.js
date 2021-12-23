module.exports = {
  siteMetadata: {
    title: `Merada`,
    description: `We build digital solutions for small - and large companies`,
    author: `@merada`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Merada homepage`,
        short_name: `Merada`,
        start_url: `/`,
        background_color: `#0d1d39`,
        theme_color: `#0d1d39`,
        display: `standalone`,
        icon: `src/images/Favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        stripHash: true,
        duration: 500,
      },
    },
  ],
}
