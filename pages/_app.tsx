import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  )
}

export default MyApp
