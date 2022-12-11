import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function () {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(
            relativePath: {
              eq: "partners/cfma-partner-orlando-philharmonic-orlando-florida.jpg"
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
      render={(data) => (
        <Img
          alt="Central Florida Musicians' Association Partner Orlando Philharmonic"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )}
    />
  );
}
