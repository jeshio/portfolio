import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Jeshio Portfolio',
    siteUrl: 'https://www.yourdomain.tld',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    'gatsby-transformer-inline-svg',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 90,
          breakpoints: [360, 768, 1024, 1440],
          backgroundColor: 'transparent',
          blurredOptions: {
            placeholder: 'blurred',
          },
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: [
          'https://fonts.googleapis.com',
          'https://fonts.gstatic.com',
        ],
        web: [
          {
            name: 'Condiment',
            file: 'https://fonts.googleapis.com/css2?family=Condiment&display=swap',
          },
          {
            name: 'Courgette',
            file: 'https://fonts.googleapis.com/css2?family=Courgette&display=swap',
          },
          {
            name: 'Roboto',
            file: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap',
          },
          {
            name: 'Roboto Slab',
            file: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;700&display=swap',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@containers': path.resolve(__dirname, 'src/containers'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@helpers': path.resolve(__dirname, 'src/helpers'),
          '@configs': path.resolve(__dirname, 'src/configs'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        id: 'YOUR_GOOGLE_TAGMANAGER_ID',
        trackingIds: [],

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}

export default config
