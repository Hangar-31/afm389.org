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
  H31BlogCard1,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31ButtonFillArrow
} from "../components/h31";
import ImgMastheadHome from "../components/images/mastheads/ImgMastheadHome";

// Images
import ImgHome1 from "../components/images/_home/ImgHome1";
import ImgHome2 from "../components/images/_home/ImgHome2";
import ImgHome3 from "../components/images/_home/ImgHome3";
import ImgHome4 from "../components/images/_home/ImgHome4";

// Data
const blogs = [
  {
    image: <ImgHome1 />,
    title: "2019 DISNEY OPEN CALL AUDITIONS",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "2013-01-01T00:00:00.000",
    link: "/"
  },
  {
    image: <ImgHome2 />,
    title: "ORLANDO MUSICIANS CONFERENCE",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "2013-01-01T00:00:00.000",
    link: "/"
  },
  {
    image: <ImgHome3 />,
    title: "10 TIPS FOR LIVE PERFORMANCES",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "2013-01-01T00:00:00.000",
    link: "/"
  },
  {
    image: <ImgHome4 />,
    title: "CFMA MAY 12th MUSICIANS SOCIAL",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "2013-01-01T00:00:00.000",
    link: "/"
  }
];

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
    text: `Use of the Rehearsal Hall is free for our members! More details can be
      found here.`,
    image: <ImgHome4 />
  }
];

const reviews = [
  {
    name: "Terrance Armstrong",
    text:
      "I had a problem with an individual at work. When I approached management, the Union was beside me all the way and supported me through a difficult time. Thank you!"
  },
  {
    name: "Noel MacFarland",
    text:
      "I had a problem with an individual at work. When I approached management, the Union was beside me all the way and supported me through a difficult time. Thank you!"
  },
  {
    name: "David Copperfield",
    text:
      "I had a problem with an individual at work. When I approached management, the Union was beside me all the way and supported me through a difficult time. Thank you!"
  }
];

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadHome />}
      title="Your Path to a Musical Career"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id rhoncus ligula. Quisque commodo, eros auctor elementum aliquam, urna turpis dapibus dolor, non feugiat tortor lectus."
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorWhite}
      titleSmall="Recent News And Events"
    />

    <H31LayoutContainer fluid as="section">
      <div
        css={css`
          position: absolute;
          width: 100%;
          top: 30px;
          height: calc(100% - 60px);
          background: linear-gradient(
            90deg,
            #6da55f calc(0% + 15px),
            #164f4b calc(100% - 15px)
          );
        `}
      />
      <H31LayoutRow>
        {blogs.map(blog => (
          <H31LayoutCol md={3}>
            <H31BlogCard1
              overlayColor="rgba(243, 149, 8, 0.84)"
              ImageComponent={blog.image}
              title={blog.title}
              text={blog.text}
              link={blog.link}
              linkText="Read More"
              date={blog.date}
            />
          </H31LayoutCol>
        ))}
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31LayoutContainer fluid as="section">
      <H31LayoutRow>
        <H31LayoutCol
          css={css`
            text-align: right;
          `}
          md={12}
        >
          <H31ButtonFillArrow
            link="/news-&-events"
            text="See All News"
            carrotColor={_config.colorTertiary}
            secondaryColor={_config.colorTertiary}
          />
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31TextBlock2
      title="We Work For Musicians"
      subtitle="Helping Musicians Succeed"
      text="As part of the American Federation of Musicians — the largest
      organization in the world representing musicians — we are committed to
      raising industry standards in Central Florida. How can we help you?"
    />

    {contentBlocks.map((contentBlock, i) => (
      <H31ContentBlock1
        ImageComponent={contentBlock.image}
        title={contentBlock.title}
        text={contentBlock.text}
        backgroundColor={i % 2 === 0 ? "#F9F9F9" : "transparent"}
        titleColor={i % 2 === 0 ? _config.colorPrimary : _config.colorSecondary}
        textRight={i % 2 !== 0}
      />
    ))}

    <H31CallToAction />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorWhite}
      titleSmall="Testimonials"
    />

    <H31LayoutContainer>
      <H31LayoutRow>
        {reviews.map(review => (
          <>
            <H31LayoutCol className="d-xs-block d-md-none" xs={1} md={0} />
            <H31LayoutCol xs={10} md={4}>
              <H31Testimonials
                key={review.name}
                titleColor={_config.colorSecondary}
                title={review.name}
                text={review.text}
              />
            </H31LayoutCol>
            <H31LayoutCol className="d-xs-block d-md-none" xs={1} md={0} />
          </>
        ))}
      </H31LayoutRow>
    </H31LayoutContainer>
  </Layout>
);
