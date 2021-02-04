import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'

export default function Projects({
  allProjectsData
}: {
  allProjectsData: {
    type: string
    name: string
    tags: string[]
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
          .map(({name, tags, linkToDemo, linkToSourceCode, shortDescription}) => (
            <li>
              {`${name}: ${shortDescription}`}
              <br/>
              {tags.map(tag => (
                <div>
                  {tag}
                </div>
              ))}
              <br/>
              <a href={linkToDemo}>demo </a>
              <a href={linkToSourceCode}>source</a>
            </li>
          )
        )}
      </div>
    )
  }
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.padding1px}>
        <h2 className={utilStyles.headingLg}>
          Projects
        </h2>
        {projectByType('backend')}
        {projectByType('frontend')}
        {projectByType('data visualisation')}
        {projectByType('other')}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsData = [
    {
      type: "backend",
      name: "💪 exercise tracker",
      tags: ["node","express","heroku","mongodb"],
      linkToDemo: "https://kndwin-fcc-exercise-tracker.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-exercisetracker",
      shortDescription: "several REST API endpoints that tracks a user's exercise"
    },
    {
      type: "backend",
      name: "📏 url shortener",
      tags: ["node","express","heroku","mongodb"],
      linkToDemo: "https://kndwin-fcc-urlshortener.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-urlshortener",
      shortDescription: "returns an endpoint that redirects to given URL"
    },
    {
      type: "backend",
      name: "📂 file metadata",
      tags: ["node","express","heroku","multer"],
      linkToDemo: "https://kndwin-fcc-filemetadata.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-filemetadata",
      shortDescription: "returns metadata about an uploaded file"
    },
    {
      type: "backend",
      name: "⏱️ timestamp",
      tags: ["node","express","heroku"],
      linkToDemo: "https://kndwin-fcc-timestamp.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-timestamp",
      shortDescription: "returns the date in ISO-8601 format"
    },
    {
      type: "backend",
      name: "🗣️ header parser",
      tags: ["node","express","heroku"],
      linkToDemo: "https://kndwin-fcc-headerparser.herokuapp.com",
      linkToSourceCode: "https://github.com/kndwin/fcc-project-headerparser",
      shortDescription: "returns header information of a GET request"
    },
    {
      type: "frontend",
      name: "💬 random quote generator",
      tags: ["react","bootstrap","codepen"],
      linkToDemo: "https://codepen.io/kndwin/full/GRgEEaB" ,
      linkToSourceCode: "https://codepen.io/kndwin/pen/GRgEEaB",
      shortDescription: "generates a random Simpsons quote"
    },
    {
      type: "frontend",
      name: "📃 markdown previewer",
      tags: ["react","markdown","codepen"],
      linkToDemo: "https://cdpn.io/kndwin/full/bGNRKBB" ,
      linkToSourceCode: "https://codepen.io/kndwin/pen/bGNRKBB",
      shortDescription: "converts raw text to html and previews it side by side"
    },
    {
      type: "frontend",
      name: "🥁 drumpad",
      tags: ["react","sass","codepen"],
      linkToDemo: "https://cdpn.io/kndwin/full/rNawrKa" ,
      linkToSourceCode: "https://codepen.io/kndwin/pen/rNawrKa",
      shortDescription: "buttons generate sounds like a pad"
    },
    {
      type: "frontend",
      name: "⏲️ pomodoro timer",
      tags: ["react","sass","redux","codepen"],
      linkToDemo: "https://codepen.io/kndwin/full/abOdKEz",
      linkToSourceCode: "https://codepen.io/kndwin/pen/abOdKEz",
      shortDescription: "(unstylised) simple timer built to experiment react with redux"
    },
    {
      type: "frontend",
      name: "🔢 calculator",
      tags: ["react","sass","codepen"],
      linkToDemo: "https://cdpn.io/kndwin/full/ZEGKoXV" ,
      linkToSourceCode: "https://codepen.io/kndwin/pen/ZEGKoXV",
      shortDescription: "(unstylised) simple calculator app built to experiment with react components"
    },
    {
      type: "data visualisation",
      name: "📊 bar chart",
      tags: ["react","d3","codepen"],
      linkToDemo: "https://codepen.io/kndwin/full/WNQjLwP",
      linkToSourceCode: "https://codepen.io/kndwin/pen/WNQjLwP",
      shortDescription: "simple bar chart with data source from endpoint"
    },
    {
      type: "data visualisation",
      name: "⚫ scatter chart",
      tags: ["react","d3","codepen"],
      linkToDemo: "https://codepen.io/kndwin/full/MWwqpLB",
      linkToSourceCode: "https://codepen.io/kndwin/pen/MWwqpLB",
      shortDescription: "simple scatter with data source from endpoint"
    },
    {
      type: "other",
      name: "💻 portfolio",
      tags: ["gatsby","graphql","markdown","netlify"],
      linkToDemo: "https://kndwin.dev",
      linkToSourceCode: "https://github.com/kndwin/sites-portfolio",
      shortDescription: "simple site with a blog",
    },
    {
      type: "other",
      name: "🛋️ holroyd community aid",
      tags: ["gatsby","graphql","markdown","netlify"],
      linkToDemo: "https://dev-hca.netlify.com",
      linkToSourceCode: "https://github.com/kndwin/sites-hca",
      shortDescription: "simple site for a community store",
    },
    {
      type: "other",
      name: "🛋️ de-coco",
      tags: ["react","google-map","netlify"],
      linkToDemo: "https://de-coco.com.au",
      linkToSourceCode: "https://github.com/kndwin/site-decoco-react-netlify",
      shortDescription: "simple SPA site that for a local furniture business"
    },
  ]

  return {
    props: {
      allProjectsData
    }
  }
}
