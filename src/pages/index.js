import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/Content/Content"

const IndexPage = () => {


  const [indexState, setIndex] = useState({
    query: `
    wpgraphql {
      projects {
        nodes {
          projectsData {
            projectId
            projectHeader
            projectContent
          }
        }
      }
    }
    `,
    isHome: true
  })
  return (
    <Layout>
    <Content query={indexState.query}/>
      <Link to="/about/">Go to about page</Link>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )

}




export default IndexPage
