/* eslint-disable no-underscore-dangle */
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
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Text3,
  H31CallToAction,
  H31SectionCBAS1
} from "../components/h31";

// Images
import ImgPartner1 from "../components/images/partners/ImgPartner1";
import ImgPartner2 from "../components/images/partners/ImgPartner2";
import ImgPartner3 from "../components/images/partners/ImgPartner3";
import Link4 from "../components/h31/base-elements/Link4";
import Text3 from "../components/h31/base-elements/Text3";

// Data

const benefits = [
  {
    name: "Free Rehearsal Space 24/7!",
    info: ["Finding an affordable, quality rehearsal space can be a challenge. However, our members have 24/7 access to our facility and musical equipment!"]
  },
  {
    name: "Liability Insurance",
    info: ["If you are performing on any government facility, from a school campus, to the Lake Eola Band Shell, you are required to carry Performance Liability Insurance, which can cost as much as $1,000 per year. As a member of CFMA however, you can purchase coverage for only $150 annually!"]
  },
  {
    name: "Member Directory",
    info: ["Our electronic directory has been requested by those seeking musicians such as the Walt Disney Company, church choir directors, musician contractors and more. As a member, you are listed under every category of instrument (including voice) which you use professionally. We also have listings for several other disciplines including: contractors, composers, and conductors!"]
  },
  {
    name: "Networking Opportunities",
    info: ["We provide quarterly membership meetings to “do the business of the association,” and monthly musician gatherings (a new benefit) to keep our members in touch with the many benefits of the Association. These also serve as means to network with your fellow musicians "]
  },
  {
    name: "Gig Referral",
    info: ["While we are not a “booking agency,” we do receive regular requests for musicians and bands to perform throughout the State."]
  },
  {
    name: "Payment Recovery",
    info: ["One issue that we often deal with at the CFMA office is musicians who have not been paid for their work. Over the years we have recovered tens of thousands of dollars for our members who have found themselves in this position."]
  },
  {
    name: "Free Standardize Contracts",
    info: ["We provide a two-page, user friendly local engagement contract. The agreement is in “fill in the blank” formatting, making it quick and easy to fill out."]
  },
  {
    name: "No Initiation Fees for Students",
    info: ["Any potential member who is enrolled in classes may join without having to pay initiation fees. You only need to be enrolled in one class to qualify, and there is no age restriction."]
  },
  {
    name: "No Initiation Fees for Bands",
    info: ["Understanding the investment we make in our careers, the AFM provides this cost savings benefit. If every member of a band joins at the same time, all initiation fees are waived."]
  },
  {
    name: "Free splash page on AFMentertainment.org",
    info: [
      <span>
      Every member of the Association is entitled to this free splash page. It is a page all about you, allowing you to post sound clips, links to your own website as well as information about your product.&nbsp;
        {<Link4 css={css`${Text3.__emotion_styles}; text-decoration: underline;`} href="www.AFMentertainment.org">AFMentertainment.org</Link4>} 
      &nbsp;is also advertised in the AFM National Convention Planner, for those seeking musicians and the like for their convention work.
      </span>
    ]
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

const articles = [
  {
    image: <ImgPartner1 />,
    title: "Walt Disney Parks and Resorts U.S.",
    text: "One of the largest employers of professional musicians in Central Florida – our members benefit from a long negotiating relationship with Disney.",
    link: "/",
    linkText: "Visit Site"
  },
  {
    image: <ImgPartner2 />,
    title: "Orlando Philharmonic Orchestra",
    text: "Newly unionized in 2012, our agreement and amiable working relationship with the Philharmonic continues to better wages and working conditions for our musicians.",
    link: "/",
    linkText: "Visit Site"
  },
  {
    image: <ImgPartner3 />,
    title: "Broadway Across America",
    text: "Bringing professional-level Broadway shows to the Central Florida stage requires professional musicians, too. Broadway shows musicians are booked by a Union contractor.",
    link: "/",
    linkText: "Visit Site"
  }
]

export default () => (
  <Layout>
    <SEO title="Member Benefits" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadMemberBenefits />}
      title="How We Support Musicians"
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
      {benefits.map(benefit => (
        <H31ToggleInfo1 name={benefit.name} info={benefit.info} />
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
              A collective bargaining agreement enables you to have a voice in every area of your employment. This includes your wages and all of your working conditions (from break times to health benefits).
          </H31Text3>
        </H31LayoutCol>
        <H31LayoutCol xs={1} sm={2} md={3} />
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31CallToAction />

  </Layout>
);
