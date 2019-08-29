import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: {
            eq: "_rehearsal-hall/cfma-rehearsal-hall-studio-3-orlando-florida.jpg"
          }
        ) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="Central Florida Musicians' Association on-site piano"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
