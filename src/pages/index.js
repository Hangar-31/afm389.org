/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { css } from "@emotion/core";

// Config
import _config from "../components/_config";

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
  H31Link7
} from "../components/h31";
import ImgMastheadHome from "../components/images/mastheads/ImgMastheadHome";

// Images
import ImgHome1 from "../components/images/_home/ImgHome1";
import ImgHome2 from "../components/images/_home/ImgHome2";
import ImgHome3 from "../components/images/_home/ImgHome3";
import ImgHome4 from "../components/images/_home/ImgHome4";
import Paragraph1 from "../components/h31/paragraphs/Paragraph1";

// Data
const contentBlocks = [
  {
    title: "Your Legal Support",
    text: `Having a contract is one thing, but having a contract backed by the
      union is another. We work with the finest attorneys in the business.
      We have recovered thousands of dollars for our members.`,
    image: <ImgHome1 />
  },
  {
    title: "Keeping You Informed",
    text: `The local music scene is ever-changing. Our member-ship is a great
      resource to help navigate that scene. Quarterly membership meetings,
      newsletters and social media can help keep you informed.`,
    image: <ImgHome2 />
  },
  {
    title: "A Vibrant Community",
    text: `Nearly 600 musicians call themselves CFMA members. From Jazz to
      Classical, Latin to Rock, R&B to Hip-Hop, our members play it all.`,
    image: <ImgHome3 />
  },
  {
    title: "Ready For A Rehearsal",
    text: (
      <>
        Use of the Rehearsal Hall is free for our members! More details can be
        found <H31Link7 to="/rehearsal-hall">here</H31Link7>.
      </>
    ),
    image: <ImgHome4 />
  }
];

export default () => {
  return (
    <Layout>
      <SEO
        title="Your Path To A Musical Career"
        description="Welcome to the Central Florida Musicians’ Association! For almost a century, we have been serving the interests of musicians in Central Florida. Whether you’re interested in the benefits of union membership or simply in joining the largest association of professional musicians in the country, we’re here for you!"
      />

      <H31Masthead1
        ImageComponent={<ImgMastheadHome />}
        title="Your Path to a Musical Career"
        text="Welcome to the Central Florida Musicians’ Association! For almost a century, we have been serving the interests of musicians in Central Florida. Whether you’re interested in the benefits of union membership or simply in joining the largest association of professional musicians in the country, we’re here for you!"
      />

      <div
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
      </div>

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
        title="Musicians Working For Musicians"
        subtitle="Helping Musicians Succeed"
        text="As part of the American Federation of Musicians — the largest
        organization in the world representing musicians — we are committed to
        raising industry standards in Central Florida. How can we help you?"
      />

      {contentBlocks.map((contentBlock, i) => (
        <H31ContentBlock1
          key={contentBlock.title}
          ImageComponent={contentBlock.image}
          title={contentBlock.title}
          text={contentBlock.text}
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
};
