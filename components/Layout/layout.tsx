import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const name = 'Kevin Nguyen'
export const siteTitle = 'kndwin.dev'

export default function Layout({ 
  children, 
  home 
} : {
  children: React.ReactNode,
  home?: boolean
}) {

  const {theme, setTheme} = useTheme()
  

  return (
    <div className={`${styles.container}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="kndwin.dev personal site"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <button onClick={() => setTheme('dark')}>
              Dark
            </button>
            <button onClick={() => setTheme('light')}>
              Light
            </button>
            <div className={styles.navLinks}>
              <Link href="/blog">
                <a>
                  Blog
                </a>
              </Link>
              <Link href="/projects">
                <a>
                  Projects
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
