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
              eq: "bios/cfma-board-members-michael-sciallaba-orlando-florida.jpg"
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
          alt="Central Florida Musicians' Association Michael Sciallaba"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )}
    />
  );
}
