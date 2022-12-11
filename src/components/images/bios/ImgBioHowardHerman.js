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
              eq: "bios/cfma-board-members-howard-herman-orlando-florida.jpg"
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
      render={(data) => (
        <Img
          alt="Central Florida Musicians' Association Howard Herman"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )}
    />
  );
}
