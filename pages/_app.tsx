import '../styles/globals.css'
import React, { Fragment, useEffect } from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
  return <Fragment>
    <Head>
      <title>Posts-example</title>
    </Head>
      <CssBaseline />
      <Component {...pageProps} />
  </Fragment>
}

export default MyApp;