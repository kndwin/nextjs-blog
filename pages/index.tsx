import { useState, useEffect, Suspense } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from 'lib/posts'

import Layout, { siteTitle } from 'components/Layout/Layout'
import Date from 'components/date'
import styles from './index.module.scss'
import utilStyles from 'styles/utils.module.css'
import { Canvas } from '@react-three/fiber'
import Model from 'threejs/Kevin'

export default function Home({ allPostsData, profile  }: {
	allPostsData: {
		date: string
		title: string
		id: string
	}[],
  profile: any,
}) {

  const [mounted, setMounted] = useState<boolean>(false)
  const {theme, setTheme} = useTheme()
	useEffect(() => {
		setMounted(true)
	},[])

  if (!mounted) {
    return null
  }

  const tags = [
		{
			iconSrc: "https://simpleicons.org/icons/nextdotjs.svg",
      src: "https://nextjs.org"
		},{
			iconSrc: "https://simpleicons.org/icons/typescript.svg",
      src: "https://typescriptlang.org"
		},{
			iconSrc: "https://simpleicons.org/icons/postgresql.svg",
      src: "https://postgresql.org"
		},{
			iconSrc: "https://simpleicons.org/icons/nodedotjs.svg",
      src: "https://nodejs.org"
		},{
			iconSrc: "https://simpleicons.org/icons/amazonaws.svg",
      src: "https://nodejs.org"
    }
	]


  return (
    <Layout page="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.flexRow}>
        <div className={styles.card}>

					<Canvas>
						<Suspense fallback={null}>
							<Model />
						</Suspense>
					</Canvas>

          <div className={`${styles.description}`}>
            <h1 className={`${utilStyles.headingLg}`}>
              Kevin
            </h1>
            <p>
              🔨 I build full-stack javascript applications.
            </p>
            <div className={styles.tags}>
              {tags.map(({iconSrc, src}) => (
              <div className={styles.tagDisplay}>
                <a href={src} target="blank">
                  <img className={`${theme == 'dark' ? styles.tagLight : ""} 
                    ${styles.tag}`}
                    src={iconSrc} />
                </a>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
			<ul className={`${styles.blog} ${utilStyles.list}`}>
				{allPostsData.map(({ id, date, title }) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href={`/posts/${id}`}>
							<a className={utilStyles.headingMd}>{title}</a>
						</Link>
						<br />
						<small className={styles.date}>
							<Date dateString={date} />
						</small>
					</li>
				))}
			</ul>
    </Layout>
  )
}; 

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch(`https://api.github.com/users/kndwin`) 
  const profile = await res.json(); 
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData, 
      profile
    }
  }
}
