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
  H31TitleWithBackground,
  H31Title1B,
  H31Masthead1,
  H31SectionTitleFullWidth,
  H31Title2B,
  H31Title2A,
  H31ToggleInfo1,
  H31Layout3Col,
  H31BlogCard1,
  H31Title3B,
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
      TitleComponent={(
        <H31TitleWithBackground
          backgroundColor={_config.colorPrimary}
          TitleComponent={<H31Title1B>How We Support Musicians</H31Title1B>}
        />
        )}
      ParagraphComponent={<></>}
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      TitleComponent1={<H31Title2B>Central FL Musicians Association</H31Title2B>}
      TitleComponent2={(
        <H31Title2A
          css={css`
              color: ${_config.colorWhite};
            `}
        >
        Member Benefits
        </H31Title2A>
      )}
    />

    {benefits.map(benefit => (
      <H31ToggleInfo1 name={benefit.name} info={benefit.info} />
    ))}


    <H31SectionTitleFullWidth
      backgroundColor={_config.colorSecondary}
      TitleComponent1={(
        <H31Title2B css={css`
          color: ${_config.colorPrimary}
        `}
        >
          Central FL Musicians Association
        </H31Title2B>
      )}
      TitleComponent2={(
        <H31Title2A
          css={css`
              color: ${_config.colorWhite};
            `}
        >
        Board of Directors
        </H31Title2A>
      )}
    />

    <H31Layout3Col>
      {partners.map(partner => (
        <H31BlogCard1
          overlayColor="rgba(243, 149, 8, 0.64)"
          ImageComponent={partner.image}
          title={<H31Title3B>{partner.title}</H31Title3B>}
          text={partner.text}
          link="/"
          linkText="Click Here"
        />
      ))}
    </H31Layout3Col>

  </Layout>
);
