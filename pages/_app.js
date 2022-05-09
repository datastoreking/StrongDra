import AppProps from 'next/app';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'

import Layout from '../components/Layout'
import '../styles/globals.scss'

//Font Awesome
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'


config.autoAddCss = false;


// Loader
Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());



function MyApp({ Component, pageProps, AppProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
