import Vue from 'vue'
import App from './App'
import router from './router'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    // URL to graphql server, you should use an absolute URL here
    uri: 'http://localhost:3333/graphql'
})

// create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

// install the vue plugin
Vue.use(VueApollo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
