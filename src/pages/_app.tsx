import '~/styles/globals.css'

import { Inter as FontSans } from '@next/font/google'
import type { AppProps } from 'next/app'

const fontSans = FontSans({ variable: '--font-sans', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${fontSans.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </main>
  )
}
