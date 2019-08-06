/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import moment from "moment";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

// H31 Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentBlock2 from "../components/h31/content-block/ContentBlock2";
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Text3,
  H31Title1C,
  H31Title2C
} from "../components/h31";
import _config from "../components/_config";

const NewsAndEvents = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} description={markdownRemark.excerpt} />

      <H31LayoutContainer
        as="section"
        fluid
        css={css`
          margin: 30px 0;
        `}
      >
        <H31LayoutRow>
          <H31LayoutCol md={3} />
          <H31LayoutCol md={6}>
            <ContentBlock2 title={frontmatter.title}>
              <H31LayoutContainer>
                <H31LayoutRow
                  css={css`
                    padding: 0 !important;
                    border-top: 1px solid ${_config.colorLightGrey};
                    border-bottom: 1px solid ${_config.colorLightGrey};
                  `}
                >
                  <H31LayoutCol
                    css={css`
                      padding: 0 !important;
                    `}
                    md={3}
                  >
                    <H31Text3
                      css={css`
                        margin-bottom: 0;
                      `}
                    >
                      {moment().format("ll")}
                    </H31Text3>
                  </H31LayoutCol>
                </H31LayoutRow>
              </H31LayoutContainer>

              <div
                css={css`
                  h1 {
                    ${H31Title1C.__emotion_styles}
                  }
                  h2 {
                    ${H31Title2C.__emotion_styles}
                  }
                  p {
                    ${H31Text3.__emotion_styles}
                  }
                  img {
                    display: block;
                    margin: 0 auto;
                    max-width: 100%;
                  }
                  iframe {
                    width: 100%;
                    height: 433px;
                    margin-bottom: 15px;
                    @media (max-width: 992px) {
                      height: 353px;
                    }
                    @media (max-width: 500px) {
                      height: 265px;
                    }
                `}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </ContentBlock2>
          </H31LayoutCol>
          <H31LayoutCol md={3} />
        </H31LayoutRow>
      </H31LayoutContainer>
    </Layout>
  );
};

NewsAndEvents.defaultProps = {
  data: {}
};

NewsAndEvents.propTypes = {
  data: PropTypes.objectOf(PropTypes.object)
};

export default NewsAndEvents;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date
        image
      }
    }
  }
`;
