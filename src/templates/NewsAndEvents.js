/* eslint-disable no-underscore-dangle */
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import moment from "moment";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

// Config
import _config from "../components/_config";

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
  H31ListBullet1,
  H31ListNumbered1,
  H31Item1,
  H31Title2B,
  H31ButtonFacebookShare,
  H31ButtonTwitterTweet
} from "../components/h31";

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
          img {
            max-width: 100%;
          }
        `}
      >
        <H31LayoutRow>
          <H31LayoutCol md={3} />
          <H31LayoutCol md={6}>
            <ContentBlock2 title={frontmatter.title}>
              <H31LayoutContainer
                css={css`
                  padding-top: 0 !important;
                `}
              >
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
                    xs={6}
                  >
                    <H31Text3
                      css={css`
                        margin-bottom: 0;
                      `}
                    >
                      {moment().format("ll")}
                    </H31Text3>
                  </H31LayoutCol>

                  <H31LayoutCol
                    css={css`
                      display: flex;
                      align-items: center;
                      justify-content: flex-end;
                      padding: 0 !important;
                    `}
                    xs={6}
                  >
                    <H31ButtonTwitterTweet />
                    <H31ButtonFacebookShare />
                  </H31LayoutCol>
                </H31LayoutRow>
              </H31LayoutContainer>

              <div
                css={css`
                  h1 {
                    ${H31Title1C.__emotion_styles}
                    color: ${_config.colorSecondary};
                    margin-bottom: 15px;
                  }
                  h2 {
                    ${H31Title2B.__emotion_styles}
                    color: ${_config.colorSecondary};
                    margin-bottom: 15px;
                  }
                  p {
                    ${H31Text3.__emotion_styles}
                  }
                  ul {
                    ${H31ListBullet1.__emotion_styles}
                  }
                  ol {
                    ${H31ListNumbered1.__emotion_styles}
                  }
                  li {
                    ${H31Item1.__emotion_styles}
                  }
                  img {
                    display: none;
                    margin: 0 auto;
                    max-width: 100%;
                    max-height: 300px;
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
