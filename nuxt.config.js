const path = require('path');
const routes = require('./routes/index.js');

export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;700&display=swap',
      },
    ],
  },
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/scss/app.scss'],
  plugins: ['@/plugins/element-ui'],
  components: ['~/components/', '~/pages/'],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router-extras',
  ],
  tailwindcss: {
    configPath: './config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
  },
  routerExtras: {
    /* module options */
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-svgicon'],
  axios: {},
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
      },
    },
    transpile: [/^element-ui/],
  },
  router: {
    extendRoutes(nuxtRoutes, resolve) {
      routes.forEach(route => {
        nuxtRoutes.push({
          name: route.name,
          path: route.path,
          component: resolve(__dirname, route.component),
        });
      });
    },
  },
};
