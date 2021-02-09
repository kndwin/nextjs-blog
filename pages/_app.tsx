import 'styles/global.scss'
import 'styles/gruvbox.scss'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
  ) 
}
