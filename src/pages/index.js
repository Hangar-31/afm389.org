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
  H31Title3A,
  H31Paragraph1,
  H31TitleWithBackground,
  H31TextBlock2,
  H31Button2,
  H31Text1,
  H31Text2,
  H31Text3,
  H31Text4,
  H31Title2A,
  H31ButtonBright,
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex tempor, placerat sapien a.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome2 />,
    title: "ORLANDO MUSICIANS CONFERENCE",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex tempor, placerat sapien a.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome3 />,
    title: "10 TIPS FOR LIVE PERFORMANCES",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex tempor, placerat sapien a.",
    date: "May 15, 2019",
    link: "/"
  },
  {
    image: <ImgHome4 />,
    title: "CFMA MAY 12th MUSICIANS SOCIAL",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex tempor, placerat sapien a.",
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
      TitleComponent={
        <H31TitleWithBackground
          backgroundColor={_config.colorPrimary}
          title="Your Path to a Musical Career"
        />
      }
      ParagraphComponent={
        <H31Paragraph1
          TextComponent={
            <H31Text1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
              rhoncus ligula. Quisque commodo, eros auctor elementum aliquam,
              urna turpis dapibus dolor, non feugiat tortor lectus.
            </H31Text1>
          }
        />
      }
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorWhite}
      TitleComponent1={<H31Title2B>Recent News And Events</H31Title2B>}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
          leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex tempor,
          placerat sapien a. Donec nec iaculis libero. Mauris ornare auctor dui
          at tincidunt. Pellentesque sollicitudin venenatis neque. Nunc pulvinar
          ut ante ut dapibus.
        </H31Text3>
      }
      backgroundColor={_config.colorSecondary}
    />

    <H31ContentBlock1
      ImageComponent={<ImgHome1 />}
      TitleComponent={
        <H31Title2A
          css={css`
            color: ${_config.colorPrimary};
          `}
        >
          Your Legal Support
        </H31Title2A>
      }
      TextComponent={
        <H31Text3>
          Sed ac neque ac sem iaculis commodo. Aenean accumsan in neque non
          tempus. Aenean euismod metus leo, at euismod libero pharetra eu. Cras
          ultrices imperdiet tortor. Sed mollis eros id arcu auctor, sit amet
          posuere arcu facilisis. Aliquam et euismod neque, in rhoncus lectus.
          Suspendisse dictum vitae massa sed lacinia.
        </H31Text3>
      }
      backgroundColor="#F9F9F9"
    />

    <H31ContentBlock1
      ImageComponent={<ImgHome2 />}
      TitleComponent={
        <H31Title2A
          css={css`
            color: ${_config.colorSecondary};
          `}
        >
          Keeping You Informed
        </H31Title2A>
      }
      TextComponent={
        <H31Text3>
          Sed ac neque ac sem iaculis commodo. Aenean accumsan in neque non
          tempus. Aenean euismod metus leo, at euismod libero pharetra eu. Cras
          ultrices imperdiet tortor. Sed mollis eros id arcu auctor, sit amet
          posuere arcu facilisis. Aliquam et euismod neque, in rhoncus lectus.
          Suspendisse dictum vitae massa sed lacinia.
        </H31Text3>
      }
      textRight
    />

    <H31ContentBlock1
      ImageComponent={<ImgHome3 />}
      TitleComponent={
        <H31Title2A
          css={css`
            color: ${_config.colorPrimary};
          `}
        >
          A Vibrant Community
        </H31Title2A>
      }
      TextComponent={
        <H31Text3>
          Sed ac neque ac sem iaculis commodo. Aenean accumsan in neque non
          tempus. Aenean euismod metus leo, at euismod libero pharetra eu. Cras
          ultrices imperdiet tortor. Sed mollis eros id arcu auctor, sit amet
          posuere arcu facilisis. Aliquam et euismod neque, in rhoncus lectus.
          Suspendisse dictum vitae massa sed lacinia.
        </H31Text3>
      }
      backgroundColor="#F9F9F9"
    />

    <H31ContentBlock1
      ImageComponent={<ImgHome4 />}
      TitleComponent={
        <H31Title2A
          css={css`
            color: ${_config.colorSecondary};
          `}
        >
          Ready For A Rehearsal
        </H31Title2A>
      }
      TextComponent={
        <H31Text3>
          Sed ac neque ac sem iaculis commodo. Aenean accumsan in neque non
          tempus. Aenean euismod metus leo, at euismod libero pharetra eu. Cras
          ultrices imperdiet tortor. Sed mollis eros id arcu auctor, sit amet
          posuere arcu facilisis. Aliquam et euismod neque, in rhoncus lectus.
          Suspendisse dictum vitae massa sed lacinia.
        </H31Text3>
      }
      textRight
      backgroundColor="#F9F9F9"
    />

    <H31CallToAction
      backgroundColor={_config.colorPrimary}
      TitleComponent={
        <H31Title2C
          css={css`
            color: ${_config.colorWhite};
          `}
        >
          Your Path To A Musical Career
          <br />
          <span
            css={css`
              color: ${_config.colorSecondary};
            `}
          >
            Starts
          </span>
          &nbsp;
          <span
            css={css`
              color: ${_config.colorTertiary};
            `}
          >
            Here
          </span>
        </H31Title2C>
      }
      TextComponent={
        <H31Text2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
          leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex tempor,
          placerat sapien a. Donec nec iaculis libero. Mauris ornare auctor dui
          at tincidunt. Pellentesque sollicitudin venenatis neque. Nunc pulvinar
          ut ante ut dapibus.
        </H31Text2>
      }
      ButtonComponent={
        <H31ButtonBright
          borderColor={_config.colorWhite}
          backgroundColor={_config.colorTertiary}
          ButtonComponent={<H31Button2>Join Now</H31Button2>}
        />
      }
    />
    <H31SectionTitleFullWidth
      backgroundColor={_config.colorWhite}
      TitleComponent1={<H31Title2B>Testimonials</H31Title2B>}
    />
    <H31Layout3Col>
      <>
        {reviews.map(review => (
          <H31Testimonials
            key={review.name}
            titleColor={_config.colorSecondary}
            TitleComponent={<H31Title3A>{review.name}</H31Title3A>}
            TextComponent={<H31Text4>{review.text}</H31Text4>}
          />
        ))}
      </>
    </H31Layout3Col>
  </Layout>
);
