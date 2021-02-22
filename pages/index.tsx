import Head from 'next/head'
import Layout, { siteTitle } from 'components/Layout/Layout'
import styles from './index.module.scss'
import utilStyles from 'styles/utils.module.css'
import Date from 'components/date'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'
import Image from 'next/image'

export default function Home({ allPostsData, profile  }: {
	allPostsData: {
		date: string
		title: string
		id: string
	}[],
  profile: any,
}) {
  const tags = [
		{
			title: "vercel",
		},{
			title: "sass",
		},{
			title: "nextjs",
		},{
			title: "typescript",
		}
	]
  return (
    <Layout page="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
			<div className={styles.card}>
				<Image src={profile.avatar_url} 
					alt="A self portrait of Kevin Nguyen"
					width={200}
					height={200}
					className={styles.profileImage}
				/>
				<div className={`${styles.description}`}>
					<div className={`${utilStyles.headingLg}`}>
						kevin nguyen
					</div>
					🔨 indie builder <br />🧑‍💻 solution engineer<br />😅 excessive worrier
					<div className={styles.tags}>
						{tags.map(({title}) => (
						<div className={styles.tagDisplay}>
							<div className={styles.tag}>
									{title}
							</div>
						</div>
						))}
					</div>
				</div>
			</div>
			<ul className={`${styles.blog} ${utilStyles.list}`}>
				<div className={`${utilStyles.headingXl}`}>
					blog
				</div>
				{allPostsData.map(({ id, date, title }) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href={`/posts/${id}`}>
							<a className={utilStyles.headingLg}>{title}</a>
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
