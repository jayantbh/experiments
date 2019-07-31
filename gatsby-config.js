module.exports = {
  pathPrefix: '/experiments',
  siteMetadata: {
    name: `jayant.dev`,
    tagline: `A project showcasing a collection of experiments.`
  },
  plugins: [
	  {
		  resolve: `gatsby-plugin-sass`,
		  options: {
			  includePaths: ["src"],
        cssLoaderOptions: {
          camelCase: false,
        },
		  },
	  }, {
		  resolve: 'gatsby-plugin-resolve-src',
		  options: {
			  addSassLoader: false,
		  },
	  }, {
		  resolve: `gatsby-plugin-google-fonts`,
		  options: {
			  fonts: [
				  `Alegreya Sans SC\:400,500,500i`,
				  `KoHo\:300,400,500,600`,
				  `Lato\:300,400,700`
			  ]
		  }
	  }, {
		  resolve: `gatsby-plugin-react-css-modules`,
		  options: {
			  filetypes: {
				  ".scss": { syntax: `postcss-scss` },
			  },
			  exclude: `\/index\/`,
		  },
	  }, {
		  resolve: `gatsby-source-filesystem`,
		  options: {
			  name: `pages`,
			  path: `${__dirname}/src/pages/experiments`,
		  },
	  },
	  `gatsby-transformer-javascript-frontmatter`,
    `gatsby-plugin-typescript`,
	  `gatsby-plugin-react-helmet`,
    `gatsby-plugin-tslint`,
	  `gatsby-plugin-remove-trailing-slashes`,
	  `gatsby-plugin-svgr`
  ],
};
