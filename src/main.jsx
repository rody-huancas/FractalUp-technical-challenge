import React from 'react'
import ReactDOM from 'react-dom/client'
// apollo
import { ApolloProvider } from '@apollo/client'
// components
import App from './App.jsx'
// config
import { client } from './config/apollo-client.js'
// styles
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ApolloProvider client={client}>
     <App />
   </ApolloProvider>
  </React.StrictMode>,
)
