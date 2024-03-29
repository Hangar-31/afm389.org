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
              eq: "_home/cfma-concert-player-on-mic-orlando-florida.jpg"
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
          alt="concert player on mic"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )}
    />
  );
}
