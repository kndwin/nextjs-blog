import Head from 'next/head'
import Layout, { siteTitle } from 'components/Layout/Layout'
import styles from './index.module.scss'
import utilStyles from 'styles/utils.module.css'
import Date from 'components/date'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'

export default function Home({ allPostsData, profile  }: {
	allPostsData: {
		date: string
		title: string
		id: string

	}[],
  profile: any,
}) {
  const tags = {
    learning: [
      {
        title: "Typeorm",
        url: "https://typeorm.io", 
        description: "orm for rdbms" 
      },{
        title: "Redis",
        url: "https://redis.io",
        description: "in-memory key-pair database"
      }
    ],
    comfortable: [
      {
        title: "Nextjs",
        url: "https://nextjs.org",
        description: "reactjs framework that works"
      },{
        title: "Puppeter",
        url: "https://pptr.dev",
        description: "headless chrome browser"
      }
    ]
  }

  return (
    <Layout page="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <div className={styles.card}>
          <div>
            <div className={`${utilStyles.headingXl}`} style={{display: 'flex'}}>
               kevin nguyen
            <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" 
              width="50px" 
              height="50px" 
              style={{marginLeft: '1rem'}} />
            </div>
            <div className={`${styles.description}`}>
              🔨 indie builder | 🧑‍💻 solution engineer | 😅 excessive worrier
            </div>
            <div className={`${utilStyles.headingLg}`}>
              currently learning 📖
            </div>
            <div className={styles.tags}>
              {tags.learning.map(({title, url, description}) => (
							<div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                <div className={styles.tag}>
                    <a href={url} target="_blank">{title}</a>
                </div>
                <div className={styles.description} >
                  {description} 
                </div>
              </div>
              ))}
            </div>
            <div className={`${utilStyles.headingLg}`}>
              getting better at 💪
            </div>
            <div className={styles.tags}>
              {tags.comfortable.map(({title, url, description}) => (
							<div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                <div className={styles.tag}>
                  <a href={url} target="_blank">{title}</a>
                </div>
                <div className={styles.description} >
                  {description} 
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
  //const res = await fetch(`https://api.github.com/users/kndwin`) 
  //const profile = await res.json(); 
	const profile = { hello: "world" }
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData, 
      profile
    }
  }
}
