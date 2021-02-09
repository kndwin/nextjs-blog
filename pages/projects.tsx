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
        <h1>{_type}</h1>
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
									alt="" />
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
      <div className={utilStyles.padding1px}>
        <title className={utilStyles.headingLg}>
          Projects
        </title>
        {projectByType('client work')}
        {projectByType('personal work')}
        {projectByType('freecodecamp')}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = [
    {
      type: "freecodecamp",
      name: "exercise tracker",
      tags: ["node","express","heroku","mongodb"],
      linkToDemo: "https://kndwin-fcc-exercise-tracker.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-exercisetracker",
      shortDescription: "several REST API endpoints that tracks a user's exercise"
    },
    {
      type: "freecodecamp",
      name: "bar chart",
      tags: ["react","d3","codepen"],
      linkToDemo: "https://codepen.io/kndwin/full/WNQjLwP",
      linkToSourceCode: "https://codepen.io/kndwin/pen/WNQjLwP",
      shortDescription: "simple bar chart with data source from endpoint"
    },
    {
      type: "client work",
      name: "de-coco",
      tags: ["react","google-map","netlify"],
			screenshot: "https://screenshotapi-dot-net.storage.googleapis.com/de_coco_com_au_11hdxz36yxwy.png", 
      linkToDemo: "https://de-coco.com.au",
      linkToSourceCode: "https://github.com/kndwin/site-decoco-react-netlify",
      shortDescription: "simple SPA site that for a local furniture business"
    },
    {
      type: "client work",
      name: "holroyd community aid",
      tags: ["gatsby","graphql","markdown","netlify"],
      linkToDemo: "https://dev-hca.netlify.com",
      linkToSourceCode: "https://github.com/kndwin/sites-hca",
      shortDescription: "simple site for a community store",
    },
    {
      type: "personal work",
      name: "portfolio",
      tags: ["nextjs","sass","markdown","vercel"],
			screenshot: "https://screenshotapi-dot-net.storage.googleapis.com/kndwin_dev_5w4rz9gxp0kt.png", 
      linkToDemo: "https://kndwin.dev",
      linkToSourceCode: "https://github.com/kndwin/sites-portfolio",
      shortDescription: "simple site with a blog",
    },
  ]
	
  return {
    props: {
      allProjectsData
    }
  }
}
