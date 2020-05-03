import React, { useState } from 'react';
import { graphql } from 'gatsby'

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

  const data = graphql`
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

  const info = data.wpgraphql.posts.nodes;
  console.log(info);

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
    </section>
  )
}

export default AboutPage;