import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: {
            eq: "mastheads/cfma-masthead-contact-orlando-florida.jpg"
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
        alt="Central Florida Musicians' Association Microphone Coming from Side"
        loading="eager"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
