/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";

// Config
import _config from "../components/_config";
import CmsImage from "../components/CmsImage";
import { richParagraphs } from "../components/RichText";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31Masthead1,
  H31SectionTitleFullWidth,
  H31ToggleInfo1,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Text3,
  H31CallToAction,
  H31SectionCBAS1
} from "../components/h31";

export default function MemberBenefits({ data }) {
  const page = data.markdownRemark.frontmatter;
  const articles = page.partners.map((partner) => ({
    image: <CmsImage image={partner.image} alt={partner.title} />,
    title: partner.title,
    text: partner.text,
    link: partner.link,
    linkText: partner.link_text,
  }));

  return <Layout>
    <SEO title="Member Benefits" description="CFMA is a one-stop resource for all of your professional needs. We invite you to become a part of the world’s largest professional association representing the interests of professional musicians..." />

    <H31Masthead1
      ImageComponent={<CmsImage image={page.masthead_image} alt={page.masthead_alt} loading="eager" />}
      title={page.masthead_title}
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      titleSmall="Central FL Musicians Association"
      titleLarge="Member Benefits"
    />

    <section css={css`
      margin: 45px 0;
      @media(max-width: 767px) {
        margin: 30px 0;
      }
      @media(max-width: 575px) {
        margin: 15px 0;
      }
    `}
    >
      {page.benefits.map(benefit => (
        <H31ToggleInfo1 key={benefit.name} name={benefit.name} info={richParagraphs(benefit.info)} />
      ))}
    </section>

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorSecondary}
      titleSmall="Central FL Musicians Association"
      titleSmallColor={_config.colorPrimary}
      titleLarge="Collective Bargaining Agreement (CBA) Partners"
      id="cbas"
    />

    <H31SectionCBAS1 articles={articles} />

    <H31LayoutContainer 
      css={css`
          padding: 60px 0 !important;
          @media(max-width: 575px) {
            margin: 60px 0 30px 0;
          }
      `}
      fluid 
      as="section"
    >
      <H31LayoutRow>
        <H31LayoutCol xs={1} sm={2} md={3} />
        <H31LayoutCol xs={10} sm={8} md={6}>
          <H31Text3
            css={css`
              @media(max-width: 767px) {
                font-size: 1rem;
              }
            `}
          >
            {page.cba_text}
          </H31Text3>
        </H31LayoutCol>
        <H31LayoutCol xs={1} sm={2} md={3} />
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31CallToAction />

  </Layout>
};

export const query = graphql`
  query MemberBenefitsPage {
    markdownRemark(fileAbsolutePath: { regex: "/site-content/member-benefits.md$/" }) {
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
        benefits {
          name
          info
        }
        partners {
          title
          text
          link
          link_text
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        cba_text
      }
    }
  }
`;
