import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Content from "../components/Content/Content"

const IndexPage = () => (
  <Layout>
  <Content/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
