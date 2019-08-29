import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: {
            eq: "bios/cfma-board-members-barry-smith-orlando-florida.jpg"
          }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="Central Florida Musicians' Association Bary Smith"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
