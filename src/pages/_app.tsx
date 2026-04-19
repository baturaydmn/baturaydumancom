import type { AppProps } from 'next/app'
import Script from 'next/script'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../contexts/ThemeContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-62VQTYKTQ3"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-62VQTYKTQ3');
          `}
        </Script>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  )
}
