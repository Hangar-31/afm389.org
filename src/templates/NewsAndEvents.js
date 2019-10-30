/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import MediaQuery from "react-responsive";
import moment from "moment";
import { css } from "@emotion/core";
import Img from "gatsby-image";

// Config
import _config from "../components/_config";

// H31 Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentBlock2 from "../components/h31/content-blocks/ContentBlock2";
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
  H31ButtonTwitterTweet,
  H31ButtonFillArrow,
  H31BlogCard2
} from "../components/h31";

const NewsAndEvents = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  // Extract articles for next and previous navigating
  let { next, previous } = pageContext;
  if (next !== null) {
    next = {
      image: next.frontmatter.image.childImageSharp.fluid,
      title: next.frontmatter.title,
      text: next.excerpt,
      date: next.frontmatter.date,
      link: next.fields.path,
      linkText: "Read More"
    };
  }
  if (previous !== null) {
    previous = {
      image: previous.frontmatter.image.childImageSharp.fluid,
      title: previous.frontmatter.title,
      text: previous.excerpt,
      date: previous.frontmatter.date,
      link: previous.fields.path,
      linkText: "Read More"
    };
  }

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
          ul {
            ${H31ListBullet1.__emotion_styles}
          }
          ol {
            ${H31ListNumbered1.__emotion_styles}
          }
          li {
            ${H31Item1.__emotion_styles}
          }
        `}
      >
        <H31LayoutRow>
          <H31LayoutCol
            xs={12}
            sm={{ span: 8, offset: 2 }}
            xl={{ span: 3, offset: 0 }}
            css={css`
              display flex; 
              justify-content: flex-end; 
              align-items: flex-start; 
              @media(max-width: 1199px) {
                justify-content: flex-start;
                margin-bottom: 15px;
              }
              @media(max-width: 719px) {
                margin-top: 50px;
              }
            `}
          >
            <H31ButtonFillArrow
              arrowDirection="left"
              carrotColor={_config.colorTertiary}
              primaryColor={_config.colorWhite}
              secondaryColor={_config.colorTertiary}
              text="Back to News"
              link="/news-and-articles"
            />
          </H31LayoutCol>
          <H31LayoutCol
            xs={12}
            sm={{ span: 8, offset: 2 }}
            xl={{ span: 6, offset: 0 }}
          >
            <ContentBlock2 title={frontmatter.title}>
              <H31LayoutContainer
                fluid
                as="article"
                css={css`
                  padding-top: 0 !important;
                `}
              >
                <H31LayoutRow
                  css={css`
                    height: 35px;
                    margin-bottom: 15px;
                    padding: 0 !important;
                    border-top: 1px solid ${_config.colorLightGrey};
                    border-bottom: 1px solid ${_config.colorLightGrey};
                  `}
                >
                  <H31LayoutCol
                    css={css`
                      display: flex;
                      align-items: center;
                      padding: 0 !important;
                    `}
                    xs={6}
                  >
                    <H31Text3
                      css={css`
                        margin-bottom: 0;
                      `}
                    >
                      {moment(frontmatter.date).format("ll")}
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
                    {typeof window !== "undefined" && (
                      <>
                        <TwitterShareButton url={window.location}>
                          <H31ButtonTwitterTweet
                            css={css`
                              margin-right: 5px;
                            `}
                          />
                        </TwitterShareButton>

                        <FacebookShareButton url={window.location}>
                          <H31ButtonFacebookShare />
                        </FacebookShareButton>
                      </>
                    )}
                  </H31LayoutCol>
                </H31LayoutRow>

                <H31LayoutRow>
                  <H31LayoutCol
                    xs={12}
                    css={css`
                      padding: 0 !important;
                    `}
                  >
                    <div>
                      <Img
                        css={css`
                          margin-bottom: 15px;
                          height: 450px;
                          @media (max-width: 991px) {
                            height: 350px;
                          }
                          @media (max-width: 767px) {
                            height: 300px;
                          }
                          @media (max-width: 574px) {
                            height: 250px;
                          }
                        `}
                        alt={frontmatter.title}
                        fluid={frontmatter.image.childImageSharp.fluid}
                      />
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
                    </div>
                  </H31LayoutCol>
                </H31LayoutRow>

                <H31LayoutRow
                  css={css`
                    margin-bottom: 15px;
                    padding: 0 !important;
                    border-top: 1px solid ${_config.colorLightGrey};
                    border-bottom: 1px solid ${_config.colorLightGrey};
                  `}
                >
                  <H31LayoutCol
                    css={css`
                      display: flex;
                      height: 35px;
                      align-items: center;
                      justify-content: flex-start;
                      padding: 0 !important;
                    `}
                    xs={12}
                  >
                    {typeof window !== "undefined" && (
                      <>
                        <TwitterShareButton url={window.location}>
                          <H31ButtonTwitterTweet
                            css={css`
                              margin-right: 5px;
                            `}
                          />
                        </TwitterShareButton>

                        <FacebookShareButton url={window.location}>
                          <H31ButtonFacebookShare />
                        </FacebookShareButton>
                      </>
                    )}
                  </H31LayoutCol>
                </H31LayoutRow>

                <H31LayoutRow
                  css={css`
                    padding: 0 !important;
                  `}
                >
                  <H31LayoutCol
                    xs={6}
                    css={css`
                      padding-left: 0 !important;
                    `}
                  >
                    {previous !== null && (
                      <>
                        <H31ButtonFillArrow
                          arrowDirection="left"
                          carrotColor={_config.colorTertiary}
                          primaryColor={_config.colorWhite}
                          secondaryColor={_config.colorTertiary}
                          text="Previous"
                          link={previous.link}
                        />
                        <MediaQuery query="(min-width: 992px)">
                          <br />
                          <br />
                          <H31BlogCard2 article={previous} />
                        </MediaQuery>
                      </>
                    )}
                  </H31LayoutCol>
                  <H31LayoutCol
                    xs={6}
                    css={css`
                      padding-right: 0 !important;
                    `}
                  >
                    {next !== null && (
                      <>
                        <div
                          css={css`
                            text-align: right;
                          `}
                        >
                          <H31ButtonFillArrow
                            arrowDirection="right"
                            carrotColor={_config.colorTertiary}
                            primaryColor={_config.colorWhite}
                            secondaryColor={_config.colorTertiary}
                            text="Next"
                            link={next.link}
                          />
                        </div>
                        <MediaQuery query="(min-width: 992px)">
                          <br />
                          <H31BlogCard2 article={next} />
                        </MediaQuery>
                      </>
                    )}
                  </H31LayoutCol>
                </H31LayoutRow>
              </H31LayoutContainer>
            </ContentBlock2>
          </H31LayoutCol>
          <H31LayoutCol xs={12} xl={3} />
        </H31LayoutRow>
      </H31LayoutContainer>
    </Layout>
  );
};

NewsAndEvents.defaultProps = {
  data: {},
  pageContext: {}
};

NewsAndEvents.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  pageContext: PropTypes.objectOf(PropTypes.object)
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
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
