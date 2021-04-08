import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Layout, { siteTitle } from 'components/Layout/Layout'
import utilStyles from 'styles/utils.module.css'
import styles from './projects.module.scss'
import Browser from 'components/Browser/Browser'
import { GetStaticProps } from 'next'

export default function Projects({
  allProjectsData
}: {
  allProjectsData: {
    type: string
    name: string
    tags: {
      src: string
      iconSrc: string
    }[]
    linkToDemo: string
    linkToSourceCode: string
    shortDescription: string
  }[]
}) {

  const [mounted, setMounted] = useState<boolean>(false)
  const {theme, setTheme} = useTheme()
	useEffect(() => {
		setMounted(true)
	},[])

  if (!mounted) {
    return null
  }
  const projectByType = (_type: string) => {
    return (
      <div>
        <h1 className={styles.h1}>{_type}</h1>
        {allProjectsData
          .filter(({type}) => _type === type)
          .map(({name, tags, linkToDemo, linkToSourceCode, shortDescription}) => (
						<Browser url={linkToDemo}>
							<div className={styles.title}>
								{`${name}`}
							</div>
							<div className={styles.description}>
								{`${shortDescription}`}
							</div>
              {/*** 
								<img src={screenshot} 
									className={styles.screenshot}
									alt={shortDescription} />
              ***/}

							<div className={styles.bottom}>
								<div className={styles.tags}>
								{tags.map(tag => (
                  <a href={tag.src} target="blank">
                    <img className={`${theme == 'dark' ? styles.tagLight : ""} 
                      ${styles.tag}`}
                      src={tag.iconSrc} />
                  </a>
								))}
								</div>
								<div className={styles.buttons}>
									<div className={styles.button}>
										<a href={linkToSourceCode}>source code</a>
									</div>
								</div>
							</div>
						</Browser>
          )
        )}
      </div>
    )
  }

  return (
    <Layout page="projects">
      <Head>
        <title>{siteTitle}</title>
      </Head>
			{projectByType('Client')}
			{projectByType('Personal')}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = [
    {
      type: "Client",
      name: "De-coco",
      tags: [
        {
          iconSrc: "https://simpleicons.org/icons/next-dot-js.svg",
          src: "https://nextjs.org"
        },{
          iconSrc: "https://simpleicons.org/icons/nuxt-dot-js.svg",
          src: "https://nuxtjs.org"
        },{
          iconSrc: "https://simpleicons.org/icons/typescript.svg",
          src: "https://typescriptlang.org"
        },{
          iconSrc: "https://simpleicons.org/icons/postgresql.svg",
          src: "https://postgresql.org"
        },{
          iconSrc: "https://simpleicons.org/icons/node-dot-js.svg",
          src: "https://nodejs.org"
        }
      ],
      linkToDemo: "https://de-coco.com.au",
      linkToSourceCode: "https://github.com/kndwin/decoco",
      shortDescription: "Landing page for furniture store"
    },
    {
      type: "Personal",
      name: "minmd",
      tags: [
        {
          iconSrc: "https://simpleicons.org/icons/next-dot-js.svg",
          src: "https://nextjs.org"
        },{
          iconSrc: "https://simpleicons.org/icons/postgresql.svg",
          src: "https://postgresql.org"
        }
      ],
      linkToDemo: "https://minmd.vercel.app",
      linkToSourceCode: "https://github.com/kndwin/min",
      shortDescription: "A minimal markdown editor with authtentication and saving capabilities",
    },
    {
      type: "Personal",
      name: "jobs",
      tags: [
        {
          iconSrc: "https://simpleicons.org/icons/nuxt-dot-js.svg",
          src: "https://nuxtjs.org"
        },{
          iconSrc: "https://simpleicons.org/icons/postgresql.svg",
          src: "https://postgresql.org"
        }
      ],
      linkToDemo: "https://jobs-phi.vercel.app",
      linkToSourceCode: "https://github.com/kndwin/jobs",
      shortDescription: "A jobs dashboard for junior software jobs in Sydney",
    },
    {
      type: "Personal",
      name: "kndwin",
      tags: [
        {
          iconSrc: "https://simpleicons.org/icons/next-dot-js.svg",
          src: "https://nextjs.org"
        }
      ],
      linkToDemo: "https://kndwin.dev",
      linkToSourceCode: "https://github.com/kndwin/sites-portfolio",
      shortDescription: "Portfolio",
    },
  ]
	
  return {
    props: {
      allProjectsData
    }
  }
}
