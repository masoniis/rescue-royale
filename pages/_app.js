import Layout from '../components/Layout'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider attribuute="class">
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  )
}

export default MyApp

