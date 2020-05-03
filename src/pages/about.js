import React, { useState } from 'react';
import { graphql } from 'gatsby'

import Content from '../components/Content/Content'

const AboutPage = () => {
  // const [aboutState, setAbout] = useState(
  //   {
  //     query:`
  //       wpgraphql {
  //         posts {
  //           nodes {
  //             title
  //             content
  //           }
  //         }
  //       }
  //     `,
  //     isHome: false
  //   }
  // )


  const info = data.wpgraphql.posts.nodes;

  return(
    <section className="about__container">
    {
      info.map((info) => (
        <div key={info.key}>
          <h2>${info.title}</h2>
          <p>{info.content}</p>
        </div>
      ))
    }
      {/* <Content query={aboutState.query}/> */}


    </section>
  )
}


export const data = graphql`
query AboutPageQuery {
  wpgraphql {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
}
`

export default AboutPage;