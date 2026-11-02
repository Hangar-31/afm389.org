/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";

// Config
import _config from "../components/_config";
import CmsImage from "../components/CmsImage";
import { richInline } from "../components/RichText";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31ContentBlock1,
  H31SectionTitleFullWidth,
  H31CallToAction,
  H31Testimonials,
  H31Masthead1,
  H31TextBlock2,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31ButtonFillArrow,
  H31SectionNews1,
} from "../components/h31";

export default function Home({ data }) {
  const page = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO
        title="Your Path To A Musical Career"
        description="Welcome to the Central Florida Musicians’ Association! For over a century, we have been serving the interests of musicians in Central Florida. Whether you’re interested in the benefits of union membership or simply in joining the largest association of professional musicians in the country, we’re here for you!"
      />

      <H31Masthead1
        ImageComponent={
          <CmsImage
            image={page.masthead_image}
            alt={page.masthead_alt}
            loading="eager"
          />
        }
        title={page.masthead_title}
        text={page.masthead_text}
      />

      {/* <div
        css={css`
          section {
            background: black !important;
            p {
              font-size: 90%;
              color: red;
              max-width: 1410px;
              text-align: center;
              margin: 0 auto;

              @media (max-width: 991px) {
                font-size: 1rem;
              }

              @media (max-width: 768px) {
                font-size: 0.75rem;
              }
            }
          }
        `}
      >
        <Paragraph1
          text="SPECIAL NOTICE: Due to the COVID-19 pandemic, and in an abundance of
          caution, please note that Local 389 (office and rehearsal space) is
          physically closed to members until further notice. We are continuing
          full daily operations with staff working remotely. We continue to
          check email, voice mail and regular mail regularly."
        />
      </div> */}

      {page.banner && (
        <H31SectionTitleFullWidth
          backgroundColor={_config.colorPrimary}
          titleSmall=""
          titleSmallColor={_config.colorSecondary}
          titleLarge={page.banner}
          customCSS="justify-content: center;"
        />
      )}

      <H31SectionTitleFullWidth
        backgroundColor={_config.colorWhite}
        titleSmall="Recent News And Articles"
      />

      <H31SectionNews1 />

      <H31LayoutContainer
        css={css`
          @media (max-width: 767px) {
            display: none;
          }
        `}
        fluid
        as="section"
      >
        <H31LayoutRow>
          <H31LayoutCol
            css={css`
              text-align: right;
              @media (max-width: 575px) {
                margin-top: 30px;
              }
            `}
            md={12}
          >
            <H31ButtonFillArrow
              link="/news-and-articles"
              text="See All News"
              carrotColor={_config.colorTertiary}
              secondaryColor={_config.colorTertiary}
            />
          </H31LayoutCol>
        </H31LayoutRow>
      </H31LayoutContainer>

      <H31TextBlock2
        title={page.intro_title}
        subtitle={page.intro_subtitle}
        text={page.intro_text}
      />

      {page.blocks.map((block, i) => (
        <H31ContentBlock1
          key={block.title}
          ImageComponent={<CmsImage image={block.image} alt={block.image_alt} />}
          title={block.title}
          text={richInline(block.text)}
          backgroundColor={i % 2 === 0 ? "#F9F9F9" : "transparent"}
          titleColor={
            i % 2 === 0 ? _config.colorPrimary : _config.colorSecondary
          }
          textRight={i % 2 !== 0}
        />
      ))}

      <H31CallToAction />

      <H31SectionTitleFullWidth
        backgroundColor={_config.colorWhite}
        titleSmall="Testimonials"
      />

      <H31Testimonials />
    </Layout>
  );
}

export const query = graphql`
  query HomePage {
    markdownRemark(fileAbsolutePath: { regex: "/site-content/home.md$/" }) {
      frontmatter {
        masthead_image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        masthead_alt
        masthead_title
        masthead_text
        banner
        intro_title
        intro_subtitle
        intro_text
        blocks {
          title
          text
          image_alt
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
