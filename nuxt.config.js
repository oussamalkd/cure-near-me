import Home from '@nuxt/http'

require('dotenv').config
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
   ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cure Near Me',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      // { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {  name:'google-signin-scope", content:"profile email' },
      // <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      { rel: 'preconnect', href: '/css/fontstyle.css'},
      { rel: 'stylesheet', href: '/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css'},
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css'},
      { rel: 'stylesheet', href: '/css/style.css'},
      { rel: 'stylesheet', href: '/css/responsive.css'},
      { rel: 'stylesheet', href: '/css/custom.css', defer:true },
      { rel: 'stylesheet', href: '/css/menu-style.css'},
      { rel: 'stylesheet', href: '/css/jquery.mCustomScrollbar.min.css'},
      { rel: 'stylesheet', href: '/css/iziToast.css'},
    ],
    script: [
      { src: '/js/fontawsome_solid.js', defer:true},
      { src: '/js/fontawesome.js', defer:true},
      { src: '/js/bootsrap.min.js', body:true},
      { src: '/js/jquery.min.js', body:true},
      { src: '/js/jquery_mcustomScrollbar.min.js', body:true},
      { src: '/js/ajax_popper.min.js', body:true},
      { src: '/js/bootsrap3.3.7.js', body:true},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', body:true},
      {
        src: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=ABC123DUMMY456KEY789`,
        body: true
      },      { src: '/js/iziToast.js', body:true},
      { src: '/js/parsley.js', body:true},
      { src: 'https://apis.google.com/js/platform.js', async:true, body:true},
      { src: 'https://accounts.google.com/gsi/client', body:true},
      
      // { src: '/js/custom.js', body:true},
      ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-select.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxt/typescript-build'],
  /*vite: {
   server: {
        host: "localhost",
        port: 3000,
        proxy: {
          "/": {
            target: "http://127.0.0.1:8000/api",
            changeOrigin: true,
          },
        },
        hmr: { overlay: false },
      },
},*/
  // Modules: https://go.nuxtjs.dev/config-modules
  
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
    'vue-toastification/nuxt',
    'cookie-universal-nuxt',
    '@nuxt/http',
    '@nuxtjs/pwa',
     ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],
  axios: {
    proxy: true,
    baseURL: process.env.API_URL,
    },
    pwa: {
    // https://pwa.nuxtjs.org/manifest
    // Manifest adds Web App Manifest with no pain.
    manifest: {
      name: "Cure Near Me",
      short_name: "CureNearMe",
      description: "One Stop solutions for all medical needs3",
      theme_color: "#FFF",
      lang: "en",
      background_color: "#FFF",
      display: "fullscreen",
    },
    // https://pwa.nuxtjs.org/icon
    icon: {
      fileName: 'logo.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    // https://pwa.nuxtjs.org/meta
    // Meta easily adds common meta tags into your project with zero-config needed. 
    meta: {
      name: "Cure Near Me",
      description: "One Stop solutions for all medical needs",
      theme_color: "#FFF",
      nativeUi: true,
      appleStatusBarStyle: "black",
      mobileAppIOS: true,
    },
  },
 /* proxy: {
      "/api": "https://127.0.0.1:8000"
    },*/
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: process.env.API_BASE_URL+'login', method: 'post',propertyName: 'token' },
          register: { url: process.env.API_BASE_URL+'register', method: 'post' },
          logout: { url: process.env.API_BASE_URL+'logout', method: 'get' },
          user: { url: process.env.API_BASE_URL+'user', method: 'get' },
          login_with_mobile: { url: process.env.API_BASE_URL + 'login_with_mobile', method: 'post' }
        }
      }
    },
    redirect:{
      login:'/',
      register:'/register',
      logout:'/'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'defu','vue-toastification'
    ]
  },
  /*build: {
    transpile: [
      'defu','vue-toastification'
    ],
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
  runtimeConfig: {
   API_BASE_URL: process.env.API_BASE_URL,
  },*/

  router: {
    routes: [
      {
        path: '/',
        component: Home,
        cache: {
          maxAge: 31536000
        }
      }
    ]
  },
  // serverMiddleware: [
  //   {
  //     path: '/',
  //     handler: headers
  //   }
  // ],
}
