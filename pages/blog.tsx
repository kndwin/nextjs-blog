import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from 'lib/posts'

import Layout, { siteTitle } from 'components/Layout/Layout'
import Date from 'components/date'
import styles from './index.module.scss'
import utilStyles from 'styles/utils.module.css'

export default function Blog({ allPostsData }: {
	allPostsData: {
		date: string
		title: string
		id: string
	}[],
}) {

  return (
    <Layout page="blog">
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData, 
    }
  }
}
