import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: {
            eq: "mastheads/cfma-masthead-member-benefits-orlando-florida.jpg"
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
        alt="Central Florida Musicians' Association Collage of Members"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
