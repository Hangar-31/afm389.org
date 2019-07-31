/* eslint-disable react/jsx-wrap-multilines */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import H31ContentBlock2 from "../components/h31/content-block/ContentBlock2";

// Images
import ImgMastheadAbout from "../components/images/mastheads/ImgMastheadAbout";
import {
  H31Masthead1,
  H31Text3,
  H31Layout3Col,
  H31Testimonials,
  H31SectionTitleFullWidth
} from "../components/h31";
import _config from "../components/_config";
import ImgAbout1 from "../components/images/_about/ImgAbout1";

const data = [
  <H31Text3>
    Having a dispute with your employer? Are you owed money from a contractor or
    organization for whom you have worked? We have recovered tens of thousands
    of dollars for our members over the years.
  </H31Text3>,
  <H31Text3>
    Would you like coaching on how to audition for Walt Disney World? We hold up
    to three auditions per year for our members to audition for the company and
    we would love to help you prepare.
  </H31Text3>,
  <ImgAbout1 />,
  <H31Text3>
    Are you new in town and need to know who to connect with? We network through
    membership meetings, a contractor list, social media and a quarterly
    newsletter, among other things.
  </H31Text3>,
  <H31Text3>
    Wondering what the next step in your career should be? We are happy to share
    our years of experience on formulating a plan that fits your needs and
    dreams.
  </H31Text3>
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
      ImageComponent={<ImgMastheadAbout />}
      title="From The Team At CFMA"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id rhoncus ligula. Quisque commodo, eros auctor elementum aliquam, urna turpis dapibus dolor, non feugiat tortor lectus."
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      titleSmall="Central FL Musicians Association"
      titleSmallColor={_config.colorSecondary}
      titleLarge="CFMA Local 389 - History"
    />

    <H31ContentBlock2 title="We Work For Musicians">{data}</H31ContentBlock2>

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
