const siteUrl =
process.env.GATSBY_SITE_URL ||
(process.env.CONTEXT === "production"
  ? process.env.URL
  : process.env.DEPLOY_PRIME_URL);


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Adapt Gatsby Starter",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
