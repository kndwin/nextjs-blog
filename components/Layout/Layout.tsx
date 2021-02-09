import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { faTwitter, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const siteTitle = 'kndwin.dev'

export default function Layout({ 
  children,
  page
} : {
  children: React.ReactNode,
  page?: string
}) {
  const [mounted, setMounted] = useState<boolean>(false)
  const {theme, setTheme} = useTheme()
	useEffect(() => {
		setMounted(true)
	},[])

  if (!mounted) {
    return null
  }

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
        <div className={styles.navLinks}>
          <Link href="/" >
            <a className={page == "home" ? styles.underline : ""}>kndwin</a>
          </Link>
          <Link href="/projects">
            <a className={page == "projects" ? styles.underline : ""}>projects</a>
          </Link>
        </div>
        <div className={styles.rightNav}>
          <label className={styles.switch}>
            <input type="checkbox"
							onClick={() => theme == 'light' ? setTheme('dark') : setTheme('light')}
            />
            <div className={`${styles.slider} ${styles.round}`}>
            </div>
          </label>
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
				<a href="https://twitter.com/kndwindev" target="_blank">
					<FontAwesomeIcon icon={faTwitter} 
						className={styles.icon} 
						id={styles.twitter}
						size='lg'/>
				</a>
				<a href="https://twitter.com/kndwindev" target="_blank">
					<FontAwesomeIcon icon={faYoutube} 
						className={styles.icon} 
						id={styles.youtube}
						size='lg' />
				</a>
				<a href="https://github.com/kndwin" target="_blank">
					<FontAwesomeIcon icon={faGithub} 
						className={styles.icon} 
						id={styles.github}
						size='lg' />
				</a>
				<a href="mailto:me@kndwin.dev" target="_blank">
					<FontAwesomeIcon icon={faEnvelope} 
						className={styles.icon} 
						id={styles.github}
						size='lg' />
				</a>
      </footer>
    </div>
  )
}
