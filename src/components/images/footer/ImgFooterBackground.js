import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: {
            eq: "footer/cfma-footer-background-orlando-florida.png"
          }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="Central Florida Musicians' Association Footer Background Orchestra Leader"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
