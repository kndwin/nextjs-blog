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
    tags: string[]
		screenshot: string | undefined
    linkToDemo: string
    linkToSourceCode: string
    shortDescription: string
  }[]
}) {
  const projectByType = (_type: string) => {
    return (
      <div>
        <h1 className={styles.h1}>{_type}</h1>
        {allProjectsData
          .filter(({type}) => _type === type)
          .map(({name, tags, screenshot, linkToDemo, linkToSourceCode, shortDescription}) => (
						<div className={styles.card}>
							<div className={styles.title}>
								{`${name}`}
							</div>
							<div className={styles.description}>
								{`${shortDescription}`}
							</div>

							<Browser url={linkToDemo}>
								<img src={screenshot} 
									className={styles.screenshot}
									alt={shortDescription} />
							</Browser>

							<div className={styles.bottom}>
								<div className={styles.tags}>
								{tags.map(tag => (
									<div className={styles.tag}>
										{tag}
									</div>
								))}
								</div>
								<div className={styles.buttons}>
									<div className={styles.button}>
										<a href={linkToDemo}>demo</a>
									</div>
									<div className={styles.button}>
										<a href={linkToSourceCode}>source</a>
									</div>
								</div>
							</div>
						</div>
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
      name: "de-coco",
      tags: ["nextjs","googlemaps","vercel","emailjs"],
			screenshot: "https://screenshotapi-dot-net.storage.googleapis.com/de_coco_com_au_11hdxz36yxwy.png", 
      linkToDemo: "https://de-coco.com.au",
      linkToSourceCode: "https://github.com/kndwin/decoco",
      shortDescription: "Custom made designs for kitchen, furniture and vanities"
    },
    {
      type: "Personal",
      name: "kndwin",
      tags: ["nextjs","sass","markdown","vercel"],
			screenshot: "https://screenshotapi-dot-net.storage.googleapis.com/kndwin_dev_5w4rz9gxp0kt.png", 
      linkToDemo: "https://kndwin.dev",
      linkToSourceCode: "https://github.com/kndwin/sites-portfolio",
      shortDescription: "Portfolio of Kevin Nguyen",
    },
  ]
	
  return {
    props: {
      allProjectsData
    }
  }
}
