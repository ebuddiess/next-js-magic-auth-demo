import {Fragment} from 'react'

import {AuthState} from '../context/AuthContext'


import Layout from '../componenets/Layout'

import Footer from '../componenets/Footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Fragment>  
       <AuthState>
       <Layout>
          <Component {...pageProps} /></Layout><Footer /> 
        </AuthState>
        </Fragment>
}

export default MyApp
