import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './Content.scss'

export default () => {

  const data = useStaticQuery(graphql`
  query SiteContentQuery {
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
  }
  `);

  console.log(data);

  // TODO
  // Refresh data when new content is updated
  // If the data is empty then return something else



  const info = data.wpgraphql.projects.nodes;
  return (

  <section className="content__container">
  {
    info.map(({projectsData}) => (
      <div key={projectsData.projectId}>
        <h2>{`${projectsData.projectHeader}`}</h2>
        <p>{`${projectsData.projectContent}`}</p>
      </div>
    ))
  }
  </section>
);
};