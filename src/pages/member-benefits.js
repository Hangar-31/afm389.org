/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";

// Config
import _config from "../components/_config";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ImgMastheadMemberBenefits from "../components/images/mastheads/ImgMastheadMemberBenefits";
import {
  H31Masthead1,
  H31SectionTitleFullWidth,
  H31ToggleInfo1,
  H31BlogCard1,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Text3,
  H31CallToAction
} from "../components/h31";

// Images
import ImgPartner1 from "../components/images/partners/ImgPartner1";
import ImgPartner2 from "../components/images/partners/ImgPartner2";
import ImgPartner3 from "../components/images/partners/ImgPartner3";

// Data

const benefits = [
  {
    name: "Rehearsal Facility",
    info: []
  },
  {
    name: "Liability Insurance",
    info: []
  },
  {
    name: "Directory",
    info: []
  },
  {
    name: "Networking Opportunities",
    info: []
  },
  {
    name: "Gig Referral",
    info: []
  },
  {
    name: "Free Standardize Contracts",
    info: []
  },
  {
    name: "No Initiation Fees for Students",
    info: []
  },
  {
    name: "Free splash page on AFMentertainment.org",
    info: []
  },
  {
    name: "Free subscription to International Musician Magazine",
    info: []
  },
  {
    name: "National Union Benefits at UnionPlus.org",
    info: []
  },
  {
    name: "AFMInsurance.org",
    info: []
  },
  {
    name: "Contract Negotiation",
    info: []
  },
  {
    name: "National and International Audition Notices",
    info: [
      "The AFM posts audition notices in its monthly International Musician magazine. Central Florida auditions are emailed to members."
    ]
  },
  {
    name: "Legal Assistance",
    info: [
      "The AFM posts audition notices in its monthly International Musician magazine. Central Florida auditions are emailed to members."
    ]
  }
]

const partners = [
  {
    image: <ImgPartner1 />,
    title: "Walt Disney Parks and Resorts U.S.",
    text: "One of the largest employers of professional musicians in Central Florida – our members benefit from a long negotiating relationship with Disney.",
    link: "/"
  },
  {
    image: <ImgPartner2 />,
    title: "Broadway Across America",
    text: "Bringing professional-level Broadway shows to the Central Florida stage requires professional musicians, too. Broadway shows musicians are booked by a Union contractor.",
    link: "/"
  },
  {
    image: <ImgPartner3 />,
    title: "Orlando Philharmonic Orchestra",
    text: "Newly unionized in 2012, our agreement and amiable working relationship with the Philharmonic continues to better wages and working conditions for our musicians.",
    link: "/"
  }
]

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadMemberBenefits />}
      title="How We Support Musicians"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id rhoncus ligula. Quisque commodo, eros auctor elementum aliquam, urna turpis dapibus dolor, non feugiat tortor lectus."
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      titleSmall="Central FL Musicians Association"
      titleLarge="Member Benefits"
    />

    <H31LayoutContainer>
      <H31LayoutRow css={css`
        padding: 45px 0 100px 0;
      `}
      >
        <H31LayoutCol xs={12}>
          {benefits.map(benefit => (
            <H31ToggleInfo1 name={benefit.name} info={benefit.info} />
          ))}
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorSecondary}
      titleSmall="Central FL Musicians Association"
      titleSmallColor={_config.colorPrimary}
      titleLarge="Collective Bargaining Agreement (CBA) Partners"
    />

    <H31LayoutContainer
      css={css`
        height: 350px;
        margin-bottom: 30px;
        background: linear-gradient(
          90deg,
          #6da55f calc(0% + 15px),
          #164f4b calc(100% - 30px)
        );
      `}
      fluid
      as="section"
    >
      <H31LayoutRow>
        {partners.map(partner => (
          <H31LayoutCol xs={4}>
            <H31BlogCard1
              overlayColor="rgba(243, 149, 8, 0.84)"
              ImageComponent={partner.image}
              title={partner.title}
              text={partner.text}
              link={partner.link}
              linkText="Visit Site"
            />
          </H31LayoutCol>
        ))}
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31LayoutContainer 
      css={css`
          padding: 60px 0 !important;
      `}
      fluid 
      as="section"
    >
      <H31LayoutRow>
        <H31LayoutCol md={3} />
        <H31LayoutCol md={6}>
          <H31Text3>
              A collective bargaining agreement enables you to have a voice in every area of your employment. This includes your wages and all of your working conditions (from break times to health benefits).
          </H31Text3>
        </H31LayoutCol>
        <H31LayoutCol md={3} />
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31CallToAction />

  </Layout>
);
