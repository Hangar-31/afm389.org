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
              eq: "_rehearsal-hall/cfma-rehearsal-hall-studio-1-orlando-florida.jpg"
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
      render={(data) => (
        <Img
          alt="Central Florida Musicians' Association rehearsal hall drums and equipment"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )}
    />
  );
}
