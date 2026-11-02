/* eslint-disable import/named */
/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { css } from "@emotion/react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  H31Masthead1,
  H31Text3,
  H31Testimonials,
  H31SectionTitleFullWidth,
  H31LayoutCol,
  H31LayoutRow,
  H31LayoutContainer,
  H31Bio1,
  H31ContentBlock2,
} from "../components/h31";

// Images
import ImgMastheadAbout from "../components/images/mastheads/ImgMastheadAbout";
import _config from "../components/_config";
import CmsImage from "../components/CmsImage";
import { plainParagraphs } from "../components/RichText";
import ImgAbout1 from "../components/images/_about/ImgAbout1";

const history = [
  <H31Text3 key="about-page-0">
    On April 18, 1924, a charter was granted by the American Federation of
    Musicians to allow the creation of Local 389 – then known as the Musicians’
    Protective Association. The charter was requested by members of the Pythian
    Band, with the goal being to ensure that musicians were paid fairly. Through
    the years, the organization (which eventually joined with the Daytona Beach
    Local) became known as the Orlando Musicians’ Association, and finally the
    Central Florida Musicians’ Association. The CFMA started with eight members
    in 1924 then grew to almost a thousand in 50 years. Among its major
    achievements - collective bargaining agreements with Walt Disney World and
    Orlando Philharmonic Orchestra. Today’s music scene is much different than
    that of 100 years ago. But the CFMA remains – supporting musicians in their
    endeavor to make a living making music.
  </H31Text3>,
  <H31Text3 key="about-page-1">
    <b>Wondering what the next step in your career should be? </b>
    We are happy to share our years of experience on formulating a plan that
    fits your needs and dreams.
  </H31Text3>,
  <H31Text3 key="about-page-2">
    <b>Are you new in town and need to know who to connect with? </b>
    We network through membership meetings, a contractor list, weekly updates of
    current events and networking opportunities, social media and a quarterly
    newsletter, among other things.
  </H31Text3>,
  <ImgAbout1 key="about-page-3" />,
  <br key="about-page-4" />,
  <br key="about-page-5" />,
  <H31Text3 key="about-page-6">
    <b>Would you like coaching on how to audition for Walt Disney World? </b>
    We hold up to three auditions per year for our members to audition for the
    company and we would love to help you prepare.
  </H31Text3>,
  <H31Text3 key="about-page-7">
    <b>
      Are you owed money from a contractor or organization for whom you have
      worked?&nbsp;
    </b>
    We have recovered tens of thousands of dollars for our members over the
    years.
  </H31Text3>,
];

export default function About({ data: page }) {
  const officers = page.allMarkdownRemark.nodes.map((node) => node.frontmatter);

  return (
    <Layout>
      <SEO
        title="About"
        description="The Central Florida Musicians’ Association (CFMA) was founded in 1924 as “The Musicians Protective Association.” Those were the days when Labor and Management were assumed adversaries by their very nature..."
      />

      <H31Masthead1
        ImageComponent={<ImgMastheadAbout />}
        title="From The Team At CFMA"
      />

      <H31SectionTitleFullWidth
        backgroundColor={_config.colorPrimary}
        titleSmall="Central FL Musicians Association"
        titleSmallColor={_config.colorSecondary}
        titleLarge="CFMA Local 389 - History"
      />

      <H31LayoutContainer
        fluid
        as="section"
        css={css`
          margin: 45px 0;
          @media (max-width: 575px) {
            margin: 15px 0;
          }
        `}
      >
        <H31LayoutRow>
          <H31LayoutCol xs={1} md={2} xl={3} />
          <H31LayoutCol xs={10} md={8} xl={6}>
            <H31ContentBlock2 title="Musicians Working For Musicians">
              {history}
            </H31ContentBlock2>
          </H31LayoutCol>
          <H31LayoutCol xs={1} md={2} xl={3} />
        </H31LayoutRow>
      </H31LayoutContainer>

      <H31SectionTitleFullWidth
        backgroundColor={_config.colorSecondary}
        titleSmall="Central FL Musicians Association"
        titleSmallColor={_config.colorPrimary}
        titleLarge="Board of Directors"
        id="board-of-directors"
      />

      {officers.map((officer) => (
        <H31Bio1
          key={officer.name}
          name={officer.name}
          title={officer.title}
          image={<CmsImage image={officer.photo} alt={officer.name} />}
          bios={plainParagraphs(officer.bio)}
        />
      ))}

      <H31SectionTitleFullWidth
        backgroundColor={_config.colorWhite}
        titleSmall="Testimonials"
      />

      <H31Testimonials />
    </Layout>
  );
}

export const query = graphql`
  query AboutPage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/static/officers/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      nodes {
        frontmatter {
          name
          title
          bio
          photo {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
