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
              eq: "_about/cfma-front-of-bulding-with-drums-orlando-florida.png"
            }
          ) {
            childImageSharp {
              fixed(width: 700) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <Img
          alt="front of building with drums"
          fixed={data.placeholderImage.childImageSharp.fixed}
        />
      )}
    />
  );
}
