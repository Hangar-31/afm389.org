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
  H31Title2B,
  H31Title2C,
  H31TextBlock2,
  H31Text3,
  H31Layout3Col,
  H31Layout4Col,
  H31BlogCard1
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
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome2 />,
    title: "ORLANDO MUSICIANS CONFERENCE",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome3 />,
    title: "10 TIPS FOR LIVE PERFORMANCES",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome4 />,
    title: "CFMA MAY 12th MUSICIANS SOCIAL",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "May 15, 2019",
    link: "/"
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

    <H31Layout4Col>
      {blogs.map(blog => (
        <H31BlogCard1
          overlayColor="rgba(243, 149, 8, 0.84)"
          ImageComponent={blog.image}
          title={blog.title}
          text={blog.text}
          link={blog.link}
          linkText="Read More"
          date={blog.date}
        />
      ))}
    </H31Layout4Col>

    <H31TextBlock2
      TitleComponent={
        <H31Title2C
          css={css`
            color: ${_config.colorDarkGrey};
          `}
        >
          We Work For Musicians
        </H31Title2C>
      }
      SubTitleComponent={<H31Title2B>Helping Musicians Succeed</H31Title2B>}
      TextComponent={
        <H31Text3>
          As part of the American Federation of Musicians — the largest
          organization in the world representing musicians — we are committed to
          raising industry standards in Central Florida. How can we help you?
        </H31Text3>
      }
      backgroundColor={_config.colorSecondary}
    />

    <H31ContentBlock1
      ImageComponent={<ImgHome1 />}
      TitleComponent={
        <H31Title2C
          css={css`
            color: ${_config.colorPrimary};
          `}
        >
          Your Legal Support
        </H31Title2C>
      }
      TextComponent={
        <H31Text3>
          Having a contract is one thing, but having a contract backed by the
          union is another. We work with the finest attorneys in the business.
          We have recovered thousands of dollars for our members.
        </H31Text3>
      }
      backgroundColor="#F9F9F9"
    />

    <H31ContentBlock1
      ImageComponent={<ImgHome2 />}
      TitleComponent={
        <H31Title2C
          css={css`
            color: ${_config.colorSecondary};
          `}
        >
          Keeping You Informed
        </H31Title2C>
      }
      TextComponent={
        <H31Text3>
          The local music scene is ever-changing. Our member-ship is a great
          resource to help navigate that scene. Quarterly membership meetings,
          newsletters and social media can help keep you informed.
        </H31Text3>
      }
      textRight
    />

    <H31ContentBlock1
      ImageComponent={<ImgHome3 />}
      TitleComponent={
        <H31Title2C
          css={css`
            color: ${_config.colorPrimary};
          `}
        >
          A Vibrant Community
        </H31Title2C>
      }
      TextComponent={
        <H31Text3>
          Nearly 600 musicians call themselves CFMA members. From Jazz to
          Classical, Latin to Rock, R&B to Hip-Hop, our members play it all.
        </H31Text3>
      }
      backgroundColor="#F9F9F9"
    />

    <H31ContentBlock1
      ImageComponent={<ImgHome4 />}
      TitleComponent={
        <H31Title2C
          css={css`
            color: ${_config.colorSecondary};
          `}
        >
          Ready For A Rehearsal
        </H31Title2C>
      }
      TextComponent={
        <H31Text3>
          Use of the Rehearsal Hall is free for our members! More details can be
          found here.
        </H31Text3>
      }
      textRight
      backgroundColor="#F9F9F9"
    />

    <H31CallToAction />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorWhite}
      titleSmall="Testimonials"
    />

    <H31Layout3Col>
      {reviews.map(review => (
        <H31Testimonials
          key={review.name}
          titleColor={_config.colorSecondary}
          title={review.name}
          text={review.text}
        />
      ))}
    </H31Layout3Col>
  </Layout>
);
